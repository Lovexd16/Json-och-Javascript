let userList = document.getElementById("userList");
let newUserName = document.getElementById("newUserName");
let saveUserBtn = document.getElementById("saveUserBtn");

function printUsers() {

    userList.innerHTML = "";

    fetch ("http://localhost:3000/users")
    .then(res => res.json())
    .then(data => {

        data.map(user => {
            console.log("user: ", user.userName);

            let li = document.createElement("li")
            li.innerText = user.userName;

            //Radera knapp
            let deleteBtn = document.createElement("button")
            deleteBtn.innerText = "Radera";

            deleteBtn.addEventListener("click", () => {
                console.log("radera namn: ", user.id);

                fetch("http://localhost:3000/users/" + user.id, {
                    method: "DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    console.log("delete: ", data)
                    printUsers();
            })
            })

            li.appendChild(deleteBtn)

            userList.appendChild(li)
        })
    });
}

printUsers();

saveUserBtn.addEventListener("click", () => {
    console.log("Klick på knapp", newUserName.value);

    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            {userName: newUserName.value}
            )
    })
    .then(res => res.json())
    .then(data => {
        console.log("data: ", data);
        printUsers();
        newUserName.value = "";
    })
})