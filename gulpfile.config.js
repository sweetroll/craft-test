'use strict';
// Config
module.exports = {
    styles: {
        srcFile: './app/styles/app.scss',
        src: './app/styles/**/*.scss',
        dist: './public/styles/',
        autoprefixer: ['last 2 versions', 'ie > 9']
    },
    scripts: {
        srcFile: './app/scripts/app.js',
        src: './app/scripts/**/*.js',
        vendor: './app/scripts/vendor/**/*.js',
        dist: './public/scripts/'
    },
    templates: {
        src: './app/templates/**/*.html',
        dist: './craft/templates/'
    },
    images: {
        src: './app/images/**/*',
        dist: './public/images/'
    },
    browserSync: {
        port: 3000
    },
    substituter: {
        browsersync: function() {
            return '<script type=\'text\/javascript\' id=\"__bs_script__\">\/\/<![CDATA[\r\n    document.write(\"<script async src=\'http:\/\/HOST:3000\/browser-sync\/browser-sync-client.2.10.0.js\'><\\\/script>\".replace(\"HOST\", location.hostname));\r\n\/\/]]><\/script>';
        }
    }
};
