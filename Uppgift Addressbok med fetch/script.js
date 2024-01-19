let employeeList = document.getElementById("employeeList");

function printEmployees() {

    employeeList.innerHTML = "";

    fetch("ateam.json")
    .then(res => res.json())
    .then(data => {

        data.sort((a, b) => a.age - b.age)

        data.map(employee => {
            
            console.log("Titel: " + employee.title + ", Namn: " + employee.name + ", Email: " + employee.email);

            let li = document.createElement("li")
            li.innerText = "Titel: " + employee.title + ", Namn: " + employee.name + ", Email: " + employee.email + ", Age: " + employee.age;

            employeeList.appendChild(li);
        })
    })
}

printEmployees();