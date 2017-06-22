'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');
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
      default: this.appname // Default to current folder name
    }, {
      type: 'input',
      name: 'projectDescription',
      message: 'Project Description?'
    }, {
      type: 'input',
      name: 'mongodbUsername',
      message: 'MongoDB root username',
      default: "app_mongo_user"
    }, {
      type: 'input',
      name: 'mongodbPassword',
      message: 'MongoDB root password',
      default: this.passwordGen()
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
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
    this.fs.move(this.destinationPath('Dockerfile.all.projectName-api-base'), this.destinationPath(`Dockerfile.all.${this.props.projectName}-api-base`));
    this.fs.move(this.destinationPath('Dockerfile.debug.projectName-api'), this.destinationPath(`Dockerfile.debug.${this.props.projectName}-api`));
    this.fs.move(this.destinationPath('Dockerfile.release.projectName-api'), this.destinationPath(`Dockerfile.release.${this.props.projectName}-api`));
  }

  passwordGen() {
    const newPassword = replace(replace(replace(replace(uuid(), "-", ""), "-", ""), "-", ""), "-", "");
    return newPassword;
  }

  install() {
    this.spawnCommandSync("npm", ["run", "restore-all"]);
    //this.installDependencies({bower: false});
  }
};
