'use strict';

import gulp from 'gulp';
import substituter from 'gulp-substituter';
import changed from 'gulp-changed';
import gulpif from 'gulp-if';
import revReplace from 'gulp-rev-replace';
import {get as bsGet} from 'browser-sync';
import config from '../gulpfile.config';
const browserSync = bsGet('developmentServer');

module.exports = function(isProduction) {

    gulp.task('templates', ['izr', 'scripts', 'styles'], function () {
        return gulp.src(config.templates.src)
            .pipe(gulpif(!isProduction,
                substituter(config.substituter)
            ))
            .pipe(gulp.dest(config.templates.dist));
    });

    gulp.task('templates:watch', function () {
        return gulp.src(config.templates.src)
            .pipe(changed(config.templates.dist))
            .pipe(substituter(config.substituter))
            .pipe(gulp.dest(config.templates.dist))
            .on('end', function () {
                browserSync.reload();
            });
    });

    gulp.task('rev', ['templates'], function(){
        return gulp.src(config.templates.src)
            .pipe(gulpif(isProduction, revReplace({
                manifest: gulp.src('./rev-manifest.json')
            })))
            .pipe(gulp.dest(config.templates.dist));
    });
};
