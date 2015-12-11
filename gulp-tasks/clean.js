'use strict';

import gulp from 'gulp';
import del from 'del';
import config from '../gulpfile.config';

module.exports = function() {
    gulp.task('clean', function () {
        return del([
            config.templates.dist,
            config.styles.dist,
            config.scripts.dist,
            config.images.dist,
            './rev-manifest.json'
        ]);
    });
};
