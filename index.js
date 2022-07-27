let nropersona= 0;
let gastoTotal= 0;
let aporte= 0;
function capturar(){
    let nombre=document.getElementById("nombre").value;
    let gasto=document.getElementById("gasto").value;
    if (nombre == ""){
        document.getElementById("nombre").focus();
    } else if (gasto == "") {
        document.getElementById("gasto").focus();
    } else {
        let entrega= nombre.concat(" $" + gasto);
        gastoTotal= gastoTotal + parseInt(gasto);
        if (nropersona == 0) {
            nropersona++;
            document.getElementById("entrega").innerHTML = entrega + '<p id="' + nropersona + '">' + "</p>";
            document.getElementById("resultado").innerHTML = "$" + gastoTotal;
            document.getElementById("aporte").innerHTML = "Esperando a que ingrese a otra persona";
            document.getElementById("nombre").value = "";
            document.getElementById("gasto").value = "";
        }else{
            document.getElementById(nropersona).innerHTML = entrega + '<p id="' + (nropersona += 1) + '">' + "</p>";
            document.getElementById("resultado").innerHTML = "$" + gastoTotal;
            aporte = gastoTotal/nropersona;
            document.getElementById("aporte").innerHTML = "$" + aporte;
            document.getElementById("nombre").value = "";
            document.getElementById("gasto").value = "";
        }
    }
}
function vaciar(){
    gastoTotal = 0;
    nropersona = 0;
    aporte = 0;
    document.getElementById("nombre").value = "";
    document.getElementById("gasto").value = "";
    document.getElementById("entrega").innerHTML = "Esperando datos...";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("aporte").innerHTML = "";
}