window.onload = function() {
	document.getElementById("allnames").onchange = showName;
	document.getElementById("add").onclick = createAddress;

	var ajax = new XMLHttpRequest();
	ajax.onload = loadList;
	ajax.open("GET", "addressbook.php", true);
	ajax.send();
}

function loadList() {
	var json = JSON.parse(this.responseText);
	for (var i = 0; i < json.names.length; i++) {
		addName(json.names[i]);
	}
}

function addName(name) {
	var option = document.createElement("option");
	option.innerHTML = name;
	option.value = name;
	document.getElementById("allnames").appendChild(option);
}

function showName(event) {
	var name = document.getElementById("allnames").value;
	console.log(name);

	var ajax = new XMLHttpRequest();
	ajax.onload = showAddress;
	ajax.open("GET", "addressbook.php?name=" + name, true);
	ajax.send();
}

function showAddress(ajax) {
	var address = JSON.parse(this.responseText).address;
	document.getElementById("addressdisplay").innerHTML = address;
}

function createAddress(event) {
	var name = document.getElementById("name").value;
	var address = document.getElementById("address").value;
	console.log(address);

	var data = new FormData();
	data.append("name", name);
	data.append("address", address);

	var ajax = new XMLHttpRequest();
	ajax.onload = addressCreated;
	ajax.open("POST", "addressbook.php", true);
	ajax.send(data);
}

function addressCreated() {
	addName(document.getElementById("name").value);
}
