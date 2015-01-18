(function($) {
    $.fn.autoSrc = function(options) {
        // Default settings
        var defaults = {
            mobileMaxViewport: 640,
            tabletMaxViewport: 1024,
            selector: "[data-src-original]",
            dataMobile: "src-mobile",
            dataTablet: "src-tablet",
            dataDesktop: "src-desktop"
        };

        var settings = $.extend({}, defaults, options);
        var originalSrc = $(settings.selector).data("src-original");

        return this.each(function() {
            var viewportWidth = $(window).width();
            var device = "desktop";

            if (viewportWidth > settings.mobileMaxViewport && viewportWidth <= settings.tabletMaxViewport)
                device = "tablet";

            if (viewportWidth <= settings.mobileMaxViewport)
                device = "mobile";

            $(settings.selector).attr("src", originalSrc);

            if (device == "tablet")
                $(settings.selector).attr("src", $(settings.selector).data(settings.dataTablet));

            if (device == "mobile")
                $(settings.selector).attr("src", $(settings.selector).data(settings.dataMobile));
        });
    };
})(jQuery);