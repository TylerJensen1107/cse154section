window.onload = function() {
	var optionsList = document.getElementById("allnames");

	optionsList.onchange = loadAddress;

	var ajax = new XMLHttpRequest();
	ajax.onload = loadList;
	ajax.open("GET", "https://webster.cs.washington.edu/cse154/sections/10/addressbook/addressbook.php", true);
	ajax.send();
}

function loadList() {
	var json = JSON.parse(this.responseText);
	console.log(json);

	for(var i = 0; i < json.names.length; i++) {
		addName(json.names[i]);
	}
}

function addName(name) {
	var option = document.createElement("option");
	option.innerHTML = name;
	option.value = name;
	document.getElementById("allnames").appendChild(option);
}

function loadAddress() {
	var name = document.getElementById("allnames").value;

	var ajax = new XMLHttpRequest();
	ajax.onload = onAddressLoaded;
	ajax.open("GET", "https://webster.cs.washington.edu/cse154/sections/10/addressbook/addressbook.php?name=" + name, true);
	ajax.send();
}

function onAddressLoaded() {
	var json = JSON.parse(this.responseText);

	var address = document.createElement("p");
	address.innerHTML = json.address;
	console.log(json);

	document.getElementById("addressDisplay").appendChild(address);



}




