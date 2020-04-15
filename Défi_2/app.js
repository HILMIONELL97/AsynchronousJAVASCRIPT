var request = new XMLHttpRequest();
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
button1.addEventListener("click", loadCustomer);
button2.addEventListener("click", loadCustomers);

function loadCustomer() {

    request.onload = function() {
        if (request.readyState == 4 && request.status == 200) {

            document.getElementById("customer").innerHTML = request.response;
        } else if (request.status = 404) {
            Console.log("ERROR 404");
        }
    };

    request.open('get', 'customer.json', true);
    request.send();
}

function loadCustomers() {

    request.onload = function() {
        if (request.readyState == 4 && request.status == 200) {
            document.getElementById("customers").innerHTML = request.response;
        } else if (request.status = 404) {
            Console.log("ERROR 404");
        }
    };

    request.open('get', 'customers.json', true);
    request.send();
}