/**
*Author: Peter Micevski 1006551602
*Target: payment.html
*Purpose: Assignment 2 COS100011 CWA JavaScript 
*Created: 14/04/2017
*Last Update: 26/04/2017
*Credits:
*/
"use strict";

function cancelBooking(){
	sessionStorage.clear();
	window.location = "index.html";
}
function cardN(){
	var name = "Unknown";
	var cardArray = document.getElementById("cardtype").getElementsByTagName("option");
	for (var i = 0; i < cardArray.length; i++){
		if (cardArray[i].selected)	
			name = cardArray[i].value;
	}
	return name;
}
function cardCcv(){
	var errMsg = "";
	var cc = document.getElementById("ccv").value;
	var card = cardN();
	var lo = 99;
	var hi = 1000;
	var amLo = 999;
	var amHi = 10000;
	switch (card){
		case "visa":
			if ((cc < lo) && (cc > hi)){
				errMsg = "Incorrect CCV.\n";
			}
			break;
		case "mastercard":
			if ((cc < lo) && (cc > hi)){
				errMsg = "Incorrect CCV.\n";
			}
			break
		case "amex":
			if ((cc < amLo) && (cc > amHi)){
				errMsg = "Incorrect CCV.\n";
			}
			break
			default:
			errMsg = "Please enter the corect CCV.\n";
	}
	return errMsg;
}
function cardEx(){
	var errMsg = "";
	var date = document.getElementById("cardex").value;
	var dd = date.replace(/\//g, '')
	var newdate = "0417";
	if (newdate > dd){
		errMsg = "Not a valid expiry date.\n"
	}
	return errMsg;
}


function checkCard (cardnumber) {  //Code was scourced from http://www.braemoor.co.uk/software/creditcard.shtml
    var errMsg = ""; 
	var cards = new Array();
	var cardname = cardN();
  

	cards [0] = {name: "Visa", 
			   length: "16", 
			   prefixes: "4",
			   checkdigit: true};
	cards [1] = {name: "MasterCard", 
			   length: "16", 
			   prefixes: "51,52,53,54,55",
			   checkdigit: true};
	cards [2] = {name: "AmEx", 
			   length: "15", 
			   prefixes: "34,37",
			   checkdigit: true};

			   
	// Establish card type
	var cardType = -1;
	for (var i=0; i<cards.length; i++) {

	// See if it is this card (ignoring the case of the string)
	if (cardname.toLowerCase () == cards[i].name.toLowerCase()) {
		cardType = i;
		break;
	}
	}

	// If card type not found, report an error
	if (cardType == -1) {
		errMsg = "Unknown card type.\n";
		return errMsg; 
	}

	// Ensure that the user has provided a credit card number
	if (cardnumber.length == 0)  {
		errMsg = "No card number provided.\n";
		return errMsg 
	}

	// Now remove any spaces from the credit card number
	cardnumber = cardnumber.replace (/\s/g, "");

	// Check that the number is numeric
	var cardNo = cardnumber
	var cardexp = /^[0-9]{13,19}$/;
	if (!cardexp.exec(cardNo))  {
		errMsg = "Credit card number is in invalid format.\n";
		return errMsg; 
	}
	   
	// Now check the modulus 10 check digit - if required
	if (cards[cardType].checkdigit) {
	var checksum = 0;                                  // running checksum total
	var mychar = "";                                   // next char to process
	var j = 1;                                         // takes value of 1 or 2

	// Process each digit one by one starting at the right
	var calc;
	for (i = cardNo.length - 1; i >= 0; i--) {

		// Extract the next digit and multiply by 1 or 2 on alternative digits.
		calc = Number(cardNo.charAt(i)) * j;

		// If the result is in two digits add 1 to the checksum total
		if (calc > 9) {
		checksum = checksum + 1;
		calc = calc - 10;
		}

		// Add the units element to the checksum total
		checksum = checksum + calc;

		// Switch the value of j
		if (j ==1) {j = 2} else {j = 1};
	} 

	// All done - if checksum is divisible by 10, it is a valid modulus 10.
	// If not, report an error.
	if (checksum % 10 != 0)  {
		errMsg = "Credit card number is invalid.\n";
		return errMsg; 
	}
	}  

	// Check it's not a spam number
	if (cardNo == '5490997771092064') { 
		errMsg = "Warning! This credit card number is associated with a scam attempt.\n";
		return errMsg; 
	}

	// The following are the card-specific checks we undertake.
	var LengthValid = false;
	var PrefixValid = false; 
	var undefined; 

	// We use these for holding the valid lengths and prefixes of a card type
	var prefix = new Array ();
	var lengths = new Array ();

	// Load an array with the valid prefixes for this card
	prefix = cards[cardType].prefixes.split(",");
	  
	// Now see if any of them match what we have in the card number
	for (i=0; i<prefix.length; i++) {
	var exp = new RegExp ("^" + prefix[i]);
	if (exp.test (cardNo)) PrefixValid = true;
	}
	  
	// If it isn't a valid prefix there's no point at looking at the length
	if (!PrefixValid) {
		errMsg = "Credit card number is invalid.\n";
		return errMsg; 
	}

	// See if the length is valid for this card
	lengths = cards[cardType].length.split(",");
	for (j=0; j<lengths.length; j++) {
	if (cardNo.length == lengths[j]) LengthValid = true;
	}

	// See if all is OK by seeing if the length was valid. We only check the length if all else was 
	// hunky dory.
	if (!LengthValid) {
		errMsg = "Credit card number has an inappropriate number of digits.\n";
		return errMsg; 
	};   

	// The credit card is in the required format.
	return errMsg;
}

function tripCost(trip, concession){
	var cost = 0;
	if (trip.search("1 Trip") != -1) cost = 56;
	if (trip.search("2 Trip")!= -1) cost += 112;
	if (trip.search("3 Trip")!= -1) cost += 147;
	if (trip.search("4 Trip")!= -1) cost += 187;
	if (trip.search("5 Trip")!= -1) cost += 217;
	return cost * concession;
}


function booking(){
	var cost = 0;
	if (sessionStorage.firstname != undefined){
		
		document.getElementById("confirm_name").textContent = sessionStorage.firstname + " " + sessionStorage.lastname;
		document.getElementById("confirm_add").textContent = sessionStorage.street + " " + sessionStorage.suburb + " " + sessionStorage.post + " " + sessionStorage.state;
		document.getElementById("confirm_email").textContent = sessionStorage.email;
		document.getElementById("confirm_num").textContent = sessionStorage.phone;
		document.getElementById("confirm_con").textContent = sessionStorage.contact;
		document.getElementById("confirm_serv").textContent = sessionStorage.service;
		document.getElementById("confirm_iss").textContent = sessionStorage.issues;
		document.getElementById("confirm_trips").textContent = sessionStorage.trip;
		document.getElementById("confirm_tic").textContent = sessionStorage.concession;
		document.getElementById("confirm_class").textContent = sessionStorage.travel;
		cost = tripCost(sessionStorage.trip, sessionStorage.concession);
		document.getElementById("confirm_cost").textContent = cost;
		document.getElementById("custfirst").value = sessionStorage.firstname;
		document.getElementById("custlast").value = sessionStorage.lastname;
		document.getElementById("email").value = sessionStorage.email;
		document.getElementById("street").value = sessionStorage.street;
		document.getElementById("suburb").value = sessionStorage.suburb;
		document.getElementById("state").value = sessionStorage.state;
		document.getElementById("post").value = sessionStorage.post;
		document.getElementById("phone").value = sessionStorage.phone;
		document.getElementById("issues").value = sessionStorage.issues;
		document.getElementById("trip").value = sessionStorage.trip;
		document.getElementById("travel").value = sessionStorage.travel;
		document.getElementById("contact").value = sessionStorage.contact;
		document.getElementById("service").value = sessionStorage.service;	
		document.getElementById("concession").value = sessionStorage.concession;
		document.getElementById("cost").value = cost;

		
	}
}
function validate(){
	
	var errMsg = "";
	var tempMsg = "";
	var result = true;
	
	var card = document.getElementById("cardtype").selected;
	var val = document.getElementById("cardnum").value;
	
	tempMsg = checkCard(val);
	if (tempMsg != ""){
		errMsg = errMsg + tempMsg;
		result = false;
	}
	tempMsg = cardEx();
	if (tempMsg != ""){
		errMsg = errMsg + tempMsg;
		result = false;
	}
	tempMsg = cardCcv();
	if (tempMsg != ""){
		errMsg = errMsg + tempMsg;
		result = false;
	}
	if (errMsg != ""){
		alert (errMsg);
		result = false;
	}
	
	return result;
}



function init(){
	var bookForm = document.getElementById("bookform");
	bookForm.onsubmit = validate;
	booking();
	var cancel = document.getElementById("cancelButton");
	cancel.onclick = cancelBooking;
}


window.onload = init;