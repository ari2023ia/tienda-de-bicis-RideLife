class Bicicleta {
    constructor(nombre, aro, img, precio) {
        this.nombre = nombre;
        this.aro = aro;
        this.img = img;
        this.precio = precio;
    }
}

//bicis en stock
let bici_scott_29 = new Bicicleta("SCOTT", "Aro 29", "./imgs/bici1.png", "Precio: 1.900.000 Gs.")


//conjuntos
let aro29 = []
aro29.push(bici_scott_29);

document.addEventListener('DOMContentLoaded', function () {
    const checkboxes = document.querySelectorAll('input[name="filtro"]');
    const contenido = document.getElementById('contenido');

    function actualizarContenido() {
      let seleccionado = Array.from(checkboxes).find(checkbox => checkbox.checked);
      if (seleccionado.value === "Aro 29") {
        aro29.forEach((bici) => {
            contenido.innerHTML = `<p style="font-size:24px; color: #a9ee39; text-shadow: -4px -4px 8px #0023579a; letter-spacing: 2px; text-align: center; margin-bottom: 28px;">${seleccionado.value}</p>
            <div style="display:flex; flex-direction:row; flex-wrap: wrap;">  

              <div style="display: flex; flex-direction: column; align-items: center; width: 270px; flex-shrink: 0; margin-left:8px; margin-bottom:24px; background-color:rgba(169, 238, 57, 0.27); border-radius: 8px; padding-bottom: 12px; padding-top: 12px;">
                  <p style="color: #a9ee39; text-shadow: -4px -4px 8px #0023579a; letter-spacing: 2px; text-align: center;"> ${bici.nombre}</p>
                  <img src=${bici.img} style="width: 100%">
                  <p style="color: #a9ee39; text-shadow: -4px -4px 8px #0023579a; letter-spacing: 2px; text-align: center;">${bici.precio}</p>
              </div>

              <div style="display: flex; flex-direction: column; align-items: center; width: 270px; flex-shrink: 0; margin-left:8px; margin-bottom:24px; background-color:rgba(169, 238, 57, 0.27); border-radius: 8px; padding-bottom: 12px; padding-top: 12px;">
                  <p style="color: #a9ee39; text-shadow: -4px -4px 8px #0023579a; letter-spacing: 2px; text-align: center;"> ${bici.nombre}</p>
                  <img src=${bici.img} style="width: 100%">
                  <p style="color: #a9ee39; text-shadow: -4px -4px 8px #0023579a; letter-spacing: 2px; text-align: center;">${bici.precio}</p>
              </div>

              <div style="display: flex; flex-direction: column; align-items: center; width: 270px; flex-shrink: 0; margin-left:8px; margin-bottom:24px; background-color:rgba(169, 238, 57, 0.27); border-radius: 8px; padding-bottom: 12px; padding-top: 12px;">
                  <p style="color: #a9ee39; text-shadow: -4px -4px 8px #0023579a; letter-spacing: 2px; text-align: center;"> ${bici.nombre}</p>
                  <img src=${bici.img} style="width: 100%">
                  <p style="color: #a9ee39; text-shadow: -4px -4px 8px #0023579a; letter-spacing: 2px; text-align: center;">${bici.precio}</p>
              </div>

              <div style="display: flex; flex-direction: column; align-items: center; width: 270px; margin-left:8px; margin-bottom:24px; background-color:rgba(169, 238, 57, 0.27); border-radius: 8px; padding-bottom: 12px; padding-top: 12px;">
                  <p style="color: #a9ee39; text-shadow: -4px -4px 8px #0023579a; letter-spacing: 2px; text-align: center;"> ${bici.nombre}</p>
                  <img src=${bici.img} style="width: 100%">
                  <p style="color: #a9ee39; text-shadow: -4px -4px 8px #0023579a; letter-spacing: 2px; text-align: center;">${bici.precio}</p>
              </div>

              <div style="display: flex; flex-direction: column; align-items: center; width: 270px; margin-left:8px; margin-bottom:24px; background-color:rgba(169, 238, 57, 0.27); border-radius: 8px; padding-bottom: 12px; padding-top: 12px;">
                  <p style="color: #a9ee39; text-shadow: -4px -4px 8px #0023579a; letter-spacing: 2px; text-align: center;"> ${bici.nombre}</p>
                  <img src=${bici.img} style="width: 100%">
                  <p style="color: #a9ee39; text-shadow: -4px -4px 8px #0023579a; letter-spacing: 2px; text-align: center;">${bici.precio}</p>
              </div>
            </div>`;
        })
      }
      else if (seleccionado.value === "Aro 27"){
        contenido.innerHTML = `<p style="font-size:24px; color: #a9ee39; text-shadow: -4px -4px 8px #0023579a; letter-spacing: 2px; text-align: center; margin-bottom: 28px;">${seleccionado.value}</p>
          <p style="font-size:24px; color: #a9ee39; text-shadow: -4px -4px 8px #0023579a; letter-spacing: 2px; text-align: center; margin-bottom: 28px;"> Actualmente no hay bicis de Aro 27 </p>`;
      } else if (seleccionado.value === "Bicicletas eléctricas"){
        contenido.innerHTML = `<p style="font-size:24px; color: #a9ee39; text-shadow: -4px -4px 8px #0023579a; letter-spacing: 2px; text-align: center; margin-bottom: 28px;">${seleccionado.value}</p>
          <p style="font-size:24px; color: #a9ee39; text-shadow: -4px -4px 8px #0023579a; letter-spacing: 2px; text-align: center; margin-bottom: 28px;"> Actualmente no hay bicis eléctricas </p>`;
      } else if (seleccionado.value === "Bicicletas de carretera"){
        contenido.innerHTML = `<p style="font-size:24px; color: #a9ee39; text-shadow: -4px -4px 8px #0023579a; letter-spacing: 2px; text-align: center; margin-bottom: 28px;">${seleccionado.value}</p>
          <p style="font-size:24px; color: #a9ee39; text-shadow: -4px -4px 8px #0023579a; letter-spacing: 2px; text-align: center; margin-bottom: 28px;"> Actualmente no hay bicis de carretera </p>`;
      } else if (seleccionado.value === "Bicicletas urbanas"){
        contenido.innerHTML = `<p style="font-size:24px; color: #a9ee39; text-shadow: -4px -4px 8px #0023579a; letter-spacing: 2px; text-align: center; margin-bottom: 28px;">${seleccionado.value}</p>
          <p style="font-size:24px; color: #a9ee39; text-shadow: -4px -4px 8px #0023579a; letter-spacing: 2px; text-align: center; margin-bottom: 28px;"> Actualmente no hay bicis para ciudad </p>`;
      } else {
        contenido.innerHTML = `<p style="font-size:24px; color: #a9ee39; text-shadow: -4px -4px 8px #0023579a; letter-spacing: 2px; text-align: center; margin-bottom: 28px;">${seleccionado.value}</p>
          <p style="font-size:24px; color: #a9ee39; text-shadow: -4px -4px 8px #0023579a; letter-spacing: 2px; text-align: center; margin-bottom: 28px;"> Actualmente no hay bicis para montañas </p>`;
      }
      
    }

    checkboxes.forEach(checkbox => {
      checkbox.addEventListener('change', function () {
        checkboxes.forEach(cb => cb !== this && (cb.checked = false)); // Desmarca los demás
        actualizarContenido();
      });
    });

    actualizarContenido(); // Mostrar la opción por defecto al cargar
  });