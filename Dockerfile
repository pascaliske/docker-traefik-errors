# builder image
FROM --platform=${BUILDPLATFORM} node:16-alpine AS builder
LABEL maintainer="info@pascaliske.dev"
WORKDIR /build

# copy sources
COPY . /build

# install dependencies
RUN yarn install --frozen-lockfile --ignore-scripts

# build & package
RUN yarn build

# final image
FROM nginx:alpine
LABEL maintainer="info@pascaliske.dev"

# environment
ENV NGINX_PORT=8080

# remove default pages
RUN rm -rf /usr/share/nginx/html/*

# copy built app
COPY --from=builder /build/dist/docker-traefik-errors /usr/share/nginx/html
COPY --from=builder /build/nginx.conf /etc/nginx/conf.d/default.conf

# configure port in nginx
RUN sed -i 's/listen 80/listen ${NGINX_PORT}/g' /etc/nginx/conf.d/default.conf

# expose port
EXPOSE ${NGINX_PORT}

# health check of error pages
HEALTHCHECK CMD ["wget --no-verbose --tries=1 --spider http://localhost || exit 1"]

# define entrypoint
ENTRYPOINT ["nginx", "-g", "daemon off;"]
