const items = [
    { title: "SCOTT1", unicode: "Precio: 1.800.000 gs." },
    { title: "SCOTT2", unicode: "Precio: 1.700.000 gs." },
    { title: "SCOTT3", unicode: "Precio: 1.900.000 gs." },
    { title: "SCOTT4", unicode: "Precio: 1.850.000 gs." },
    { title: "SCOTT5", unicode: "Precio: 1.950.000 gs." },
    { title: "SCOTT6", unicode: "Precio: 1.750.000 gs." },
    { title: "SCOTT8", unicode: "Precio: 1.850.000 gs." },
    { title: "SCOTT9", unicode: "Precio: 2.000.000 gs." },
    { title: "SCOTT10", unicode: "Precio: 1.650.000 gs." },
];

const carousel = document.getElementById('carousel');

items.forEach((item, index) => {
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('item');
    carouselItem.style.setProperty('--index', index + 1);
    carouselItem.innerHTML = `
    
    <div class="item-body">
        <a href="./catalogo.html" style="text-decoration: none;">
            <p style="font-family: Permanent Marker, cursive; text-align: center; font-size: 20px; color:#a9ee39;">
                ${item.title}
            </p>
            <img src="./imgs/bici1.png" style="width: 300px; height: auto;" class="title">
            <p style="font-family: Permanent Marker, cursive; font-size: 20px; color:#a9ee39;">Aro 29</p>
            <p style="font-family: Permanent Marker, cursive; font-size: 20px; color:#a9ee39;">
                ${item.unicode}
            </p>
        </a>
        <a href="https://wa.me/595982759024?text=Hola%20%20quiero%20reservar%20una%20bici" style="text-decoration: none;">
        <button class="comprar" style="margin-top:8px; margin-bottom: -4px;">Comprar Bici</button>
        </a>
    </div>
    `;
    carousel.appendChild(carouselItem);
});

function verCatalogo() {
    window.location.href = "catalogo.html";
}

function agendarCita() {
    window.location.href = "agendarcita.html";
}


