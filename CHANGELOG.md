## [1.0.6](https://github.com/pascaliske/docker-traefik-errors/compare/v1.0.5...v1.0.6) (2023-04-15)


### Bug Fixes

* **deps:** update dependency @nguniversal/express-engine to v14.2.1 ([aa523da](https://github.com/pascaliske/docker-traefik-errors/commit/aa523da62989bb7cf103e4990f6fcb2cf5b32fa8))
* **deps:** update dependency @nguniversal/express-engine to v14.2.2 ([27717a4](https://github.com/pascaliske/docker-traefik-errors/commit/27717a4b178980626561432feaaebc15e2dcfbcd))
* **deps:** update dependency @nguniversal/express-engine to v15.2.0 ([d58bd9e](https://github.com/pascaliske/docker-traefik-errors/commit/d58bd9e3872d37c5764d5bb16b8450071287844b))
* **deps:** update dependency @nguniversal/express-engine to v15.2.1 ([c068023](https://github.com/pascaliske/docker-traefik-errors/commit/c068023b590d526aed245d0168afe1d32ec0176c))
* **deps:** update dependency rxjs to ~7.6.0 ([7a59356](https://github.com/pascaliske/docker-traefik-errors/commit/7a593565307b4ce21035333c2b775308da65cdf6))
* **deps:** update dependency rxjs to ~7.8.0 ([958b562](https://github.com/pascaliske/docker-traefik-errors/commit/958b56200a4347867423eabb71a6bbd0b5f772b5))
* **deps:** update dependency zone.js to ~0.12.0 ([27a644e](https://github.com/pascaliske/docker-traefik-errors/commit/27a644eb3fed62df9841770417f1847c76f09863))
* **deps:** update dependency zone.js to ~0.13.0 ([890318b](https://github.com/pascaliske/docker-traefik-errors/commit/890318b773463fe5d89fd957e3902282f08a2ca2))
* replace deprecated pluck operator with map ([9d04c18](https://github.com/pascaliske/docker-traefik-errors/commit/9d04c181007a1a71d3dbb585dad3626df54bbbc6))



## [1.0.5](https://github.com/pascaliske/docker-traefik-errors/compare/v1.0.4...v1.0.5) (2022-09-28)


### Bug Fixes

* **docker:** downgrade to node lts version due to bug with prerendering ([364732f](https://github.com/pascaliske/docker-traefik-errors/commit/364732fb81d935f83614b6a5ff499f12fe08ebbe))
* **docker:** pin base image to exact version ([63023cd](https://github.com/pascaliske/docker-traefik-errors/commit/63023cdcbbf7c48334bd83a16830a1c5cac28e19))



## [1.0.4](https://github.com/pascaliske/docker-traefik-errors/compare/v1.0.3...v1.0.4) (2022-08-07)


### Bug Fixes

* **app:** replace deprecated value for initial navigation setting ([6ed598f](https://github.com/pascaliske/docker-traefik-errors/commit/6ed598fafb2965a612ca89cc9c6a62aa8e5085b0))



## [1.0.3](https://github.com/pascaliske/docker-traefik-errors/compare/v1.0.2...v1.0.3) (2022-02-11)


### Bug Fixes

* only append retry url if current location is available ([a71b77e](https://github.com/pascaliske/docker-traefik-errors/commit/a71b77edfce56821c9dbdfc03251d62c4300e27a))



## [1.0.2](https://github.com/pascaliske/docker-traefik-errors/compare/v1.0.1...v1.0.2) (2022-02-11)


### Bug Fixes

* only redirect to 404 if invalid codes are present ([0c26c33](https://github.com/pascaliske/docker-traefik-errors/commit/0c26c33c168e2e67f80dc7529e7729fc3adab6c0))



## [1.0.1](https://github.com/pascaliske/docker-traefik-errors/compare/v1.0.0...v1.0.1) (2021-11-26)


### Bug Fixes

* **error:** use angular document injectable instead of window global ([d9a3f5e](https://github.com/pascaliske/docker-traefik-errors/commit/d9a3f5e2822ee9f737b82a76f1f611ff69cbc88c))



# [1.0.0](https://github.com/pascaliske/docker-traefik-errors/compare/v0.0.1...v1.0.0) (2021-11-26)


### Bug Fixes

* **app:** use query parameter for error code to prevent angular router navigations ([90c1995](https://github.com/pascaliske/docker-traefik-errors/commit/90c199533d5b9af97646908fae78b972cbb58474))
* **nginx:** move access log to file to prevent flooding container logs ([38078ad](https://github.com/pascaliske/docker-traefik-errors/commit/38078adf5a23061f5f002f0e120798f133596097))



## 0.0.1 (2021-11-23)


### Bug Fixes

* **dockerfile:** fix healthcheck command ([3904106](https://github.com/pascaliske/docker-traefik-errors/commit/3904106d2807c2397351a763115e72023dc60a70))


### Features

* enable server side rendering and prerendering for common error pages ([d05d7e5](https://github.com/pascaliske/docker-traefik-errors/commit/d05d7e5e5def460d4fbfa37c05edc9fd1289531e))
* enable tagged semver releases ([606d469](https://github.com/pascaliske/docker-traefik-errors/commit/606d469f16cd7e3317a68a596bcba01d137adbaa))
* **dockerfile:** add healthcheck for docker container ([46eca91](https://github.com/pascaliske/docker-traefik-errors/commit/46eca9114bdf2847db8599cd9f887f487ba80668))
* **dockerfile:** allow changing nginx port by environment variable ([515a5c5](https://github.com/pascaliske/docker-traefik-errors/commit/515a5c56cd722f51ea03c6ff6c0cc639e166ee9b))
* add responsive design for error pages ([f499cf7](https://github.com/pascaliske/docker-traefik-errors/commit/f499cf762a381142806859d1efb09aef36f6d85b))
* validate code parameter and redirect if invalid ([064af38](https://github.com/pascaliske/docker-traefik-errors/commit/064af38af8b31851e31fbcec4635cc4045bc8d62))



