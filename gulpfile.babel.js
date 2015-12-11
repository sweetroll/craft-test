"use strict";

import gulp from 'gulp';
import {argv} from 'yargs';
import requireDir from 'require-dir';
import config from './gulpfile.config';

// Save production flag value to variable if `gulp build --production` is run.
const isProduction = argv.production === true;

// Include gulp-task directory and pass production flag to each task if required.
let dir = requireDir('./gulp-tasks');
for (let file in dir) {
    dir[file](isProduction);
};

// Running `gulp` with trigger the watch task
gulp.task('default', ['watch']);

// TODO
// - Generic copy task for icons/fonts ()
// - Fix tasks/config to allow multiple main files (print.scss / anotherJsBundle.js)
// - Given this file is quite small now should we just moved the config here to
//   number of files. Or create a defaults file which can be extended so each
//   project does not have to specify every variable (Pho Devstack kind of setup).
//   Means we could include the gulp workflow as a module.

// BUGS
// - `gulp build --production` does not add revved izr.js to manifest and update
//   link in templates. `gulp izr --production` works perfectly in isolation...