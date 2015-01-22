# auto-src.jquery-plugin
Simple jQuery plugin to change automatically the src attribute in img elements depending on the viewport width

Until the new html5 [\<picture\>](http://www.smashingmagazine.com/2014/05/14/responsive-images-done-right-guide-picture-srcset/) element is [more compatible](http://caniuse.com/#feat=picture), this simple-and-silly plugin can make the work for you.

Please look at the demo directory to see how it works, but in summary:

1 - You have to write the mark-up of your images like this. To let plug-in do the auto src change on each image, the `data-src-original` data attribute is mandatory:
```HTML
<img src="mobile.jpg"
     data-src-original="desktop.jpg"
     data-src-desktop="desktop.jpg"
     data-src-tablet="tablet.jpg"
     data-src-mobile="mobile.jpg"
     alt="whatever">
```
2 - Call the plugin once and/or everytime the window is resized:
```JavaScript
<script src="https://code.jquery.com/jquery-1.11.2.min.js"></script>
<script src="../auto-src.jquery-0.1.js"></script>
<script>
    $(function() {
        $(window).autoSrc().resize(function() {
            $(this).autoSrc();
        });
    });
</script>
```
