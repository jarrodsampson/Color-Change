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

    var color;

    var methods = {

        init: function(options) {

            var defaults = {
                backgroundColor:    "none",             // background color for text
                fontSizing:         24,                 // default font size
                width:              methods.getWidth(), // get width of browser
                'effect':           "fade",             // type of effect
                fadeIn:             2200,               // transition intro speed
                fadeOut:            200,               // transition exit speed
                firefox:            "#565656",          // firefox
                chrome:             "#ff0000",          // chrome 
                safari:             "#565656",          // safari
                ie:                 "#992882",          // ie
                opera:              "#565656"           // opera
            };

            // default settings
            options = $.extend(defaults, options);

            methods.determineBrowser(defaults['firefox'], defaults['chrome'], defaults['safari'], defaults['ie'], defaults['opera']);

            return this.each(function(){


                var el = $(this);

                 el.css({
                    color:              color,
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
        determineBrowser: function(firefoxColor, chromeColor, safariColor, ieColor, operaColor) {

                var isOpera = !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
                    // Opera 8.0+ (UA detection to detect Blink/v8-powered Opera)
                var isFirefox = typeof InstallTrigger !== 'undefined';   // Firefox 1.0+
                var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
                    // At least Safari 3+: "[object HTMLElementConstructor]"
                var isChrome = !!window.chrome && !isOpera;              // Chrome 1+
                var isIE = /*@cc_on!@*/false || !!document.documentMode; // At least IE6

                if (isOpera == true)
                {
                    console.log("Opera");
                    methods.crossBrowserColors("Opera", operaColor);
                }
                else if (isFirefox == true)
                {
                    console.log("Firefox");
                    methods.crossBrowserColors("Firefox", firefoxColor);
                }
                else if (isSafari == true)
                {
                    console.log("Safari");
                    methods.crossBrowserColors("Safari", safariColor);
                }
                else if (isChrome == true)
                {
                    console.log("Chrome");
                    methods.crossBrowserColors("Chrome", chromeColor);
                }
                else if (isIE == true)
                {
                    console.log("IE");
                    methods.crossBrowserColors("IE", ieColor);
                }
        },
        checkeffect: function(effect) {
            if (effect == 'fade') {
                console.log('fading');
            } else {
                console.log('no effect');
                return false;
            }
        },
        crossBrowserColors: function(browser, colorBrowser) {
            var el = $(this);

            color = colorBrowser;
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
