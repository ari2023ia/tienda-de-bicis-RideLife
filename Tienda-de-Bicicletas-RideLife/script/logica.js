const items = [
    { title: "SCOTT", unicode: "Precio: 1.800.000 gs." },
    { title: "LEGIONARY", unicode: "Precio: 1.700.000 gs." },
    { title: "BIANCHI", unicode: "Precio: 1.900.000 gs." },
    { title: "CANNONDALE", unicode: "Precio: 1.850.000 gs." },
    { title: "GT", unicode: "Precio: 1.950.000 gs." },
    { title: "BMC", unicode: "Precio: 1.750.000 gs." },
    { title: "CANYON", unicode: "Precio: 1.850.000 gs." },
    { title: "MILANO", unicode: "Precio: 2.000.000 gs." },
    { title: "TREK", unicode: "Precio: 1.650.000 gs." },
];

const carousel = document.getElementById('carousel');

items.forEach((item, index) => {
    const carouselItem = document.createElement('div');
    carouselItem.classList.add('item');
    carouselItem.style.setProperty('--index', index + 1);
    carouselItem.innerHTML = `
        <div class="item-body">
            <p style="font-family: Permanent Marker, cursive; text-align: center; font-size: 20px; color:#a9ee39;">
                ${item.title}
            </p>
            <img src="./imgs/bici1.png" style="width: 300px; height: auto;" class="title">
            <p style="font-family: Permanent Marker, cursive; font-size: 20px; color:#a9ee39;">Aro 29</p>
            <p style="font-family: Permanent Marker, cursive; font-size: 20px; color:#a9ee39;">
                ${item.unicode}
            </p>
        </div>
    `;
    carousel.appendChild(carouselItem);
});
