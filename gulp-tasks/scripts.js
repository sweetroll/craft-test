'use strict';

import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import debowerify from 'debowerify';
import watchify from 'watchify';
import uglify from 'gulp-uglify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import gutil from 'gulp-util';
import gulpif from 'gulp-if';
import size from 'gulp-size';
import rev from 'gulp-rev';
import {get as bsGet} from 'browser-sync';
import config from '../gulpfile.config';
const browserSync = bsGet('developmentServer');

let executeBundle = function (bundle, isProduction) {
    bundle
        .external('zepto-browserify')
        .transform(babelify.configure({
            ignore: /(bower_components)|(node_modules)/,
            presets: ['es2015']
        }))
        .transform(debowerify)
        .bundle()
        .on('error', function(){
            gutil.log();
            this.emit('end');
        })
        .pipe(source('app.js'))
        .pipe(gulpif(isProduction, buffer()))
        .pipe(gulpif(isProduction, uglify()))
        .pipe(gulpif(isProduction, rev()))
        .pipe(gulp.dest(config.scripts.dist))
        .pipe(gulpif(isProduction, rev.manifest({
            merge: true
        })))
        .pipe(gulpif(isProduction, gulp.dest('./')))
        .pipe(size({ title: 'Bundled JS:' }))
        .pipe(gulpif(!isProduction, browserSync.stream()));
        // .on('end', function () {
        //     console.log('reload now');
        //     if(!isProduction) browserSync.reload();
        // });
}

let bundle = browserify({
    debug: true,
    extensions: ['.js'],
    entries: config.scripts.srcFile
});

module.exports = function(isProduction) {

    gulp.task('scripts', function() {
        executeBundle(bundle, isProduction);
    });

    gulp.task('scripts:watch', ['lint'], function() {
        bundle = watchify(bundle);
        bundle.transform(babelify.configure({
            ignore: /(bower_components)|(node_modules)/
        }));
        bundle.on('update', function(){
            executeBundle(bundle);
        });
    });

    gulp.task('vendor', function() {
        return browserify()
            .require('zepto-browserify')
            .bundle()
            .pipe(source('vendor.js'))
            .pipe(buffer())
            .pipe(uglify())
            .pipe(gulp.dest(config.scripts.dist));
    });
};
