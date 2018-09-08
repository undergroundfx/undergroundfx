$(document).ready(function(){
	
	// change the footer from white to orange
	$('footer').css('background-color', '#FD8D3D');

	// display message box text into p
	$("#submit").on('click', function () {
		var test = $("#message").val();	
		$("#frombox").html(test);
	}); 
	
	// display the amount of characters typed and make red if 50 or more
	$("#message").on('keyup', function () {
		var test = $("#message").val();	
		$("#frombox").html(test.length);
		if (test.length >= 50) {
			$("#frombox").css('color', '#F06C0F');
			$(".warning").css('display', 'block');
		} else if (test.length < 50) {
			$("#frombox").css('color', '#fff');
			$(".warning").css('display', 'none');
		}	
	});

	// shade even/odd rows
	var rows = $('.my-row');

	for(var i=0; i<rows.length; i++) {
		if (i%2===0)
		    $(rows[i]).css("background-color", "orange");
	}
	for(var i=0; i<rows.length; i++) {
		if (i%2!=0)
		    $(rows[i]).css("background-color", "#fff");
	}

	// dynamic logos
	var logos = [ 
		{ title: "3 Point Technology", pic: "img/logo1.jpg"}, 
		{ title: "AutoMedics", pic: "img/logo2.jpg"}, 
		{ title: "Infinity Air Inc.", pic: "img/logo3.jpg"} 
	];
	for(var i=0; i<logos.length; ++i) {
	      $('#'+i).css("background-image", "url("+logos[i].pic+")");
	}	
	$('.image').mouseenter( function() { 
		//console.log(logos[this].title);
		$(this).html("<p class='logo-text'>" + logos[this.id].title + "</p>");
	});
	$('.image').mouseleave( function() { 
		$(this).html('');
	});


	// tooltips
    $(function () {
    	$('#skill1, #skill2, #skill3, #skill4, #skill5, #skill6, #skill7').tooltip();
 	});

    $(function () {
	    $('[data-toggle="tooltip1"]').tooltip();
  	});

    // smooth scrolling
    var $root = $('html, body');
    $('.nav-tabs a').click(function() {
	    var href = $.attr(this, 'href');
	    $root.animate({
	        scrollTop: $(href).offset().top
	    }, 700, function () {
        window.location.hash = href;
	    });
	    return false;
    });

    // facebook
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "http://connect.facebook.net/en_US/sdk.js#xfbml=1&appId=158182810881631&version=v2.0";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    // google map
    function initialize() {
    	var mapOptions = {
    		center: { lat: 47.4967646, lng: -122.3100551},  
    		zoom: 8
	    };
      var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
      var marker = new google.maps.Marker({position:map.getCenter(),map:map,title:"Click to zoom"});
      google.maps.event.addListener(marker, 'click', function() {
      map.setZoom(15);
      map.setCenter(marker.getPosition());
	});
    }

    initialize();  

});



       

	
