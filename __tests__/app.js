'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-node-api-docker-1st-class-experience:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        projectName: 'teste_api',
        projectDescription: 'projectDescription',
        mongodbUsername: 'mongodbUsername',
        mongodbPassword: 'mongodbPassword'
      });
  });

  it('creates files', () => {
    assert.file([
      'docker-compose.debug.yml',
      'docker-compose.yml',
      'Dockerfile.all.teste_api-api-base',
      'Dockerfile.debug.teste_api-api',
      'Dockerfile.release.teste_api-api',
      'package.json',
      'tsconfig.json',
      'tslint.json',
      'typings.json',
      '.gitignore'
    ]);
    assert.fileContent('docker-compose.yml', 'mongodb_app: mongodb://mongodbUsername:mongodbPassword@mongo:27017/admin');
    assert.fileContent('docker-compose.yml', 'MONGO_INITDB_ROOT_USERNAME: mongodbUsername');
    assert.fileContent('docker-compose.yml', 'MONGO_INITDB_ROOT_PASSWORD: mongodbPassword');
  });
});
