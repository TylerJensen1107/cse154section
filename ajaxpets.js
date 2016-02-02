
window.onload = function() {
	document.getElementById("kitties").onclick = makeAjaxRequest;
	document.getElementById("puppies").onclick = makeAjaxRequest;
}

function makeAjaxRequest() {
	console.log(this.id);
	var animal = "puppy";
	if (this.id === "kitties") {
		animal = "kitty";
	}
	var ajax = new XMLHttpRequest();
	ajax.onload = showInfo;
	ajax.open("GET", "https://webster.cs.washington.edu/cse154/sections/9/pets/ajaxpets.php?animal=" + animal, true);
	ajax.send();
}

function showInfo() {
	console.log(this);

	var picturesDiv = document.getElementById("pictures");
	picturesDiv.innerHTML = this.responseText;
}