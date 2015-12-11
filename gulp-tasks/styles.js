'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import minifyCss from 'gulp-minify-css';
import rename from 'gulp-rename';
import gulpif from 'gulp-if';
import size from 'gulp-size';
import rev from 'gulp-rev';
import {get as bsGet} from 'browser-sync';
import config from '../gulpfile.config';
const browserSync = bsGet('developmentServer');

module.exports = function(isProduction) {
    gulp.task('styles', function () {
        return gulp.src(config.styles.srcFile)
            .pipe(sass({
                outputStyle: 'expanded',
                includePaths: 'bower_components'
            }).on('error', sass.logError))
            .pipe(autoprefixer({
                browsers: config.styles.autoprefixer
            }))
            .pipe(gulpif(isProduction,
                minifyCss({
                    keepSpecialComments: 0
                })
            ))
            .pipe(rename('app.css'))
            .pipe(gulpif(isProduction, rev()))
            .pipe(gulp.dest(config.styles.dist))
            .pipe(gulpif(isProduction, rev.manifest({
                merge: true
            })))
            .pipe(gulpif(isProduction, gulp.dest('./')))
            .pipe(size({ title: 'Bundled CSS:' }))
            .pipe(gulpif(!isProduction, browserSync.stream()));
    });
};
