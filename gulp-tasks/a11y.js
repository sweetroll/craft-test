'use strict';

import gulp from 'gulp';
import path from 'path';
import a11y from 'gulp-a11y';
import config from '../gulpfile.config';

module.exports = function() {
    gulp.task('a11y', ['templates'], function () {
        return gulp.src(path.join(config.templates.dist, '**/*.html'))
            .pipe(a11y())
            .pipe(a11y.reporter());
    });
};
