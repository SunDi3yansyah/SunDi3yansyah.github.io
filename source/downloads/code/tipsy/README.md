#tipsy
##Masukin tipsy.js ke head:

`<script src="//localhost/tipsy.js"></script>`

##Masukin tipsy.css ke head:

`<link rel="stylesheet" href="//localhost/tipsy.css">`

##Masukin code ini di head (di bawahnya script tipsy.js juga gpp):

`<script>jQuery.noConflict();jQuery(function(){jQuery("a").tipsy({gravity: jQuery.fn.tipsy.autoNS, fade: true});jQuery("img").tipsy({gravity: jQuery.fn.tipsy.autoNS, fade: true});});
</script>`

##Contoh hasil akhir:

	<script src="//localhost/tipsy.js"></script>
	<link rel="stylesheet" href="//localhost/tipsy.css">
	<script>jQuery.noConflict();jQuery(function(){jQuery("a").tipsy({gravity: jQuery.fn.tipsy.autoNS, fade: true});jQuery("img").tipsy({gravity: jQuery.fn.tipsy.autoNS, fade: true});});</script>