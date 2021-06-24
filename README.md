# `pascaliske/docker-traefik-errors`

> Custom build error pages for your traefik installation.

[![Docker Image Version (tag latest semver)](https://img.shields.io/docker/v/pascaliske/traefik-errors/latest?style=flat-square)](https://hub.docker.com/r/pascaliske/traefik-errors) [![Docker Image Size (tag)](https://img.shields.io/docker/image-size/pascaliske/traefik-errors/latest?style=flat-square)](https://hub.docker.com/r/pascaliske/traefik-errors) [![Docker Pulls](https://img.shields.io/docker/pulls/pascaliske/traefik-errors?style=flat-square)](https://hub.docker.com/r/pascaliske/traefik-errors) [![GitHub Tag](https://img.shields.io/github/v/tag/pascaliske/docker-traefik-errors?style=flat-square)](https://github.com/pascaliske/docker-traefik-errors) [![Build Status](https://img.shields.io/github/workflow/status/pascaliske/docker-traefik-errors/Image/master?label=build&style=flat-square)](https://github.com/pascaliske/docker-traefik-errors/actions) [![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT) [![GitHub Last Commit](https://img.shields.io/github/last-commit/pascaliske/docker-traefik-errors?style=flat-square)](https://github.com/pascaliske/docker-traefik-errors) [![Awesome Badges](https://img.shields.io/badge/badges-awesome-green.svg?style=flat-square)](https://github.com/Naereen/badges)

## Usage

To use the error pages you have to do these two steps:

### 1. Setup error service

The easiest way to use the service is `docker-compose`:

```yaml
version: '3.7'
services:
  traefik:
    image: traefik:latest
    container_name: traefik
    ports:
      - '80:80'
    command:
      - --providers.docker=true
      - --providers.docker.exposedbydefault=false
      - --entrypoints.http.address=:80
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - /path/to/traefik/config:/etc/traefik
  traefik-errors:
    image: pascaliske/traefik-errors:latest
    container_name: traefik-errors
    labels:
      - traefik.enable=true
      - traefik.http.routers.traefik-errors.rule=HostRegexp(`{host:.+}`)
      - traefik.http.routers.traefik-errors.entrypoints=http
      - traefik.http.routers.traefik-errors.priority=1
      - traefik.http.routers.traefik-errors.middlewares=error-pages@file
  whoami:
    image: traefik/whoami
    container_name: whoami
    labels:
      - traefik.enable=true
      - traefik.http.routers.whoami.rule=Host(`whoami.domain.tld`)
      - traefik.http.routers.whoami.entrypoints=http
      - traefik.http.routers.whoami.middlewares=error-pages@file
```

### 2. Configure traefik middleware

Create a dynamic config file for traefik:

```yaml
http:
  middlewares:
    error-pages:
      errors:
        service: traefik-errors
        query: "/{status}?home=domain.tld" # home parameter is optional
        status:
          - 400-599
```

## License

[MIT](LICENSE.md) – © 2021 [Pascal Iske](https://pascaliske.dev)
