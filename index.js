const people = [];
let verification = false;
let totalAmount = 0;
let contribution = 0;
// #CAPTURAR y AGREGAR
function capturar() {
  let name = document.getElementById('name').value;
  let amount = document.getElementById('amount').value;
  validation(name, amount); // Validar datos
  if (verification == true) {
    people.push(`${name} gastó $${amount}`);
    document.getElementById('name').value = '';
    document.getElementById('amount').value = '';
    document.getElementById('data').innerHTML = ''; //! Para que se vacie y no se acumule
    for (let i = 0; i < people.length; i++) {
      document.getElementById('data').innerHTML += `<p> ${people[i]} </p>`;
    }
    results(amount, people); // Resultados
  }
}
// #VALIDACIÓN DE DATOS
function validation(value1, value2) {
  if ((value1 == '') | (value2 == '')) {
    alert('Es obligatorio llenar todos los campos');
    verification = false;
  } else {
    verification = true;
  }
}
// #GASTO TOTAL Y APORTES
function results(amount, people) {
  if (people.length == 1) {
    document.getElementById('data').innerHTML = '<p> Ingrese una persona más </p>';
  } else {
    totalAmount += parseInt(amount);
    document.getElementById('results').innerHTML = `$ ${totalAmount}`;
    contribution = totalAmount / people.length;
    document.getElementById('contribution').innerHTML = `$ ${contribution}`;
  }
}
// #VACIAR TODO
function clear_all() {
  people.splice(0, people.length)
  totalAmount = 0;
  contribution = 0;
  document.getElementById('data').innerHTML = '<p> Esperando datos... <p>'
  document.getElementById('results').innerHTML = ''
  document.getElementById('contribution').innerHTML = ''
}
