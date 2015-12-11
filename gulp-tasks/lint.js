'use strict';

import gulp from 'gulp';
import jshint from 'gulp-jshint';
import jscs from 'gulp-jscs';
import stylish from 'gulp-jscs-stylish';
import config from '../gulpfile.config';

module.exports = function() {
    gulp.task('lint', function() {
        return gulp.src([
                config.scripts.src,
                '!' + config.scripts.vendor
            ])
            .pipe(jshint())
            .pipe(jscs())
            .pipe(stylish.combineWithHintResults())
            .pipe(jshint.reporter('jshint-stylish'));
    });
};
