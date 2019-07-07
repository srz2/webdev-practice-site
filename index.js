function dropdownMenu(){
    console.log("Hello");
    var nbList = document.getElementById("nav-bar-list");
    if (nbList.className === "topnav") {
        nbList.className += " responsive";
    } else {
        nbList.className = "topnav";
    }
}