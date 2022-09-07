const params = new URLSearchParams(window.location.q); //parse params
const q = params.get("q"); //get q param

document.getElementById("target").value = q
