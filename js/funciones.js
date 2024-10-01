document.addEventListener("DOMContentLoaded", function() {
    let encabezado1 = document.createElement("h2");
    encabezado1.innerText = "Contenido";
    encabezado1.classList.add("encabezado");
    document.body.appendChild(encabezado1);

    let caja1 = document.createElement("div");
    caja1.classList.add("caja");

    let seccion1_1 = document.createElement("div");
    seccion1_1.classList.add("seccion");
    let img1 = document.createElement("img");
    img1.src = "./imagen/m.png"; 
    seccion1_1.appendChild(img1);

    let divider1 = document.createElement("div");
    divider1.classList.add("divider");

    let seccion1_2 = document.createElement("div");
    seccion1_2.classList.add("seccion");
    seccion1_2.innerText = "Mi foto";

    caja1.appendChild(seccion1_1);
    caja1.appendChild(divider1);
    caja1.appendChild(seccion1_2);

    document.body.appendChild(caja1);

    let encabezado2 = document.createElement("h2");
    encabezado2.innerText = "Contenido";
    encabezado2.classList.add("encabezado");
    document.body.appendChild(encabezado2);

    let caja2 = document.createElement("div");
    caja2.classList.add("caja");

    let seccion2_1 = document.createElement("div");
    seccion2_1.classList.add("seccion");
    let img2 = document.createElement("img");
    img2.src = "./imagen/m.png";
    seccion2_1.appendChild(img2);

    let divider2 = document.createElement("div");
    divider2.classList.add("divider");

    let seccion2_2 = document.createElement("div");
    seccion2_2.classList.add("seccion");
    seccion2_2.innerText = "Mi foto";
    caja2.appendChild(seccion2_1);
    caja2.appendChild(divider2);
    caja2.appendChild(seccion2_2);

    document.body.appendChild(caja2);
});
