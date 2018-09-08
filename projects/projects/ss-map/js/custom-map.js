window.document.onload = closetimer();

// close the new user box
function closetimer() {
	setTimeout(closebox, 8000);
}

// close the new user info box
function closebox() {
	document.getElementById("box").style.display = 'none';
}

// dropdown for markers
function getValue() {
	
	var value = document.getElementById('quickfind').value;
	
	switch (value) {
    case 'tennis':
		map.setZoom(18);
		map.panTo(marker4.getPosition());
		infowindow4.open(map, marker4);
		var value = '#';
        break;
    case 'pio':
		map.setZoom(18);
		map.panTo(markerPio.getPosition());
		infowindowPio.open(map, markerPio);
		var value = '#';
        break;
    case 'south':
		map.setZoom(18);
		map.panTo(marker3.getPosition());
		infowindow3.open(map, marker3);
		var value = '#';
        break;
	case 'advisors':
		map.setZoom(18);
		map.panTo(markerAdvisors.getPosition());
		infowindowAdvisors.open(map, markerAdvisors);
		var value = '#';
        break;
	case 'faculty':
		map.setZoom(18);
		map.panTo(markerFaculty.getPosition());
		infowindowFaculty.open(map, markerFaculty);
		var value = '#';
        break;		
	case 'library':
		map.setZoom(18);
		map.panTo(markerLibrary.getPosition());
		infowindowLibrary.open(map, markerLibrary);
		var value = '#';
        break;	
	case 'preschool':
		map.setZoom(18);
		map.panTo(markerPreschool.getPosition());
		infowindowPreschool.open(map, markerPreschool);
		var value = '#';
        break;		
	case 'olympic':
		map.setZoom(18);
		map.panTo(markerOlympic.getPosition());
		infowindowOlympic.open(map, markerOlympic);
		var value = '#';
        break;		
	case 'brockey':
		map.setZoom(18);
		map.panTo(markerBrockey.getPosition());
		infowindowBrockey.open(map, markerBrockey);
		var value = '#';
        break;				
	case 'culinary':
		map.setZoom(18);
		map.panTo(markerCulinary.getPosition());
		infowindowCulinary.open(map, markerCulinary);
		var value = '#';
        break;			
	case 'rainier':
		map.setZoom(18);
		map.panTo(markerRainier.getPosition());
		infowindowRainier.open(map, markerRainier);
		var value = '#';
        break;									
	case 'pastry':
		map.setZoom(18);
		map.panTo(markerPastry.getPosition());
		infowindowPastry.open(map, markerPastry);
		var value = '#';
        break;	
	case 'avt':
		map.setZoom(18);
		map.panTo(markerAvt.getPosition());
		infowindowAvt.open(map, markerAvt);
		var value = '#';
        break;	
	case 'uni':
		map.setZoom(18);
		map.panTo(markerAvt.getPosition());
		infowindowUni.open(map, markerUni);
		var value = '#';
        break;																
	case 'weld':
		map.setZoom(18);
		map.panTo(markerWeld.getPosition());
		infowindowWeld.open(map, markerWeld);
		var value = '#';
        break;			
	case 'cas':
		map.setZoom(18);
		map.panTo(markerCas.getPosition());
		infowindowCas.open(map, markerCas);
		var value = '#';
        break;		
	case 'auto':
		map.setZoom(18);
		map.panTo(markerAuto.getPosition());
		infowindowAuto.open(map, markerAuto);
		var value = '#';
        break;		
	case 'amt':
		map.setZoom(18);
		map.panTo(markerAmt.getPosition());
		infowindowAmt.open(map, markerAmt);
		var value = '#';
        break;		
	case 'tec':
		map.setZoom(18);
		map.panTo(markerTec.getPosition());
		infowindowTec.open(map, markerTec);
		var value = '#';
        break;								
	case 'abr':
		map.setZoom(18);
		map.panTo(markerTec.getPosition());
		infowindowAbr.open(map, markerAbr);
		var value = '#';
        break;		
	case 'hdd':
		map.setZoom(18);
		map.panTo(markerHdd.getPosition());
		infowindowHdd.open(map, markerHdd);
		var value = '#';
        break;	
	case 'wine':
		map.setZoom(18);
		map.panTo(markerWine.getPosition());
		infowindowWine.open(map, markerWine);
		var value = '#';
        break;	
	case 'north':
		map.setZoom(18);
		map.panTo(markerNorth.getPosition());
		infowindowNorth.open(map, markerNorth);
		var value = '#';
        break;														
}
	setTimeout(timer, 2500);
	function timer() {
		document.getElementById('quickfind').selectedIndex=0;
	}
}

// initialize map and use event listener to load and run initialize() on window load event
document.addEventListener('DOMContentLoaded', drawMap);

function drawMap() {
	mapOptions = {
		center: { lat: 47.547632, lng: -122.351920},
		zoom: 18,
        streetViewControl: false,
		heading: 90,

		// can use either way to set map type, one way drills down and the other uses a constant definition in the namespace
		//mapTypeId: google.maps.MapTypeId.HYBRID,
		mapTypeId: 'satellite',
		draggable: true
	};

	// using the APIs methods, set map object, use object mapOptions		
	map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	
// map markers 
// no var so they are global
	markerPio = new google.maps.Marker({
		position: {lat: 47.54775, lng: -122.35254},
		map: map,
		title: 'PIO & Student Services',
		animation: google.maps.Animation.DROP
	});

    marker3 = new google.maps.Marker({
        position: {lat:47.546098, lng: -122.352352},
        map: map,
        title: 'South Parking Lot',
        animation: google.maps.Animation.DROP
    });
    marker4 = new google.maps.Marker({
        position: {lat:47.546420, lng: -122.351145},
        map: map,
        title: 'Tennis & Basketball Courts',
        animation: google.maps.Animation.DROP
    });
	markerAdvisors = new google.maps.Marker({
        position: {lat:47.547813, lng: -122.353122},
        map: map,
        title: 'Advisors',
        animation: google.maps.Animation.DROP
    });
	markerFaculty = new google.maps.Marker({
        position: {lat:47.547862, lng: -122.352679},
        map: map,
        title: 'Faculty Offices',
        animation: google.maps.Animation.DROP
    });	
	markerLibrary = new google.maps.Marker({
        position: {lat:47.547491, lng: -122.352954},
        map: map,
        title: 'Library',
        animation: google.maps.Animation.DROP
    });	
	markerPreschool = new google.maps.Marker({
        position: {lat:47.545963, lng: -122.353606},
        map: map,
        title: 'Preschool & Child Care',
        animation: google.maps.Animation.DROP
    });		
	markerOlympic = new google.maps.Marker({
        position: {lat:47.546428, lng: -122.352364},
        map: map,
        title: 'Olympic Hall',
        animation: google.maps.Animation.DROP
    });	
	markerBrockey = new google.maps.Marker({
        position: {lat:47.547097, lng: -122.351826},
        map: map,
        title: 'Brockey Conference Center',
        animation: google.maps.Animation.DROP
    });		
	markerCulinary = new google.maps.Marker({
        position: {lat:47.548013, lng: -122.351569},
        map: map,
        title: 'Culinary Arts',
        animation: google.maps.Animation.DROP
    });	
	markerRainier = new google.maps.Marker({
        position: {lat:47.548035, lng: -122.350684},
        map: map,
        title: 'Ranier Hall',
        animation: google.maps.Animation.DROP
    });				
	markerPastry = new google.maps.Marker({
        position: {lat:47.547593, lng: -122.351306},
        map: map,
        title: 'Pastry Lab',
        animation: google.maps.Animation.DROP
    });		
	markerAvt = new google.maps.Marker({
        position: {lat:47.548666, lng: -122.350444},
        map: map,
        title: 'AVT - Classrooms/Composite Lab',
        animation: google.maps.Animation.DROP
    });		
	markerUni = new google.maps.Marker({
        position: {lat:47.548564, lng: -122.350915},
        map: map,
        title: 'UNI - University Center',
        animation: google.maps.Animation.DROP
    });		
	markerWeld = new google.maps.Marker({
        position: {lat:47.548796, lng: -122.351628},
        map: map,
        title: 'Welding/Center for International Education',
        animation: google.maps.Animation.DROP
    });			
	markerCas = new google.maps.Marker({
        position: {lat:47.548510, lng: -122.351757},
        map: map,
        title: 'CAS - Cascade Court',
        animation: google.maps.Animation.DROP
    });		
	markerAuto = new google.maps.Marker({
        position: {lat:47.548691, lng: -122.352902},
        map: map,
        title: 'AUT - Automotive Technology',
        animation: google.maps.Animation.DROP
    });	
	markerAmt = new google.maps.Marker({
        position: {lat:47.549212, lng: -122.350702},
        map: map,
        title: 'AMT - Aviation Maintenance',
        animation: google.maps.Animation.DROP
    });		
	markerTec = new google.maps.Marker({
        position: {lat:47.549499, lng: -122.351779},
        map: map,
        title: 'TEC - Technology Center',
        animation: google.maps.Animation.DROP
    });		
	markerAbr = new google.maps.Marker({
        position: {lat:47.549078, lng: -122.352182},
        map: map,
        title: 'ABR - Autmotive Collision Repair',
        animation: google.maps.Animation.DROP
    });		
	markerHdd = new google.maps.Marker({
        position: {lat:47.549437, lng: -122.352902},
        map: map,
        title: 'HDM - Heavy Duty Diesel',
        animation: google.maps.Animation.DROP
    });					
 	markerWine = new google.maps.Marker({
        position: {lat:47.549937, lng: -122.350899},
        map: map,
        title: 'NWWA - Northwest Wine Academy',
        animation: google.maps.Animation.DROP
    });	  
 	markerNorth = new google.maps.Marker({
        position: {lat:47.550226, lng: -122.352561},
        map: map,
        title: 'North Parking Lot',
        animation: google.maps.Animation.DROP
    });	  	    				
///////////////// Popup Information
	popupInfoPio = "<div style='width:200px; height:80px;'><b>RSB - Communications Office</b><br>";
	popupInfoPio += "<br><a href='https://maps.google.com?saddr=Current+Location&daddr=47.5478588,-122.352595' class='poplinks'>Get Directions</a>		<br>";
	popupInfoPio += "<br><a href='http://www.southseattle.edu/pio/' class='poplinks' target='_blank'>More Information</a></div><br>";

	popupInfo3 = "<div style='width:200px; height:70px;'><b>South Parking Lot</b><br>";
	popupInfo3 += "<br><a class='poplinks' href='http://www.southseattle.edu/services/parking.aspx'>Buy Parking Pass</a></div>";

	popupInfo4 = "<div style='width:200px; height:70px;'><b>Tennis & Basketball Courts</b><br>";
	popupInfo4 += "<br><a href='https://maps.google.com?saddr=Current+Location&daddr=47.546420,-122.351145' class='poplinks'>Get Directions</a>		<br>";
	popupInfo4 += "<br><a href='http://www.southseattle.edu/student-life/campus-recreation/' class='poplinks'>More Information</a></div><br>";

	popupInfoAdvisors = "<div style='width:200px; height:70px;'><b>RSB - Advising/Running Start</b><br>";
	popupInfoAdvisors += "<br><a href='https://maps.google.com?saddr=Current+Location&daddr=47.547813,-122.353122' class='poplinks'>Get Directions</a>		<br>";
	popupInfoAdvisors += "<br><a href='http://www.southseattle.edu/advising/' class='poplinks' target='_blank'>More Information</a></div><br>";	
	
	popupInfoFaculty = "<div style='width:200px; height:70px;'><b>RSB - Faculty Offices</b><br>";
	popupInfoFaculty += "<br><a href='https://maps.google.com?saddr=Current+Location&daddr=47.547862,-122.352679' class='poplinks'>Get Directions</a>		<br>";
	popupInfoFaculty += "<br><a href='http://www.seattlecolleges.edu/DISTRICT/employeedirectory/directorysearch.aspx' class='poplinks'>More Information</a></div><br>";	
	
	popupInfoLibrary = "<div style='width:200px; height:70px;'><b>LIB - Library</b><br>";
	popupInfoLibrary += "<br><a href='https://maps.google.com?saddr=Current+Location&daddr=47.547491,-122.352954' class='poplinks'>Get Directions</a>		<br>";
	popupInfoLibrary += "<br><a href='http://libguides.southseattle.edu/home' class='poplinks' target='_blank'>More Information</a></div><br>";	
	
	popupInfoPreschool = "<div style='width:200px; height:70px;'><b>CCC - Preschool & Child Care Center</b><br>";
	popupInfoPreschool += "<br><a href='https://maps.google.com?saddr=Current+Location&daddr=47.547097,-122.351826' class='poplinks'>Get Directions</a>		<br>";
	popupInfoPreschool += "<br><a href='http://www.southseattle.edu/student-life/child-care/' class='poplinks'>More Information</a></div><br><br>";	
	
	popupInfoOlympic = "<div style='width:200px; height:70px;'><b>Olympic Hall</b><br>";
	popupInfoOlympic += "<br><a href='https://maps.google.com?saddr=Current+Location&daddr=47.546428,-122.352364' class='poplinks'>Get Directions</a></div>";	
	
	popupInfoBrockey = "<div style='width:200px; height:70px;'><b>Brockey Conference Center</b><br>";
	popupInfoBrockey += "<br><a href='https://maps.google.com?saddr=Current+Location&daddr=47.547097,-122.351826 ' class='poplinks'>Get Directions</a>		<br>";
	popupInfoBrockey += "<br><a href='http://brockeycenter.southseattle.edu/' class='poplinks' target='_blank'>More Information</a></div><br>";	

	popupInfoCulinary = "<div style='width:200px; height:70px;'><b>CAB - Culinary Arts</b><br>";
	popupInfoCulinary += "<br><a href='https://maps.google.com?saddr=Current+Location&daddr=-47.548013,-122.351569' class='poplinks'>Get Directions</a>		<br>";
	popupInfoCulinary += "<br><a href='http://www.southseattle.edu/programs/proftech/culinary/' class='poplinks' target='_blank'>More Information</a><br></div>";	
	
	popupInfoRainier = "<div style='width:200px; height:70px;'><b>RAH - Rainier Hall</b><br>";
	popupInfoRainier += "<br><a href='https://maps.google.com?saddr=Current+Location&daddr=47.548035,-122.350684' class='poplinks'>Get Directions</a>		<br>";
	
	popupInfoPastry = "<div style='width:200px; height:70px;'><b>PBA - Pastry Lab</b><br>";
	popupInfoPastry += "<br><a href='https://maps.google.com?saddr=Current+Location&daddr=47.547593,-122.351306' class='poplinks'>Get Directions</a>		<br>";
	popupInfoPastry += "<br><a href='http://www.southseattle.edu/bernies/pastry-special-orders.aspx' class='poplinks' target='_blank'>More Information</a></div><br>";	
	
	popupInfoAvt = "<div style='width:200px; height:70px;'><b>AVT - Classrooms/Composite Lab</b><br>";
	popupInfoAvt += "<br><a href='https://maps.google.com?saddr=Current+Location&daddr=47.548666, -122.350444' class='poplinks'>Get Directions</a>		<br>";
	popupInfoAvt += "<br><a href='http://www.southseattle.edu/programs/proftech/aeronautical-technology/aerospace-composite-technology/Default.aspx' class='poplinks'>More Information</a></div><br>";			
		
	popupInfoUni = "<div style='width:200px; height:70px;'><b>UNI - University Center</b><br>";
	popupInfoUni += "<br><a href='https://maps.google.com?saddr=Current+Location&daddr=47.548564, -122.350915' class='poplinks'>Get Directions</a>		<br>";
	
	popupInfoWeld = "<div style='width:200px; height:70px;'><b>WWB - Welding/CIE</b><br>";
	popupInfoWeld += "<br><a href='https://maps.google.com?saddr=Current+Location&daddr=47.548796, -122.351628' class='poplinks'>Get Directions</a>		<br>";
	popupInfoWeld += "<br><a href='http://www.southseattle.edu/programs/proftech/welding/' class='poplinks' target='_blank'>More Information</a></div><br>";	
	
	popupInfoCas = "<div style='width:200px; height:70px;'><b>CAS - Cascade Court</b><br>";
	popupInfoCas += "<br><a href='https://maps.google.com?saddr=Current+Location&daddr=47.548510, -122.351757' class='poplinks'>Get Directions</a>";

	popupInfoAuto = "<div style='width:200px; height:70px;'><b>AUT - Automotive Technology</b><br>";
	popupInfoAuto += "<br><a href='https://maps.google.com?saddr=Current+Location&daddr=47.548691, -122.352902' class='poplinks'>Get Directions</a>		<br>";
	popupInfoAuto += "<br><a href='http://www.southseattle.edu/bernies/pastry-special-orders.aspx' class='poplinks' target='_blank'>More Information</a></div><br>";	
	
	popupInfoAmt = "<div style='width:200px; height:70px;'><b>AMT - Aviation Maintenance</b><br>";
	popupInfoAmt += "<br><a href='https://maps.google.com?saddr=Current+Location&daddr=47.549212, -122.350702' class='poplinks'>Get Directions</a>		<br>";
	popupInfoAmt += "<br><a href='http://www.southseattle.edu/programs/proftech/aeronautical-technology/aviation-maintenance-technology/' class='poplinks' target='_blank'>More Information</a></div><br>";							

	popupInfoTec = "<div style='width:200px; height:70px;'><b>TEC - Technology Center</b><br>";
	popupInfoTec += "<br><a href='https://maps.google.com?saddr=Current+Location&daddr=47.549499, -122.351779' class='poplinks'>Get Directions</a></div>";
	
	popupInfoAbr = "<div style='width:200px; height:70px;'><b>ABR - Auto Body Collision Repair</b><br>";
	popupInfoAbr += "<br><a href='https://maps.google.com?saddr=Current+Location&daddr=47.549078, -122.352182' class='poplinks'>Get Directions</a>		<br>";
	popupInfoAbr += "<br><a href='http://www.southseattle.edu/programs/proftech/automotive/auto-body-collision-repair/careers.aspx' class='poplinks' target='_blank'>More Information</a></div><br>";			
	
	popupInfoHdd = "<div style='width:200px; height:70px;'><b>HDM - Heavy Duty Diesel</b><br>";
	popupInfoHdd += "<br><a href='https://maps.google.com?saddr=Current+Location&daddr=47.549437, -122.352902' class='poplinks'>Get Directions</a>		<br>";
	popupInfoHdd += "<br><a href='http://www.southseattle.edu/programs/proftech/diesel/careers.aspx' class='poplinks' target='_blank'>More Information</a></div><br>";		
	
	popupInfoWine = "<div style='width:200px; height:70px;'><b>NWWA - Northwest Wine Academy</b><br>";
	popupInfoWine += "<br><a href='https://maps.google.com?saddr=Current+Location&daddr=47.549437, -122.352902' class='poplinks'>Get Directions</a>		<br>";
	popupInfoWine += "<br><a href='http://nwwineacademy.com/' class='poplinks' target='_blank'>More Information</a></div><br><br>";		
	
	popupInfoNorth = "<div style='width:200px; height:70px;'><b>North Parking Lot</b><br>";
	popupInfoNorth += "<br><a href='https://maps.google.com?saddr=Current+Location&daddr=47.550226, -122.352561' class='poplinks'>Get Directions</a></div><br>";	
	
	
//////////////// Info Windows		
	infowindowPio = new google.maps.InfoWindow({
		content: popupInfoPio
	});
	infowindow2 = new google.maps.InfoWindow({
		content: popupInfoPio
	});
	infowindow3 = new google.maps.InfoWindow({
		content: popupInfo3
	});
	infowindow4 = new google.maps.InfoWindow({
		content: popupInfo4
	});
	infowindowAdvisors = new google.maps.InfoWindow({
		content: popupInfoAdvisors
	});
	infowindowFaculty = new google.maps.InfoWindow({
		content: popupInfoFaculty
	});	
	infowindowLibrary = new google.maps.InfoWindow({
		content: popupInfoLibrary
	});		
	infowindowPreschool = new google.maps.InfoWindow({
		content: popupInfoPreschool
	});		
	infowindowOlympic = new google.maps.InfoWindow({
		content: popupInfoOlympic
	});		
	infowindowBrockey = new google.maps.InfoWindow({
		content: popupInfoBrockey
	});	
	infowindowCulinary = new google.maps.InfoWindow({
		content: popupInfoCulinary
	});		
	infowindowRainier = new google.maps.InfoWindow({
		content: popupInfoRainier
	});	
	infowindowPastry = new google.maps.InfoWindow({
		content: popupInfoPastry
	});	
	infowindowAvt = new google.maps.InfoWindow({
		content: popupInfoAvt
	});	
	infowindowUni = new google.maps.InfoWindow({
		content: popupInfoUni
	});		
	infowindowWeld = new google.maps.InfoWindow({
		content: popupInfoWeld
	});	
	infowindowCas = new google.maps.InfoWindow({
		content: popupInfoCas
	});		
	infowindowAuto = new google.maps.InfoWindow({
		content: popupInfoAuto
	});			
	infowindowAmt = new google.maps.InfoWindow({
		content: popupInfoAmt
	});	
	infowindowTec = new google.maps.InfoWindow({
		content: popupInfoTec
	});	
	infowindowAbr = new google.maps.InfoWindow({
		content: popupInfoAbr
	});			
	infowindowHdd = new google.maps.InfoWindow({
		content: popupInfoHdd
	});	
	infowindowWine = new google.maps.InfoWindow({
		content: popupInfoWine
	});	
	infowindowNorth = new google.maps.InfoWindow({
		content: popupInfoNorth
	});																										
//////////////// Event Listeners to open info windows
	document.getElementById('text1').addEventListener('click', function() {
		document.getElementById('text1').value = "Finding you...";
		setTimeout(looking, 4000);
		function looking() { document.getElementById('text1').value = 'Show My Location'; }
		});
	document.getElementById('box').addEventListener('click', function() {
		document.getElementById('box').style.display = 'none';
	});
	google.maps.event.addListener(markerPio, 'click', function() {
        map.panTo(markerPio.getPosition());
	    map.setZoom(18);
		infowindowPio.open(map, markerPio);			
	});
	google.maps.event.addListener(marker3, 'click', function() {
		map.panTo(marker3.getPosition());
        map.setZoom(18);
        infowindow3.open(map, marker3);
	});
	google.maps.event.addListener(marker4, 'click', function() {
		map.panTo(marker4.getPosition());
        map.setZoom(18);
        infowindow4.open(map, marker4);
	});

	google.maps.event.addListener(markerAdvisors, 'click', function() {
		map.panTo(markerAdvisors.getPosition());
        map.setZoom(18);
        infowindowAdvisors.open(map, markerAdvisors);
	});		
	google.maps.event.addListener(markerFaculty, 'click', function() {
		map.panTo(markerFaculty.getPosition());
        map.setZoom(18);
        infowindowFaculty.open(map, markerFaculty);
	});		
	google.maps.event.addListener(markerLibrary, 'click', function() {
		map.panTo(markerLibrary.getPosition());
        map.setZoom(18);
        infowindowLibrary.open(map, markerLibrary);
	});	
	google.maps.event.addListener(markerPreschool, 'click', function() {
		map.panTo(markerPreschool.getPosition());
        map.setZoom(18);
        infowindowPreschool.open(map, markerPreschool);
	});		
	google.maps.event.addListener(markerBrockey, 'click', function() {
		map.panTo(markerBrockey.getPosition());
        map.setZoom(18);
        infowindowBrockey.open(map, markerBrockey);
	});		
	google.maps.event.addListener(markerCulinary, 'click', function() {
		map.panTo(markerCulinary.getPosition());
        map.setZoom(18);
        infowindowCulinary.open(map, markerCulinary);
	});			
	google.maps.event.addListener(markerRainier, 'click', function() {
		map.panTo(markerRainier.getPosition());
        map.setZoom(18);
        infowindowRainier.open(map, markerRainier);
	});		
	google.maps.event.addListener(markerAvt, 'click', function() {
		map.panTo(markerAvt.getPosition());
        map.setZoom(18);
        infowindowAvt.open(map, markerAvt);
	});	
	google.maps.event.addListener(markerUni, 'click', function() {
		map.panTo(markerUni.getPosition());
        map.setZoom(18);
        infowindowUni.open(map, markerUni);
	});		
	google.maps.event.addListener(markerWeld, 'click', function() {
		map.panTo(markerWeld.getPosition());
        map.setZoom(18);
        infowindowWeld.open(map, markerWeld);
	});	
	google.maps.event.addListener(markerCas, 'click', function() {
		map.panTo(markerCas.getPosition());
        map.setZoom(18);
        infowindowCas.open(map, markerCas);
	});	
	google.maps.event.addListener(markerAuto, 'click', function() {
		map.panTo(markerAuto.getPosition());
        map.setZoom(18);
        infowindowAuto.open(map, markerAuto);
	});												
	google.maps.event.addListener(markerAmt, 'click', function() {
		map.panTo(markerAmt.getPosition());
        map.setZoom(18);
        infowindowAmt.open(map, markerAmt);
	});		
	google.maps.event.addListener(markerTec, 'click', function() {
		map.panTo(markerTec.getPosition());
        map.setZoom(18);
        infowindowTec.open(map, markerTec);
	});		
	google.maps.event.addListener(markerAbr, 'click', function() {
		map.panTo(markerAbr.getPosition());
        map.setZoom(18);
        infowindowAbr.open(map, markerAbr);
	});			
	google.maps.event.addListener(markerHdd, 'click', function() {
		map.panTo(markerHdd.getPosition());
        map.setZoom(18);
        infowindowHdd.open(map, markerHdd);
	});		
	google.maps.event.addListener(markerWine, 'click', function() {
		map.panTo(markerWine.getPosition());
        map.setZoom(18);
        infowindowWine.open(map, markerWine);
	});		
	google.maps.event.addListener(markerNorth, 'click', function() {
		map.panTo(markerNorth.getPosition());
        map.setZoom(18);
        infowindowNorth.open(map, markerNorth);
	});											
	google.maps.event.addListener(markerPastry, 'click', function() {
		map.panTo(markerPastry.getPosition());
        map.setZoom(18);
        infowindowPastry.open(map, markerPastry);
	});		
// get current position
	document.getElementById("text1").addEventListener("click", function() {
		//infowindow.open(map, marker)
		if(navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
				var youwindow = new google.maps.InfoWindow({
					map: map,
					position: pos,
					content: "<div style='width:200px; height:44px'><b>YOU ARE HERE<br><span style='font-size:10px; color:red';><i>(May be off if you\'re not using a phone)</i></b></span></div>"
				});
				map.setCenter(pos);
			}, function() {
				handleNoGeolocation(true);
			});
		} else {
		// Browser doesn't support Geolocation
			handleNoGeolocation(false);
		}
		function handleNoGeolocation(errorFlag) {
			alert("Enable geolocation to view location");
		}
	});
}