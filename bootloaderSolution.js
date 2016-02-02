window.onload = function() {
	document.getElementById("load").onclick = fetchBoot;
};

function fetchBoot() {
	toggleLoadingMessage();
	var ajax = new XMLHttpRequest();
	ajax.onload = displayBoot;
	ajax.open("GET", "https://webster.cs.washington.edu/cse154/sections/9/bootloader/loader.php", true);
	ajax.send();
}

function displayBoot() {
	toggleLoadingMessage();
	if (this.status == 200) {
		var img = document.createElement("img");
		img.src = this.responseText;
		document.getElementById("boot").appendChild(img);
	} else {
		alert("Error making request:" + 
					"\n\nServer status:\n" + this.status + " " + this.statusText + 
					"\n\nServer response text:\n" + this.responseText);
	}
}

function toggleLoadingMessage() {
	var load = document.getElementById("loading");
	if (load.style.display) {
		load.style.display = "";
	} else {
		document.getElementById("boot").innerHTML = "";
		load.style.display = "none";
	}
}
