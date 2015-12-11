'use strict';

import gulp from 'gulp';
import uglify from 'gulp-uglify';
import concat from 'gulp-concat';
import rev from 'gulp-rev';
import gulpif from 'gulp-if';
import config from '../gulpfile.config';

module.exports = function(isProduction) {
    gulp.task('izr', ['scripts', 'styles'], function(){
        return gulp .src([
                'bower_components/modernizr/modernizr.js',
                'bower_components/detectizr/dist/detectizr.js'
            ])
            .pipe(concat('izr.js'))
            .pipe(gulpif(isProduction, uglify()))
            .pipe(gulpif(isProduction, rev()))
            .pipe(gulp.dest(config.scripts.dist))
            .pipe(gulpif(isProduction, rev.manifest({
                merge: true
            })))
            .pipe(gulpif(isProduction, gulp.dest('./')));
    });
};
