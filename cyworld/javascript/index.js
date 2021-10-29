function goto_home(){
    document.getElementById("iframes").src="home.html"
    document.getElementById("home").style = "background-color:white; color : black"

    document.getElementById("game").removeAttribute("style")
    document.getElementById("jukebox").removeAttribute("style")
}
function goto_game(){
    document.getElementById("iframes").src="game.html"
    document.getElementById("game").style="background-color:white; color : black"

    document.getElementById("home").removeAttribute("style")
    document.getElementById("jukebox").removeAttribute("style")
}
function goto_jukebox(){
    document.getElementById("iframes").src="jukebox.html"
    document.getElementById("jukebox").style="background-color:white; color : black"

    document.getElementById("game").removeAttribute("style")
    document.getElementById("home").removeAttribute("style")
}

