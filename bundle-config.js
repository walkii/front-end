﻿//https://www.npmjs.com/package/gulp-bundle-assets
var lazypipe = require('lazypipe');
var babel = require('gulp-babel');

module.exports = {
    bundle: {
        scriptsBundleMain: {
            scripts: [
                './Content/js/custom/demo.js'
            ],
            options: {
                rev: false, // {(boolean|string|Array)}
                transforms: {
                    scripts: lazypipe().pipe(babel, {
                        presets: ['env']
                    })
                }
            }
        },
        scriptsBundleSecondary: {
            scripts: [
                './Content/js/vendors/jquery-3.2.1.min.js',
                './Content/js/vendors/bootstrap.js',
               // './Content/js/vendors/owl.carousel.js',
            ],
            options: {
                rev: false // {(boolean|string|Array)}
            }
        },
    },
};
