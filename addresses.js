window.onload = function() {
	var optionsList = document.getElementById("allnames");

	var ajax = new XMLHttpRequest();
	ajax.onload = loadList;
	ajax.open("GET", "addressbook.php", true);
	ajax.send();
}

function loadList() {
	var json = JSON.parse(this.responseText);
	console.log(json);

	for(var i = 0; i < json.names.length; i++) {
		console.log(json.names[i]);
	}
}