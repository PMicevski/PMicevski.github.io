/**
*Author: Peter Micevski 1006551602
*Target: enquire.html
*Purpose: Assignment 2 COS100011 CWA JavaScript 
*Created: 14/04/2017
*Last Update:
*Credits:
*/
"use strict";



function stateCode(){
	var stateName = "Unknown";
	var stateArray = document.getElementById("state").getElementsByTagName("option");
	for (var i = 0; i < stateArray.length; i++){
		if (stateArray[i].selected)	
			stateName = stateArray[i].value;
	}
	return stateName;
}

function checkPostCode(post){
	var errMsg = "";
	var code = post.charAt(0);
	var v = 3;
	var vv = 8;
	var n = 1;
	var ns = 2;
	var q = 4;
	var ql = 9;
	var ant = 0;
	var w = 6;
	var s = 5;
	var t = 7;
	var state = stateCode();
	switch (state){
		case "vic":
			if ((code != v) && (code != vv)){ 
				errMsg = "Not a valid postcode for Victoria!!!\n";	
		}
		break;
		case "nsw":
			if ((code != n) && (code != ns)){ 
				errMsg = "Not a valid postcode for NSW!!!\n";	
		}
		break;
		case "qld":
			if ((code != q) && (code != ql)){ 
				errMsg = "Not a valid postcode for QLD!!!\n";	
		}
		break;
		case "nt":
			if (code != ant){ 
				errMsg = "Not a valid postcode for NT!!!\n";	
		}
		break;
		case "wa":
			if (code != w){ 
				errMsg = "Not a valid postcode for WA!!!\n";	
		}
		break;
		case "sa":
			if (code != s){ 
				errMsg = "Not a valid postcode for SA!!!\n";	
		}
		break;
		case "tas":
			if (code != t){ 
				errMsg = "Not a valid postcode for Tasmania!!!\n";	
		}
		break;
		case "act":
			if (code != ant){ 
				errMsg = "Not a valid postcode for ACT!!!\n";	
		}
		break;
		default:
		errMsg = "Please enter postcode.\n";
	}
	return errMsg;
}
function prefill (){
	if (sessionStorage.firstname != undefined){
	
		document.getElementById("custlast").value = sessionStorage.lastname;
		document.getElementById("custfirst").value = sessionStorage.firstname;
		document.getElementById("email").value = sessionStorage.email;
		document.getElementById("street").value = sessionStorage.street;
		document.getElementById("suburb").value = sessionStorage.suburb;
		document.getElementById("state").selected = sessionStorage.state;
		document.getElementById("post").value = sessionStorage.post;
		document.getElementById("phone").value = sessionStorage.phone;
		document.getElementById("issues").value = sessionStorage.issues;
		document.getElementById("trip").checked = sessionStorage.trip;
		document.getElementById("travel").checked = sessionStorage.travel;
		document.getElementById("contact").checked = sessionStorage.contact;
		document.getElementById("service").selected = sessionStorage.service;	
		document.getElementById("concession").value = sessionStorage.concession;	
	
		
		switch(sessionStorage.travel){
			case "stan":
				document.getElementById("standard").checked = true;
				break;
			case "fir":
				document.getElementById("first").checked = true;
				break;
		}
		switch(sessionStorage.contact){
			case "eEmail":
				document.getElementById("eEmail").checked = true;
				break;
			case "pos":
				document.getElementById("pos").checked = true;
				break;
			case "phon":
				document.getElementById("phon").checked = true;
				break;
		}
		switch(sessionStorage.service){
			case "Destination":
				document.getElementById("destination").selected = true;
				break;
			case "Tickets":
				document.getElementById("tickets").selected = true;
				break;
			case "Services":
				document.getElementById("services").selected = true;
				break;
			case "Other":
				document.getElementById("other").selected = true;
			break;
		}
		switch(sessionStorage.issues){
			case "Beverages":
				document.getElementById("bev").checked = true;
				break;
			case "wifi":
				document.getElementById("wifi").checked = true;
				break;
			case "activ":
				document.getElementById("activ").checked = true;
				break;
			case "tick":
				document.getElementById("tick").checked = true;
				break;
			case "des":
				document.getElementById("des").checked = true;
				break;
		}
		switch (sessionStorage.state){
			case "vic":
				document.getElementById("vic").selected = true;
				break
			case "nsw":
				document.getElementById("nsw").selected = true;
				break;
			case "qld":	
				document.getElementById("qld").selected = true;
				break;
			case "nt":				
				document.getElementById("nt").selected = true;
				break;
			case "wa":	
				document.getElementById("wa").selected = true;
				break;
			case "sa":		
				document.getElementById("sa").selected = true;
				break;
			case "tas":	
				document.getElementById("tas").selected = true;
				break;
			case "act":		
				document.getElementById("act").selected = true;
				break;
		}
		switch (sessionStorage.trip){
			case "1Trip":			
				document.getElementById("1Trip").checked = true;
				break;
			case "2Trips":		
				document.getElementById("2Trips").checked = true;
				break;
			case "3Trips":		
				document.getElementById("3Trips").checked = true;
				break;
			case "4Trips":		
				document.getElementById("4Trips").checked = true;
				break;
			case "5Trips":		
				document.getElementById("5Trips").checked = true;
				break;
		}
	}	
}


function tripBook (firstname, lastname, email, street, suburb, vic, nsw, ql, //
    nt, wa, sa, tas, act, post, pos, eEmail, phon, phone, tickets, destination, //
	services, other, bev, wifi, activ, tick, des, trip1, trip2, trip3, trip4, //
	trip5, concession, stan, fir, ad, un){
	
	var travel = "";
	if (stan) travel += "Standard";
	if (fir) travel += "First Class";
	
	var contact = "";
	if (eEmail) contact += "Email";
	if (pos) contact += "Post";
	if (phon) contact += "Phone";
	
	var trip = "";
	if (trip1) trip += "1 Trip";
	if (trip2) trip += "2 Trips";
	if (trip3) trip += "3 Trips";
	if (trip4) trip += "4 Trips";
	if (trip5) trip += "5 Trips";
	
	var state = "";
	if (vic) state += "vic";
	if (nsw) state += "nsw";
	if (ql) state += "qld";
	if (nt) state += "nt";
	if (wa) state += "wa";
	if (sa) state += "sa";
	if (tas) state += "tas";
	if (act) state += "act";
	
	var service = "";
	if (destination) service += "Destination";
	if (tickets) service += "Tickets";
	if (services) service += "Services";
	if (other) service += "Other";
	
	var issues = "";
	if (bev) issues += "Beverages";
	if (wifi) issues += "WiFi";
	if (activ) issues += "Activities";
	if (tick) issues += "Ticketing";
	if (des) issues += "Destination";

	
	
	sessionStorage.firstname = firstname;
	sessionStorage.lastname = lastname;
	sessionStorage.email = email;
	sessionStorage.street = street;
	sessionStorage.suburb = suburb;
	sessionStorage.state = state;
	sessionStorage.post = post;
	sessionStorage.contact = contact;
	sessionStorage.phone = phone;
	sessionStorage.service = service;
	sessionStorage.issues = issues;
	sessionStorage.trip = trip;
	sessionStorage.concession = concession;
	sessionStorage.travel = travel;
	sessionStorage.ad = ad;
	sessionStorage.un = un;
}

function validate (){
	
	var errMsg = "";
	var tempMsg = "";
	var result = true;
	var firstname = document.getElementById("custfirst").value;
	var lastname = document.getElementById("custlast").value;
	var email = document.getElementById("email").value;
	var street = document.getElementById("street").value;
	var suburb = document.getElementById("suburb").value;
	var state = document.getElementById("state").selected;	
	var post = document.getElementById("post").value;
	var vic = document.getElementById("vic").selected;
	var nsw = document.getElementById("nsw").selected;
	var ql = document.getElementById("qld").selected;
	var nt = document.getElementById("nt").selected;
	var wa = document.getElementById("wa").selected;
	var sa = document.getElementById("sa").selected;
	var tas = document.getElementById("tas").selected;
	var act = document.getElementById("act").selected;
	var pos = document.getElementById("pos").checked;
	var eEmail = document.getElementById("eEmail").checked;
	var phon = document.getElementById("phon").checked;
	var phone = document.getElementById("phone").value;
	var issues = document.getElementById("issues").checked;
	var service = document.getElementById("service").selected;
	var destination = document.getElementById("destination").selected;
	var tickets = document.getElementById("tickets").selected;
	var services = document.getElementById("services").selected;
	var other = document.getElementById("other").selected;
	var bev = document.getElementById("bev").checked;
	var wifi = document.getElementById("wifi").checked;
	var activ = document.getElementById("activ").checked;
	var tick = document.getElementById("tick").checked;
	var des = document.getElementById("des").checked;
	var trip = document.getElementById("trip").checked
	var concession = document.getElementById("concession").value;
	var ad = document.getElementById("adults").value;
	var un = document.getElementById("under").value;
	var stan = document.getElementById("standard").checked;
	var fir = document.getElementById("first").checked;
	var trip1 = document.getElementById("1Trip").checked;
	var trip2 = document.getElementById("2Trips").checked;
	var trip3 = document.getElementById("3Trips").checked;
	var trip4 = document.getElementById("4Trips").checked;
	var trip5 = document.getElementById("5Trips").checked;
	var travel = document.getElementById("travel").checked;
	var contact = document.getElementById("contact").checked;
	
	
	if (!firstname.match(/^[a-zA-Z]+$/)){
		errMsg = errMsg + "Your firrst name must only contain alpha charecters.\n";
		result = false;
	}
	
	if (!lastname.match(/^[a-zA-Z-]+$/)){
		errMsg = errMsg + "Your last name must only contain alpha charecters.\n";
		result = false;	
	}
	
	if (firstname == ""){
		errMsg += "First name cannot be empty.\n";
		result = false;
	}
	
	if (lastname == ""){
		errMsg += "Last name cannot be empty.\n";
		result = false;
	}
	tempMsg = checkPostCode(post);
	if (tempMsg != ""){
		errMsg = errMsg + tempMsg;
		result = false;
	}
	if (ad != ""){
		errMsg += "Its your luck day all passengers get concession prices please use conscession feild to purchase your tickets.\n";
		result = false;
	}
	if (un != ""){
		errMsg += "Its your luck day all passengers get concession prices please use conscession feild to purchase your tickets.\n";
		result = false;
	}	
	if (fir){
		errMsg += "First class no longer available.\n";
		result = false;
	}
	if (errMsg != ""){
		alert (errMsg);
		result = false;
	}
	if (result){
	tripBook (firstname, lastname, email, street, suburb, vic, nsw, ql, //
    nt, wa, sa, tas, act, post, pos, eEmail, phon, phone, tickets, destination, //
	services, other, bev, wifi, activ, tick, des, trip1, trip2, trip3, trip4, //
	trip5, concession, stan, fir, ad, un);
	}
	
	return result;
}


function init() {
	var efieldForm = document.getElementById("efield");
	efieldForm.onsubmit = validate;
	prefill();
	
}

window.onload = init;
