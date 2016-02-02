window.onload = function() {
	var ajax = new XMLHttpRequest();
	ajax.onload = loadBoot;
	ajax.open("GET", "https://webster.cs.washington.edu/cse154/sections/9/bootloader/loader.php", true);
	ajax.send();

}
	
function loadBoot() {
  if (this.status == 200) {   // request succeeded
    console.log(this.responseText);
  } else {
  	console.log(this);
    console.log("error");
  }
}	
	