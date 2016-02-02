
window.onload = function() {
	document.getElementById("kitties").onclick = makeAjaxRequest("kitty");
	document.getElementById("puppies").onclick = makeAjaxRequest("puppy");
}

function makeAjaxRequest(animal) {
	console.log("inside ajax request for " + animal);
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