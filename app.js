var cuentas = [
  { nombre: "Mali", saldo: 200, password: "1234" },
  { nombre: "Gera", saldo: 290, password: "1234" },
  { nombre: "Maui", saldo: 67, password: "1234" }
];

function iniciarSesion() {
    //PROXIMAMENTE ABRA UN MENU MEJOR ECHO Y UN CIERRE DE SESION
  var seleccion = document.getElementById("cuentas").value;
  var password = document.getElementById("password").value;

  var cuenta = cuentas[seleccion];

  if (cuenta.password === password) {
    document.getElementById("inicio-sesion").style.display = "none";
    document.getElementById("opciones").style.display = "block";
    document.getElementById("saldo-actual").textContent = "Saldo actual: $" + cuenta.saldo.toFixed(2);
  } else {
    alert("Contraseña incorrecta. Por favor, intenta de nuevo.");
  }
}

function consultarSaldo() {
  var seleccion = document.getElementById("cuentas").value;
  var cuenta = cuentas[seleccion];
  document.getElementById("saldo-actual").textContent = "Saldo actual: $" + cuenta.saldo.toFixed(2);
}

function ingresarMonto() {
  var seleccion = document.getElementById("cuentas").value;
  var cuenta = cuentas[seleccion];
  var monto = parseFloat(prompt("Ingresa el monto a ingresar:"));

  if (isNaN(monto) || monto <= 0) {
    alert("Monto inválido. Por favor, ingresa un valor numérico positivo.");
  } else {
    var nuevoSaldo = cuenta.saldo + monto;
    if (nuevoSaldo > 990) {
      alert("El monto ingresado excede el límite de $990.");
    } else {
      cuenta.saldo = nuevoSaldo;
      document.getElementById("saldo-actual").textContent = "Saldo actual: $" + cuenta.saldo.toFixed(2);
      alert("Se ha ingresado $" + monto.toFixed(2) + " a tu cuenta.\nNuevo saldo: $" + cuenta.saldo.toFixed(2));
    }
  }
}

function retirarMonto() {
  var seleccion = document.getElementById("cuentas").value;
  var cuenta = cuentas[seleccion];
  var monto = parseFloat(prompt("Ingresa el monto a retirar:"));

  if (isNaN(monto) || monto <= 0) {
    alert("Monto inválido. Por favor, ingresa un valor numérico positivo.");
  } else if (monto > cuenta.saldo) {
    alert("No tienes suficiente saldo para retirar esa cantidad.");
  } else if (cuenta.saldo - monto < 10) {
    alert("No puedes retirar esa cantidad debido al límite mínimo de $10.");
  } else {
    cuenta.saldo -= monto;
    document.getElementById("saldo-actual").textContent = "Saldo actual: $" + cuenta.saldo.toFixed(2);
    alert("Se ha retirado $" + monto.toFixed(2) + " de tu cuenta.\nNuevo saldo: $" + cuenta.saldo.toFixed(2));
  }
}
