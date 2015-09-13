/**
* link-change.js v1.1
*
* Copyright (c) 2015 Jarrod Sampson (gthmb)
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

(function ( $ ) {
	
	'use strict';
	
	var methods = {
		
		getWidth: function()
		{
			var w = window.innerWidth;
			return w; 
		},
		checkeffect: function(effect)
		{
			if (effect == 'fade')
			{
				$(this).hide().fadeIn(1900);
				console.log('fading');
			}
			else
			{
				console.log('no effect');
				return false;
			}
		}
		
	}
	 
	var methodsCallBack = {
		
			cssApplications: function(settings)
			{
				$(this).css({
					color: 				settings.color,
					backgroundColor: 	settings.backgroundColor,
					fontSize: 			settings.fontSizing,
					width: 				settings.width
				});
			},
			effects: function()
			{
				$(this).hide().fadeIn(1900);
			}
		
	}

	$.fn.container = function( options ) {

		
		// default settings
		var settings = $.extend({
					
					color: 				"#556b2f",
					backgroundColor: 	"none",
					fontSizing: 		14,
					width: 				methods.getWidth(),
					'effect':			"fade"
				}, 
			options );
			
			$(this).css({
					color: 				settings.color,
					backgroundColor: 	settings.backgroundColor,
					fontSize: 			settings.fontSizing,
					width: 				settings.width
			});
			

			$(this).hide().fadeIn(1900);

		return this;
		
	};


}( jQuery ));