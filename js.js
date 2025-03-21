let url = "https://daffy-eight-henley.glitch.me/user";

let container = document.createElement("div");
container.className = "container";
container.id = "container";
document.body.appendChild(container); // Append container to the body
let loader=document.getElementById("loader")

async function getData() {
    try {
        let res = await fetch(url, {
            method: "GET", // Use GET to fetch data
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }

        let data = await res.json(); // Convert response to JSON
       
        displayData(data); 
        // Call function to display data
    } catch (err) {
        console.error("Error fetching data:", err);
    }
}

function displayData(data) {
    container.innerHTML = ""; // Clear previous content

    data.forEach(user => {
        let card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${user.Series_Title}</h3>
        
            <p>Rank: ${user.rank}</p>
            <p>Year: ${user.Released_Year}</p>
        `;
        loader.remove();
        container.appendChild(card);
        
    });
}

// Call getData() when the page loads

getData();



