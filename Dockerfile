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

# remove default pages
RUN rm -rf /usr/share/nginx/html/*

# copy built app
COPY --from=builder /build/dist/docker-traefik-errors /usr/share/nginx/html
COPY --from=builder /build/nginx.conf /etc/nginx/conf.d/default.conf

# expose port
EXPOSE 80

# define entrypoint
ENTRYPOINT ["nginx", "-g", "daemon off;"]
