/*
About page
*/

const bigPicture = document.getElementById("big-picture");

const xButton = document.getElementById("x-button")[0];

const allPictures = document.getElementsByTagName("img");

let selectedPicture = document.getElementById("selected-picture");

for (i = 0; i < allPictures.length; i++) {
    allPictures[i].onclick = function() {
        bigPicture.style.display = "block";
        selectedPicture.src = this.src;
        selectedPicture.alt = this.alt;
    }
}

xButton.addEventListener ("click", function() {
    bigPicture.style.display = "none";
})

/*
Design page
*/