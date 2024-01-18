fetch("employee.json")
.then((response) => response.json())
.then((data) => printEmp(data))

function printEmp(emp) {

    for(user in emp) {
        console.log("Förnamn: ", emp[user].address.city);
    }

    let children = emp[1].children

    console.log("Barnen :", children);

}
