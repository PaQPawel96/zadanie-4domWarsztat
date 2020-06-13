console.log("WARSZTAT - Obsługa formularza 'Imie i nazwisko'");

let fName = document.querySelector('[name="fname"]');
let lName = document.querySelector('[name="lname"]');
//let submit = document.getElementById("submit");
let form = document.getElementById("form");

const submitForm = (event) => {
    event.preventDefault();
    console.log(`Imię: ${fName.value}, Nazwisko: ${lName.value}`);
}

form.addEventListener('submit', submitForm);

console.log(form);

