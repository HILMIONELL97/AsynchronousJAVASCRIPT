var req = new XMLHttpRequest();
var button1 = document.getElementById('button1');
var customer = document.getElementById('customer');


button1.addEventListener("click", loadCustomer);

function loadCustomer() {

    if (req.readyState = 4 && req.status == 200) {
        var DATA = JSON.parse(req.responseText);
        for (var i in DATA) {
            customer.innerHTML = "id: " + DATA.id + "<br>" + "name: " + DATA.name + "<br>" + "company: " + DATA.company + "<br>" + "phone: " + DATA.phone;
        }
    } else if (req.status == 404) {
        console.log("ERROR 404")
    }
    req.open('GET', 'customer.json');
    req.send();

};


var req1 = new XMLHttpRequest;
var button2 = document.getElementById('button2');


button2.addEventListener('click', loadCustomers);

function loadCustomers() {

    req1.onload = function() {
        if (req1.readyState = 4 && req1.status == 200) {
            var DATA1 = JSON.parse(req1.response)
            var customers = document.getElementById('customers');
            for (var i in DATA1) {
                customers += "id: " + DATA1[i].id + "<br>" + "name: " + DATA1[i].name + "<br>" + "company: " + DATA1[i].company + "<br>" + "phone: " + DATA1[i].phone;
            }
            document.getElementById('customers').innerHTML = customers

        } else if (req1.status == 404) {
            console.log("ERROR 404")
        }
    }
    req1.open('get', 'customers.json', true);
    req1.send();

};