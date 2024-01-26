// let ul = document.getElementById("ul");

// console.log("hej");

// fetch("teams.json")
// .then(res => res.json())
// .then(data => {
//     console.log("teams", data);

//     data.map(team => {
//         let li = document.createElement("li");
//         li.innerHTML = "<h3>" + team.teamName + "</h3>";

//         fetch("heroes.json")
//         .then(res => res.json())
//         .then(data => {
//             console.log("heroes", data);

//             data.map(hero => {
//             let li = document.createElement("li")
//             li.innerText = hero.heroName;
//             ul.appendChild(li)

//             });
//             ul.appendChild(li)
//         })
//     })

// })

let ul = document.getElementById("ul");

Promise.all([
    fetch("teams.json").then(res => res.json()),
    fetch("heroes.json").then(res => res.json())
])
.then(data => {
    console.log("All", data);

    let teams = data[0];
    let heroes = data[1];

    teams.map(team => {
        let li = document.createElement("li")
        li.innerHTML = "<h3>" + team.teamName + "</h3>";
        ul.appendChild(li);

        heroes.map(hero => {
            if (team.teamId == hero.teamId) {

                let li = document.createElement("li")
                li.innerText = hero.heroName;
    
                ul.appendChild(li)

            }
 
        })

    })
})