/**
 * color-change.js v1.1
 *
 * Copyright (c) 2015 Planlodge (http://www.planlodge.com)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */
(function($) {

    'use strict';

    var methods = {
        init: function(options) {
            var defaults = {
                color:              "#556b2f",
                backgroundColor:    "none",
                fontSizing:         14,
                width:              methods.getWidth(),
                'effect':           "fade",
                fadeIn:             2200,
                fadeOut:            200
            };

            // default settings
            var settings = $.extend(defaults, options);

            return this.each(function(){

                // element
                var el = $(this);

                // apply css
                el.css({
                    color:              settings.color,
                    backgroundColor:    settings.backgroundColor,
                    fontSize:           settings.fontSizing,
                    width:              settings.width
                });


                // apply animation
                el.hide().fadeIn(settings.fadeIn);


            });

        },
        getWidth: function() {
            var w = window.innerWidth;
            return w;
        },
        checkeffect: function(effect) {
            if (effect == 'fade') {
                $(this).hide().fadeIn(1900);
                console.log('fading');
            } else {
                console.log('no effect');
                return false;
            }
        }

    }

    // function method
    $.fn.colorChange = function(method) {

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === "object" || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error("Method " + method + " does not exist");
        }
    };


}(jQuery));
