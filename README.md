# generator-node-api-docker-1st-class-experience [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage percentage][coveralls-image]][coveralls-url] [![Downloads][npm-downloads-week]][npm-url] [![Downloads][npm-downloads-month]][npm-url] [![Downloads][npm-downloads-year]][npm-url] [![Downloads][npm-downloads-all]][npm-url]

[![Greenkeeper badge](https://badges.greenkeeper.io/luizcarlosfaria/generator-node-api-docker-1st-class-experience.svg)](https://greenkeeper.io/)
> NodeJS + Typescript + TSLint + Restify + MongoDB + Docker, With VS Code Automation = VSCode TypeScript Live Debug with Containers

## Installation

First, install [Yeoman](http://yeoman.io) and generator-node-api-docker-1st-class-experience using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo generator-node-api-docker-1st-class-experience
```

## Then generate your new project:

1. Create a new folder.

2. Run ```yo node-api-docker-1st-class-experience```

3. Open VSCode `code .`

4. Put a breakpoint at line 21 of ./src/server.ts 

5. Just press F5 key (The first launch task uses docker to debug, you have other two options to debug in launch dropdown)

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
    * Use status-bar-tasks [Status Bar Tasks VSCode plugin][status-bar-tasks-url]  to see all tasks on status bar or use `Tasks: Run Task` with pressing `Ctrl+p >`
 
## Notes
* Local build will run in 2 seconds.
* First docker build is a full build and will during 3 minutes or more (depending on your connection speed).
* Every next build will run in seconds (
* Only changes in below files will demand a full build:
  * `package-lock.json`
  * `package.json`
  * `tsconfig.json`
  * `tslint.json`
  * `typings.json`

## License

![MIT][npm-license] © [Luiz Carlos Faria](http://luizcarlosfaria.net/) ![made in brazil][brazil]


[brazil]:http://www.goal.cc/content/images/flags/28.png
[npm-image]: https://badge.fury.io/js/generator-node-api-docker-1st-class-experience.svg
[npm-url]: https://npmjs.org/package/generator-node-api-docker-1st-class-experience
[travis-image]: https://travis-ci.org/luizcarlosfaria/generator-node-api-docker-1st-class-experience.svg?branch=master
[travis-url]: https://travis-ci.org/luizcarlosfaria/generator-node-api-docker-1st-class-experience
[daviddm-image]: https://david-dm.org/luizcarlosfaria/generator-node-api-docker-1st-class-experience.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/luizcarlosfaria/generator-node-api-docker-1st-class-experience
[coveralls-image]: https://coveralls.io/repos/luizcarlosfaria/generator-node-api-docker-1st-class-experience/badge.svg
[coveralls-url]: https://coveralls.io/r/luizcarlosfaria/generator-node-api-docker-1st-class-experience
[status-bar-tasks-url]:https://marketplace.visualstudio.com/items?itemName=GuardRex.status-bar-tasks
[dependencies]:https://img.shields.io/david/luizcarlosfaria/generator-node-api-docker-1st-class-experience.svg



[npm-downloads-all]:https://img.shields.io/npm/dt/generator-node-api-docker-1st-class-experience.svg
[npm-downloads-week]:https://img.shields.io/npm/dw/generator-node-api-docker-1st-class-experience.svg
[npm-downloads-month]:https://img.shields.io/npm/dm/generator-node-api-docker-1st-class-experience.svg
[npm-downloads-year]:https://img.shields.io/npm/dy/generator-node-api-docker-1st-class-experience.svg
[npm-license]:https://img.shields.io/npm/l/generator-node-api-docker-1st-class-experience.svg