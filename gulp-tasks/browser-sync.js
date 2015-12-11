'use strict';

import gulp from 'gulp';
import {create as bsCreate} from 'browser-sync';
import config from '../gulpfile.config';
const browserSync = bsCreate('developmentServer');

module.exports = function() {
    gulp.task('browserSync', function() {
        return browserSync.init({
            port: config.browserSync.port
        });
    });
};
