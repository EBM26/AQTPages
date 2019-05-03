$(document).ready(function() {

	// main video overlay play
	$("#video1").click(function(){
		$("#overlay").fadeIn();
		$("#overlay-content").html('<script src="https://fast.wistia.com/embed/medias/3g2kcbyz9c.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_3g2kcbyz9c videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/3g2kcbyz9c/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>')
	});

	$("#video2").click(function(){
		$("#overlay").fadeIn();
		$("#overlay-content").html('<script src="https://fast.wistia.com/embed/medias/5wkjbgkp7z.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_5wkjbgkp7z videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/5wkjbgkp7z/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>')
	});

	$("#video3").click(function(){
		$("#overlay").fadeIn();
		$("#overlay-content").html('<script src="https://fast.wistia.com/embed/medias/m8j1ywwj68.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_m8j1ywwj68 videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/m8j1ywwj68/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>')
	});

	$("#viewCert").click(function(){
		$("#overlay").fadeIn();
		$("#overlay-content").html('<iframe src="https://docs.google.com/gview?url=https://www.aquatruwater.com/images/AQ_BROCHURE_PerfDATA_MAIN_2.19_R3.pdf&embedded=true" frameborder="0" id="frame"></iframe>')
	});

	// close overlay
	$("#close-overlay").click(function(){
		$("#overlay").fadeOut();
	})

	// shipping address close/open
	$("#shippingBox").click(function() {

		function ShipSame() {
			$("#shippingBox").css("background", "#fff");
			$("#shipping-wrapper").slideDown();
		};

		function ShipDiff() {
			$("#shippingBox").css("background", "#2A4494");
			$("#shipping-wrapper").slideUp();
		};

		return (this.tog = !this.tog) ? ShipSame() : ShipDiff();
	});

	/// hamburger rotate code
	function MenuOpen() {	  
		$( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(1)" ).addClass( "mobile-nav-button__line--1");
		$( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(2)" ).addClass( "mobile-nav-button__line--2");  
		$( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(3)" ).addClass( "mobile-nav-button__line--3");
		$('.mobile-menu').slideDown("slow"); 
		return false;
	}

	function MenuClose() {	  
		$( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(1)" ).removeClass( "mobile-nav-button__line--1");
		$( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(2)" ).removeClass( "mobile-nav-button__line--2");  
		$( ".mobile-nav-button .mobile-nav-button__line:nth-of-type(3)" ).removeClass( "mobile-nav-button__line--3");
		$('.mobile-menu').slideUp("slow");
		return false;
	}

	$('.mobile-nav-button').click(function() { 
		return (this.tog = !this.tog) ? MenuOpen() : MenuClose();
	});

	// more recommendations button
	$("#moreButton").click(function() {
		function MoreInfo() {
			$("#hideWrapper").slideDown("slow");
			$("#moreButton").html("LESS RECOMMENDATIONS");
		}

		function LessInfo() {
			$("#hideWrapper").slideUp("slow");
			$("#moreButton").html("MORE RECOMMENDATIONS");
		}

		return (this.tog = !this.tog) ? MoreInfo() : LessInfo();
	});
});




