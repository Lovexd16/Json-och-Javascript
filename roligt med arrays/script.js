console.log("hello");

fetch("empl.json")
.then(function(response) {
    return response.json();
})
.then(function(json) {
    
    console.log("Anställda: ", json);

    //sort funktion. Bokstavsordning. Flytta på minuset för att få omvänd ordning. Byt på "namn" till annan variabel för att sortera efter annat än namn
    json.sort((a, b) => (a.namn > b.namn) ? 1 : -1)
    console.log("Anställda: ", json);

    //find funktion. Visar bara den första i arrayet som bor i borås.
    var findCity = json.find(a => a.city === 'Borås')
    console.log(findCity);

    //filter funktion. Visar alla som bor i Uddebo, tillskillnad från find som bara visar den första.
    var filterCity = json.filter(a => a.city == "Uddebo");
    console.log(filterCity);

})