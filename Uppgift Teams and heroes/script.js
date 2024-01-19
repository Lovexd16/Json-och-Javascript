console.log("test");

let teamsContainer = document.getElementById("teamsContainer");

function printHeroLists() {
    
    fetch('heroes.json')
    .then(response => response.json())
    .then(heroesData => {

        console.log(heroesData);

        fetch('teams.json')
            .then(response => response.json())
            .then(teamsData => {

                console.log(teamsData);

                teamsData.forEach(function (team) {
                    let teamDiv = document.createElement("div");
                    teamDiv.innerHTML = "<h2>" + team.teamName + "</h2>";

                    let teamHeroes = heroesData.filter(function (hero) {
                        return hero.teamId === team.teamId;
                    });

                    let heroesList = document.createElement("ul");

                    teamHeroes.forEach(function (hero) {
                        let heroItem = document.createElement("li");
                        heroItem.innerText = hero.heroName;
                        heroesList.appendChild(heroItem);
                    });

                    teamDiv.appendChild(heroesList);

                    teamsContainer.appendChild(teamDiv);
                });
            })
    })

}

printHeroLists();
