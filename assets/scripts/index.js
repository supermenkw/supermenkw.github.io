new Vue({
    el: "#app",
    data: {
        open: false
    },
<<<<<<< HEAD
    methods: {
        openCard: function () {
            this.open = !this.open;
        }
    }
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
=======
})
>>>>>>> 150057e48146aae97df80bcccc5f7ed9d40301b9
