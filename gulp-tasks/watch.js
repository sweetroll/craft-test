'use strict';

import gulp from 'gulp';
import watch from 'gulp-watch';
import batch from 'gulp-batch';
import config from '../gulpfile.config';

module.exports = function() {
    gulp.task('watch', ['build', 'browserSync', 'scripts:watch'], function () {
        // Styles
        watch(config.styles.src, batch(function (events, done) {
            gulp.start('styles', done);
        }));

        // Scripts
        // Watch of scripts is handled within scripts:watch task

        // Images
        watch(config.images.src, batch(function (events, done) {
            gulp.start('images', done);
        }));

        // Template
        watch(config.templates.src, batch(function (events, done) {
            gulp.start('templates:watch', done);
        }));
    });
};
