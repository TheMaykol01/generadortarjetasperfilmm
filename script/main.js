var nombreInput = document.getElementById("nombre-input");
var cargoInput = document.getElementById("cargo-input");
var colorInput = document.getElementById("color-input");

var nombrePreview = document.getElementById("nombre-preview");
var cargoPreview = document.getElementById("cargo-preview");
var colorPreview = document.getElementById("color-preview");

var formulario = document.getElementById("formulario");

var resultado = document.getElementById("resultado");
var resultadoNombre = document.getElementById("resultado-nombre");
var resultadoCargo = document.getElementById("resultado-cargo");
var resultadoColor = document.getElementById("resultado-color");


function actualizarNombre() {
    var valor = nombreInput.value;

    if (valor == "") {
        nombrePreview.textContent = "NOMBRE";
        nombrePreview.classList.add("vacio");
    } else {
        nombrePreview.textContent = valor;
        nombrePreview.classList.remove("vacio");
    }
}

function actualizarCargo() {
    var valor = cargoInput.value;

    if (valor == "") {
        cargoPreview.textContent = "CARGO";
        cargoPreview.classList.add("vacio");
    } else {
        cargoPreview.textContent = valor;
        cargoPreview.classList.remove("vacio");
    }
}

function actualizarColor() {
    var valor = colorInput.value;

    if (valor == "") {
        colorPreview.textContent = "COLOR";
        colorPreview.classList.add("vacio");
    } else {
        var textoSeleccionado = colorInput.options[colorInput.selectedIndex].text;
        colorPreview.textContent = textoSeleccionado;
        colorPreview.classList.remove("vacio");
    }
}


nombreInput.addEventListener("input", function () {
    actualizarNombre();
});

cargoInput.addEventListener("input", function () {
    actualizarCargo();
});

colorInput.addEventListener("change", function () {
    actualizarColor();
});


formulario.addEventListener("submit", function (e) {
    e.preventDefault();

    if (nombreInput.value == "" || cargoInput.value == "") {
        alert("Por favor llena todos los campos!");
        return;
    }

    var nombre = nombreInput.value;
    var cargo = cargoInput.value;
    var color = colorInput.value;

    if (color == "") {
        alert("Selecciona un color favorito!");
        return;
    }

    resultadoNombre.textContent = nombre;
    resultadoCargo.textContent = cargo;

    var textoColor = colorInput.options[colorInput.selectedIndex].text;
    resultadoColor.textContent = textoColor;

    resultado.style.display = "block";

    resultado.scrollIntoView({ behavior: "smooth" });
});


nombrePreview.classList.add("vacio");
cargoPreview.classList.add("vacio");
colorPreview.classList.add("vacio");
