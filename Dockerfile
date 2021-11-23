# builder image
FROM --platform=${BUILDPLATFORM} node:16-alpine AS builder
LABEL maintainer="info@pascaliske.dev"
WORKDIR /build

# copy sources
COPY . /build

# install dependencies
RUN yarn install --frozen-lockfile --ignore-scripts

# build & prerender
RUN yarn run lint && \
    yarn run build && \
    yarn run build:ssr && \
    yarn run prerender

# final image
FROM nginx:alpine
LABEL maintainer="info@pascaliske.dev"

# environment
ENV NGINX_PORT=8080

# remove default pages
RUN rm -rf /usr/share/nginx/html/*

# copy entrypoint & nginx
COPY ./docker-entrypoint.sh /entrypoint.sh
COPY --from=builder /build/nginx.conf /etc/nginx/conf.d/default.conf

# copy built app
COPY --from=builder /build/dist/docker-traefik-errors/browser /usr/share/nginx/html

# expose port
EXPOSE ${NGINX_PORT}

# health check of error pages
HEALTHCHECK CMD wget --no-verbose --tries=1 --spider http://localhost:${NGINX_PORT} || exit 1

# define entrypoint & command
ENTRYPOINT ["/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
