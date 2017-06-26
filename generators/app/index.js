'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const uuid = require('uuid/v4');
var replace = require('lodash.replace');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to ' + chalk.red('Node API 1st class experience with Docker and VS Code') + ' generator!'
    ));

    const prompts = [{
      type: 'input',
      name: 'projectName',
      message: 'Your project name',
      default: this.escapeName(this.appname) // Default to current folder name
    }, {
      type: 'input',
      name: 'projectDescription',
      message: 'Project Description?'
    }, {
      type: 'input',
      name: 'mongodbUsername',
      message: 'MongoDB root username',
      default: 'app_mongo_user'
    }, {
      type: 'input',
      name: 'mongodbPassword',
      message: 'MongoDB root password',
      default: this.passwordGen()
    }, {
      type: 'confirm',
      name: 'enableGit',
      message: 'Do you want create a new GIT repo for this project?'
    }, {
      type: 'confirm',
      name: 'openVSCode',
      message: 'Do you want to open Visual Studio Code after project generation?'
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      props.projectName = this.escapeName(props.projectName);
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath(''),
      this.destinationPath(''),
      this.props
    );
    this.fs.copyTpl(
      this.templatePath('.vscode/'),
      this.destinationPath('.vscode/'),
      this.props
    );
    this.fs.move(this.destinationPath('_gitignore'), this.destinationPath('.gitignore'));
    this.fs.move(this.destinationPath('_package.json'), this.destinationPath('package.json'));

    this.fs.move(this.destinationPath('Dockerfile.all.projectName-api-base'), this.destinationPath(`Dockerfile.all.${this.props.projectName}-api-base`));
    this.fs.move(this.destinationPath('Dockerfile.debug.projectName-api'), this.destinationPath(`Dockerfile.debug.${this.props.projectName}-api`));
    this.fs.move(this.destinationPath('Dockerfile.release.projectName-api'), this.destinationPath(`Dockerfile.release.${this.props.projectName}-api`));
  }

  passwordGen() {
    const newPassword = replace(replace(replace(replace(uuid(), '-', ''), '-', ''), '-', ''), '-', '');
    return newPassword;
  }

  escapeName(textToEscape) {
    if (textToEscape === undefined) {
      return textToEscape;
    }
    var escapedName = textToEscape.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    return escapedName;
  }

  install() {
    this.spawnCommandSync('npm', ['run', 'restore-global']);
    this.spawnCommandSync('npm', ['install', 'mongodb', 'restify', '--save']);
    this.spawnCommandSync('npm', ['install', '@types/mongodb', '@types/restify', '--save-dev']);
    this.spawnCommandSync('typings', ['install', 'body-parser', 'mongodb', '--save']);

    if (this.props.enableGit === true) {
      this.spawnCommandSync('git', ['init']);
      this.spawnCommandSync('git', ['add', '.']);
      this.spawnCommandSync('git', ['commit', '-m', 'node-api-docker-1st-class-experience baseline']);
    }

    if (this.props.openVSCode === true) {
      this.spawnCommand('code', ['.']);
    }
    // This.installDependencies({bower: false});
  }
};
