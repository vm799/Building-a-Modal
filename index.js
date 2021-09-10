
document.getElementById("contact-el").addEventListener ("click", function() {
    document.getElementById("open-modal").style.display = "block";
    document.getElementById("closed-modal").style.display = "none";
})


document.getElementById("close-el").addEventListener ("click", function() {
    document.getElementById("open-modal").style.display = "none";
    document.getElementById("closed-modal").style.display = "block";
})