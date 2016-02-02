window.onload = function() {
   document.getElementById("puppies").onclick = updatePictures;
   document.getElementById("kitties").onclick = updatePictures;
};

function updatePictures() {
  var animal = "";
  if (document.getElementById("puppies").checked) {
    animal = "puppy";
  } else {
    animal = "kitty";
  }
  var ajax = new XMLHttpRequest();
  ajax.onload = displayPictures;
  ajax.open("GET", "ajaxpets.php?animal=" + animal, true);
  ajax.send();
}

function displayPictures() {
  document.getElementById("pictures").innerHTML = this.responseText;
}