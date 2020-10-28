function handleSound(){
   window.location = 'soundextremism.html';
}

function handleMixes(){
   window.location = 'mixes.html';
}

function handleLiveShows(){
   window.location = 'liveshows.html';
}

function handleHome(){
     window.location = 'home.html';
}

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

document.querySelector("#SoundExtremism").addEventListener("click", handleSound);
document.querySelector("#mixes").addEventListener("click", handleMixes);
document.querySelector("#liveshows").addEventListener("click", handleLiveShows);
document.querySelector("#archive").addEventListener("click", handleHome);