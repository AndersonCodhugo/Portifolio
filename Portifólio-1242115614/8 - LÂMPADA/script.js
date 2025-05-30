document.addEventListener("DOMContentLoaded", function () {
    let imagem = document.getElementById("lamp");
    let body = document.body;

    let lampada0 = "assets/lamp_off.png";
    let lampada1 = "assets/lamp_on.png";

    let lampada_apagada = true;

    imagem.addEventListener("click", function () {
        if (lampada_apagada) {
            imagem.src = lampada1;
            imagem.style.cursor = "pointer";
            imagem.alt = "Lâmpada Acesa";
            body.classList.add("body-aceso");
        } else {
            imagem.src = lampada0;
            imagem.alt = "Lâmpada Apagada";
            body.classList.add("body-apagado");
            body.classList.remove("body-aceso");
        }
        
        lampada_apagada = !lampada_apagada;
    });
});