
var sidenavbar = document.querySelector(".side-navbar")
sidenavbar.style.display = "none"

function show_sideNavBar() {
    sidenavbar.style.display = "block"
}
function close_sideNavBar() {
    sidenavbar.style.display = "none"
}

var collections = document.querySelector(".collections")

var collectionsList = collections.querySelectorAll("div")
var search = document.getElementById("search")

search.addEventListener("keyup", function (event) {
    var enteredValue = event.target.value.toUpperCase()

    for (count = 0; count < collectionsList.length; count++) {
        var collectionName = collectionsList[count].querySelector("p").textContent.toUpperCase()
        if (collectionName.indexOf(enteredValue) < 0) {
            collectionsList[count].style.display = "none"
        }
        else {
            collectionsList[count].style.display = "block"
        }
    }
})
