window.onload = function() {
	document.getElementById("load").onclick = ajaxRequest;
}

function ajaxRequest() {
	var ajax = new XMLHttpRequest();
	ajax.onload = loadBoot;
	ajax.open("GET", "https://webster.cs.washington.edu/cse154/sections/9/bootloader/loader.php", true);
	ajax.send();
	toggleLoad();
}
	
function loadBoot() {
  toggleLoad();
  if (this.status == 200) {   // request succeeded
    console.log(this.responseText);
    var imgTag = document.createElement("img");
    imgTag.src = this.responseText;
    document.getElementById("boot").innerHTML = "";
    document.getElementById("boot").appendChild(imgTag);
  } else {
  	alert(this.statusText);
  }
}	

function toggleLoad() {
	var loading = document.getElementById("loading");
	var current = loading.style.display;
	if(current === "none") {
		loading.style.display = "block";
	} else {
		loading.style.display = "none";
	}
}
	