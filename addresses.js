window.onload = function() {
	var optionsList = document.getElementById("allnames");

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