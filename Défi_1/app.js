var request = new XMLHttpRequest();
var button = document.getElementById("button");
button.addEventListener("click", loadData);

function loadData() {
    request.onload = function() {
        if (request.readyState == 4 && request.status == 200) {
            document.getElementById("output").innerHTML = request.responseText;
        } else if (request.status = 404) {
            console.log("ERROR 404");
        }
    };
    request.open('get', "data.txt")
    request.send();

}