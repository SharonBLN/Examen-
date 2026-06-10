function validarFormulario() {

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let danza = document.getElementById("danza").value;
    let comentario = document.getElementById("comentario").value;

    if (
        nombre.trim() === "" ||
        apellido.trim() === "" ||
        danza.trim() === "" ||
        comentario.trim() === ""
    ) {

        document.getElementById("mensaje").innerHTML =
        "⚠ Todos los campos son obligatorios";

        return false;
    }

    document.getElementById("mensaje").innerHTML =
    "✓ Formulario enviado correctamente";

    return true;
}
