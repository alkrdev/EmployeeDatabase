let url = "http://localhost:3000"

const request = async () => {
    let response = await fetch(url, {
        mode: 'cors',
        method: 'GET',
    });

    if (response.ok) { 
        let json = await response.json();
        fillTable(json)
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

function fillTable(res) {
    for (let person of res.users) {
        var table = document.getElementById("tableBody");

        // Create an empty <tr> element and add it to the 1st position of the table:
        var row = table.insertRow(-1);

        // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
        row.insertCell(0).innerHTML = person.id;
        row.insertCell(1).innerHTML = person.navn;
    }
}

request();