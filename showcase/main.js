let url = "http://127.0.0.1:3000"

const request = async () => {
    let response = await fetch(url, {mode: 'cors'});

    if (response.ok) { 
        let json = await response.json();
        console.log(json)
        for (let person of json.users) {
            var table = document.getElementById("tableBody");

            // Create an empty <tr> element and add it to the 1st position of the table:
            var row = table.insertRow(-1);

            // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
            row.insertCell(0).innerHTML = person.id;
            row.insertCell(1).innerHTML = person.navn;
        }
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

request();