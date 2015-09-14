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
                color:              "#556b2f",          // color code for text coloring
                backgroundColor:    "none",             // background color for text
                fontSizing:         24,                 // default font size
                width:              methods.getWidth(), // get width of browser
                'effect':           "fade",             // type of effect
                fadeIn:             2200,               // transition intro speed
                fadeOut:            200                 // transition exit speed
            };

            

            // default settings
            options = $.extend(defaults, options);

            return this.each(function(){

                var el = $(this);


                 el.css({
                    color:              options.color,
                    backgroundColor:    options.backgroundColor,
                    fontSize:           options.fontSizing,
                    width:              options.width
                 });

                 el.hide().fadeIn(options.fadeIn);
            });

        },
        getWidth: function() {
            var w = window.innerWidth;
            return w;
        },
        checkeffect: function(effect) {
            if (effect == 'fade') {
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
