'use strict';

import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import gulpif from 'gulp-if';
import pngquant from 'imagemin-pngquant';
import config from '../gulpfile.config';

module.exports = function(isProduction) {
    gulp.task('images', function () {
        return gulp.src(config.images.src)
            .pipe(gulpif(isProduction,
                imagemin({
                    progressive: true,
                    svgoPlugins: [{removeViewBox: false}],
                    use: [pngquant()]
                })
            ))
            .pipe(gulp.dest(config.images.dist));
    });
};
