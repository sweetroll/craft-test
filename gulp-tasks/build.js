'use strict';

import gulp from 'gulp';
import runSequence from 'run-sequence';

module.exports = function() {
    gulp.task('build', ['clean'], function() {
        // Run clean task before all others.
        runSequence([
            'izr',
            'vendor',
            'scripts',
            'styles',
            'images',
            'templates',
            'rev'
        ]);
    });
};
