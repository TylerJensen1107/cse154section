window.onload = function() {
	var ajax = new XMLHttpRequest();
	ajax.onload = showInfo;
	ajax.open("GET", "https://webster.cs.washington.edu/cse154/sections/9/pets/ajaxpets.php?animal=kitty", true);
	ajax.send();
}

function showInfo() {
	console.log(this);
}