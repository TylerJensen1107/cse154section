window.onload = function() {
	var optionsList = document.getElementById("allnames");
	document.getElementById("add").onclick = postAddress;

	optionsList.onchange = loadAddress;

	var ajax = new XMLHttpRequest();
	ajax.onload = loadList;
	ajax.open("GET", "https://webster.cs.washington.edu/cse154/sections/10/addressbook/addressbook.php", true);
	ajax.send();
}

function postAddress() {
	var name = document.getElementById("name").value;
	var address = document.getElementById("address").value;

	var data = new FormData();
	data.append("name", name);
	data.append("address", address);

	var ajax = new XMLHttpRequest();
	ajax.onload = addressCreated;
	ajax.open("POST", "https://webster.cs.washington.edu/cse154/sections/10/addressbook/addressbook.php", true);
	ajax.send(data);

}

function addressCreated() {
	console.log(JSON.parse((this.responseText)));
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

	document.getElementById("addressdisplay").appendChild(address);



}




