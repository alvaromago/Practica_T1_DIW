document.addEventListener("DOMContentLoaded", function () {
	var scrollButton = document.getElementById("btnInicio");

	scrollButton.addEventListener("click", function () {
		var seccionDestino = document.getElementById("inicio");
		seccionDestino.scrollIntoView({ behavior: "smooth" });
	});
});

document.addEventListener("DOMContentLoaded", function () {
	var scrollButton = document.getElementById("btnPresentacion");

	scrollButton.addEventListener("click", function () {
		var seccionDestino = document.getElementById("presentacion");
		seccionDestino.scrollIntoView({ behavior: "smooth" });
	});
});

document.addEventListener("DOMContentLoaded", function () {
	var scrollButton = document.getElementById("btnCaracteristicas");

	scrollButton.addEventListener("click", function () {
		var seccionDestino = document.getElementById("caracteristicas");
		seccionDestino.scrollIntoView({ behavior: "smooth" });
	});
});

document.addEventListener("DOMContentLoaded", function () {
	var scrollButton = document.getElementById("btnBeneficios");

	scrollButton.addEventListener("click", function () {
		var seccionDestino = document.getElementById("beneficios");
		seccionDestino.scrollIntoView({ behavior: "smooth" });
	});
});

document.addEventListener("DOMContentLoaded", function () {
	var scrollButton = document.getElementById("btnCompra");

	scrollButton.addEventListener("click", function () {
		var seccionDestino = document.getElementById("compra");
		seccionDestino.scrollIntoView({ behavior: "smooth" });
	});
});

document.addEventListener("DOMContentLoaded", function () {
	var scrollButton = document.getElementById("btnContacto");

	scrollButton.addEventListener("click", function () {
		var seccionDestino = document.getElementById("contacto");
		seccionDestino.scrollIntoView({ behavior: "smooth" });
	});
});
