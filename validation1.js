function valid(){

	var fn=document.getElementById('fn').value;
	var fnr=/^[a-zA-Z]+$/;
	if(document.forms["regform"]["fn"].value==""){
		alert("Enter the first name");
	}
	if(!fnr.test(fn)){
		document.getElementById("fn_msg").innerHTML="invalid name";
		 
	}
	
	var ln=document.getElementById('ln').value;
	var lnr=/^[a-zA-Z]+$/;
	if(document.forms["regform"]["ln"].value==""){
		alert("Enter the last name");
		 
	}
	if(!lnr.test(ln)){
		document.getElementById("ln_msg").innerHTML="invalid last name";
		 
	}
	
	var Pass=document.getElementById('Pass').value;
	var PassR=/^[a-zA-Z!@#$%^&*]+$/;
	if(document.forms["regform"]["Password"].value==""){
		alert("Enter the Password");
		 
	}
	if(!PassR.test(Pass)){
		document.getElementById("Pass_msg").innerHTML="invalid Passsword";
		 
	}
	
	var con=document.getElementById('cont').value;
	var conr=/^[7-9][0-9]{9}$/;
	if(document.forms["regform"]["contact"].value==""){
		alert("Enter the contact");
		 
	}
	if(!conr.test(con)){
		document.getElementById("con_msg").innerHTML="invalid contact";
		 
	}

	var e=document.getElementById('email').value;
	var er=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if(document.forms["regform"]["email"].value==""){
		alert("Enter the email");
		 
	}
	if(!er.test(e)){
		document.getElementById("e_msg").innerHTML="invalid email";
		 
	}

	if(!document.getElementById("male").checked && !document.getElementById("female").checked){
		alert("Please select Gender");
		 
	}

	if(document.getElementsByName("per").value<0 || document.getElementsByName("per").value>100){
		alert("Please enter the previous year marks correctly ");
		 
	}

	
	if(document.getElementById("b").selectedIndex==0){
		alert("Please select Branch");
		 
	}

	document.getElementById("regform").reset();
	
	
}

