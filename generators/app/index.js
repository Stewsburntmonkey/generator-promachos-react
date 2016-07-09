'use strict';

const generators = require('yeoman-generator');

module.exports = generators.Base.extend({

    writing: {
        app: function () {
            this.fs.copy(
                this.templatePath('**/*'),
                this.destinationPath()
            );

            this.fs.move(
                this.destinationPath('gitignore'),
                this.destinationPath('.gitignore')
            );
        }
    },

    install: function () {
        this.installDependencies({bower: false});
    },

    end: {
        git: function () {
            this.spawnCommandSync('git', ['init']);
            this.spawnCommandSync('git', ['add', '--all']);
            this.spawnCommandSync('git', ['commit', '-m', '"Initial commit from Yeoman generator"']);
        }
    }

});