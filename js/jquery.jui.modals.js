/*
 * jquery.jui.modals v0.1
 * Creates modal dialog windows for web pages
 * https://github.com/antonradev/jquery.jui.modals
 *
 * Usage:
 *
 *$("#myModal").juimodals(options);
 *
 * https://github.com/antonradev/jquery.jui.modals
 * http://jui.uxpd.net/modals.html
 *
 * Copyright (c) 2014 Anton Radev anton.radev@gmail.com http://www.antonradev.com
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */


(function($) {

    $.fn.juimodals = function(options) {


        var defaults = {
            modalMainClass: ".jui-modal",
            modalTitle: 'Modal Heading',
            modalTextContent: 'This is some kind of content here',
            modalOpened: false,
            modalType: "modal-default",
            modalSize: "normal-size"
        };

        var options = $.extend({}, defaults, options);


        $(this).click(function() {

            if (defaults.modalOpened === false) {
                $("body").append('<div id="jui-modal" class="jui-modal' + 
                        ' ' + options.appearType +
                        ' ' + options.modalSize +
                        ' ' + options.modalType + '"></div>');
                $(options.modalMainClass).append('<span class="modal-close">&times;</span>');
                $(options.modalMainClass).append('<h3>' + options.modalTitle + '</h3>');
                $(options.modalMainClass).append('<div class="jui-modal-content">' + options.modalTextContent + '</div>');
                defaults.modalOpened = true;
            }

        });


        $(document).on("click", '.modal-close', function() {

            defaults.modalOpened = false;

            if ($('.jui-modal').hasClass('basic')) {
                $(".jui-modal").remove();
                $(".jui-modal").addClass('close');
            }
            if ($('.jui-modal').hasClass('slide')) {
                setTimeout(function() {
                    $(".jui-modal").remove();
                }, 500);
                $(".jui-modal").addClass('close');
            }
            else {
                return;
            }

        });



    };


}(jQuery));
