'use strict';

import gulp from 'gulp';
import sassdoc from 'sassdoc';
import config from '../gulpfile.config';

module.exports = function() {
    gulp.task('sassdoc', ['styles'], function () {
        return gulp.src(config.styles.src)
            .pipe(sassdoc({
                dest: './sassdoc',
                verbose: true,
                display: {
                    access: ['public', 'private'],
                    alias: true,
                    watermark: true,
                }
            }));
    });
};
