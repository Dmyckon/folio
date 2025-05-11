




function lightView() {
    document.getElementById("body").style.backgroundColor = "#e6eff7"
    document.getElementById("profile").style.backgroundColor = "white"
    document.getElementById("one").style.color = "black"
    document.getElementById("two").style.color = "black"
    document.getElementById("three").style.color = "black"
    document.getElementById("four").style.color = "black"
    document.getElementById("note").style.color = "gray"
    document.getElementById("light").style.display = "none"
    document.getElementById("dark").style.display = "block"
}

function darkView() {
    document.getElementById("body").style.backgroundColor = "black"
    document.getElementById("profile").style.backgroundColor = "lightgray"
    document.getElementById("one").style.color = "white"
    document.getElementById("two").style.color = "white"
    document.getElementById("three").style.color = "white"
    document.getElementById("four").style.color = "white"
    document.getElementById("note").style.color = "gray"
    document.getElementById("light").style.display = "block"
    document.getElementById("dark").style.display = "none"
}