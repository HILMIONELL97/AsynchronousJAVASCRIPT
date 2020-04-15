var xhr = new XMLHttpRequest();
var button = document.getElementById("button");

button.addEventListener("click", function() {
    xhr.onload = function() {
        if (xhr.status == 200) {
            document.getElementById("output").innerHTML = xhr.responseText;
        } else {
            Console.log("ERROR 404");
        }
    };
    xhr.open("get", "data.txt", true);
    xhr.send();
});