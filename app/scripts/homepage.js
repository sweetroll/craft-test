'use strict';

const $ = require('jquery');
const unslider = require('unslider');

$(function() {
    $('.js-slider').unslider({
        autoplay: true,
        arrows: false
    });
});
