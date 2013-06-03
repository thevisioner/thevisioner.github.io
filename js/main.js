"use strict";

var thevisioner = (function () {
    
    $(document).ready(initialize);
    
    function initialize()
	{
        ///*
        if (!Modernizr.svg) $("#logo").html('<img src="/assets/logo@2x.png" alt="The Visioner" width="216" height="168">');
        //*/
        
        /* SVG logo */
        /*
		if (!Modernizr.svg)
		{
			$("#logo > img").attr('src', function()
			{
				return $(this).attr('src').replace('.svg', '.png');
			});
		}
		
		if (window.devicePixelRatio > 2)
		{
			var lowres = $("#logo img").attr("src");
			var highres = lowres.replace(".", "@2x.");
			$("#logo img").attr("src", highres);
		}
		*/
		/* SVG logo (end) */
    }
})();