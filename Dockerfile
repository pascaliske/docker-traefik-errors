# dependencies image
FROM --platform=${BUILDPLATFORM} node:18-alpine AS dependencies
LABEL maintainer="info@pascaliske.dev"
WORKDIR /build

# copy sources
COPY package.json /build
COPY yarn.lock /build

# install dependencies
RUN yarn install --frozen-lockfile --ignore-scripts

# builder image
FROM --platform=${BUILDPLATFORM} node:18-alpine AS builder
LABEL maintainer="info@pascaliske.dev"
WORKDIR /build

# copy dependencies
COPY --from=dependencies /build/node_modules /build/node_modules

# copy sources
COPY . /build

# build & prerender
RUN yarn run lint && \
    yarn run build && \
    yarn run build:ssr && \
    yarn run prerender

# final image
FROM nginx:1.25.1-alpine
LABEL maintainer="info@pascaliske.dev"

# environment
ENV NGINX_PORT=8080

# remove default pages
RUN rm -rf /usr/share/nginx/html/*

# copy entrypoint & nginx
COPY ./docker-entrypoint.sh /entrypoint.sh
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# copy built app
COPY --from=builder /build/dist/docker-traefik-errors/browser /usr/share/nginx/html

# expose port
EXPOSE ${NGINX_PORT}

# expose access logs
VOLUME /var/log/nginx

# health check of error pages
HEALTHCHECK CMD wget --no-verbose --tries=1 --spider http://localhost:${NGINX_PORT} || exit 1

# define entrypoint & command
ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
