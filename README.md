# generator-node-api-docker-1st-class-experience [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> NodeJS + Typescript + TSLint + Restify + MongoDB + Docker, With VS Code Automation = VSCode TypeScript Live Debug with Containers

## Installation

First, install [Yeoman](http://yeoman.io) and generator-node-api-docker-1st-class-experience using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo generator-node-api-docker-1st-class-experience
```

Then generate your new project:

```bash
yo node-api-docker-1st-class-experience
```

## The 1st class experience with NodeJS, Typescript, Docker

 * A NodeJS API with TypeScript, TSLint, Restify, MongoDB.
 * Using VSCode you will be able to:
    * Use VSCode to debug TypeScript based NodeJS application locally (using `Local debug` debug configuration).
    * Use VSCode to build and debug the TypeScript based NodeJS application behind the docker container with Docker Compose (using `Docker debug` debug configuration).
    * Use VSCode to build and debug with live reload of the TypeScript based NodeJS application behind the docker container with Docker Compose (using `[docker] build-and-watch` VSCode task and `Docker + watch debug` debug configuration).
 * With docker you will be able to:
    * v3 based docker-compose.yml.
    * The build is two-phase based, to get packages separately of application build.
    * Execute `docker-compose up` command to create a production ready deployment.
    * MongoDB container will be created side-by-side with your aplication, automatically, secured by authentication.
 * VSCode Integration
    * 3 debug options.
    * 5 VSCode tasks (including build task) to perform all necessary operations to manage, debug and build with docker.
    * TSLint with autofix enabled on VSCode and Build.
 



## License

MIT © [Luiz Carlos Faria](http://luizcarlosfaria.net/)


[npm-image]: https://badge.fury.io/js/generator-node-api-docker-1st-class-experience.svg
[npm-url]: https://npmjs.org/package/generator-node-api-docker-1st-class-experience
[travis-image]: https://travis-ci.org/luizcarlosfaria/generator-node-api-docker-1st-class-experience.svg?branch=master
[travis-url]: https://travis-ci.org/luizcarlosfaria/generator-node-api-docker-1st-class-experience
[daviddm-image]: https://david-dm.org/luizcarlosfaria/generator-node-api-docker-1st-class-experience.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/luizcarlosfaria/generator-node-api-docker-1st-class-experience
[coveralls-image]: https://coveralls.io/repos/luizcarlosfaria/generator-node-api-docker-1st-class-experience/badge.svg
[coveralls-url]: https://coveralls.io/r/luizcarlosfaria/generator-node-api-docker-1st-class-experience
