var images = ["mom.jpg" , "me and my brother.jpg" , "dad.jpg"]

var names = ["Mom", "Me and My Borther", "My Dad"]


var i = 0;

function Move() {
    if (i == 3) {
        i = 0;
    }
    document.getElementById("image").src = images[i];
    document.getElementById("name").innerHTML = names[i];
    i++;
}