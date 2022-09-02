let people = [];
let verification = false;
let totalAmount = 0;
let contribution = 0;
let btn = document.getElementById('b-btn');

btn.addEventListener('click', () => { // Función CAPTURAR y AGREGAR
    let name = document.getElementById('name').value;
    let amount = document.getElementById('amount').value;
    let data = name + ' $' + amount;
    validation (name, amount) // Validar datos
    if ( verification == true) {
        people.push(data);
        document.getElementById('data').innerHTML = '' //! Para que se vacie y no se acumule
        for (let i = 0; i < people.length; i++) {
            document.getElementById('data').innerHTML += '<p>' + people[i] + '</p>';
        }
        results(amount, people); //* Resultados
    }
})
function validation(value1, value2){ //  Función VERFICAR QUE LOS DATOS SEAN VALIDOS
    if (value1 == '' | value2 == ''){
        alert('Es obligatorio llenar todos los campos')
        verification = false;
    } else{
        verification = true;
    }
}
function results(amount, people){ //* Resultados del gasto total y aporte de cada persona
    if (people.length == 1) {
        document.getElementById('data').innerHTML = 'Ingrese una persona más'
    } else {
        totalAmount += parseInt(amount);
        document.getElementById('results').innerHTML = '$' + totalAmount;
        contribution = totalAmount/people.length;
        document.getElementById('contribution').innerHTML = '$' + contribution;
    }
}