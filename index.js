let myForm = document.querySelector("form");
let Name = document.getElementById("name");
let doctor_id = document.getElementById("docID");
let special = document.getElementById("dept");
let EXP = document.getElementById("exp");
let EMAIL = document.getElementById("email");
let MOBILE = document.getElementById("mbl");
let tbody = document.querySelector("tbody");

let Data = [];

myForm.addEventListener("submit", function (e) {
    e.preventDefault();


    let obj = {
        name: Name.value,
        docID: doctor_id.value,
        dept: special.value,
        exp: EXP.value,
        email: EMAIL.value,
        mbl: MOBILE.value,
    };

    Data.push(obj);
    console.log(Data);

    tbody.innerHTML = "";

    Data.map((e) => {
        let row = document.createElement("tr");

        let tdName = document.createElement("td");
        tdName.textContent = e.name;
        row.appendChild(tdName);

        let tdDoctorID = document.createElement("td");
        tdDoctorID.textContent = e.docID;
        row.appendChild(tdDoctorID);

        let tdSpecial = document.createElement("td");
        tdSpecial.textContent = e.dept;
        row.appendChild(tdSpecial);

        let tdExp = document.createElement("td");
        tdExp.textContent = e.exp;
        row.appendChild(tdExp);

        let tdEmail = document.createElement("td");
        tdEmail.textContent = e.email;
        row.appendChild(tdEmail);

        let tdMobile = document.createElement("td");
        tdMobile.textContent = e.mbl;
        row.appendChild(tdMobile);

        let tdRole = document.createElement("td");
        if (e.exp > 5) {
            tdRole.textContent = "Senior";
        } else if (e.exp >= 2 && e.exp <= 5) {
            tdRole.textContent = "Junior";
        } else if (e.exp <= 1) {
            tdRole.textContent = "Fresher";
        }
        row.appendChild(tdRole);

        let tdDelete = document.createElement("td");
        let delBtn = document.createElement("button");
        delBtn.innerText = "DELETE";
        delBtn.addEventListener("click", function () {
            row.remove();
            delBtn.style.backgroundColor = "red"; 
        });
        tdDelete.appendChild(delBtn);
        row.appendChild(tdDelete);

        tbody.appendChild(row);
    });
});



