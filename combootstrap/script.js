const headerInfo = {
    logoSrc: "img/cataventos.png", // Caminho da imagem da logo
    menuOptions: [
        { text: "Loja", link: "index.html" },
        { text: "Clube", link: "clube.html" }
    
    ]
};

// Selecionando o elemento do header
const headerElement = document.querySelector(".navbar");

// Removendo todas as opções de menu existentes
const menuElement = headerElement.querySelector(".nav-tabs");
menuElement.innerHTML = "";

// Adicionando a logo dinamicamente ao header
const logoElement = headerElement.querySelector("#logo");
logoElement.src = headerInfo.logoSrc;

// Adicionando as opções de menu dinamicamente ao header
headerInfo.menuOptions.forEach(option => {
    const liElement = document.createElement("li");
    liElement.classList.add("nav-item");

    const aElement = document.createElement("a");
    aElement.classList.add("nav-link");
    aElement.href = option.link;
    aElement.textContent = option.text;

    liElement.appendChild(aElement);
    menuElement.appendChild(liElement);
});

//menu2
const menuInfo = [
    { text: "Medicamentos", link: "index.html" },
    { text: "Dermocosméticos", disabled: true },
    { text: "Nossas Ofertas", disabled: true },
    { text: "Quem Somos", disabled: true },
    { text: "Fale Conosco", link: "contactUs.html" }
];

// Função para adicionar as opções de menu dinamicamente
function atualizarMenu() {
    const menuElement = document.getElementById("menuList");
    menuElement.innerHTML = "";

    menuInfo.forEach(option => {
        const liElement = document.createElement("li");
        liElement.classList.add("nav-item");

        const aElement = document.createElement("a");
        aElement.classList.add("nav-link");
        aElement.href = option.link || "#";
        aElement.textContent = option.text;
        if (option.disabled) {
            aElement.classList.add("disabled");
            aElement.removeAttribute("href");
        }

        liElement.appendChild(aElement);
        menuElement.appendChild(liElement);
    });
}

// Chama a função para adicionar as opções de menu ao carregar a página
atualizarMenu();

// JavaScript

// Lista de objetos com informações de cada card
const cardsInfo = [
    {
        title: "Medicamento Y",
        imageSrc: "img/IMG_4013.PNG",
        originalPrice: "108,55",
        currentPrice: "100,46"
    },
    {
        title: "Medicamento Z",
        imageSrc: "img/IMG_4013.PNG",
        originalPrice: "95,30",
        currentPrice: "87,40"
    },
    {
        title: "Medicamento A",
        imageSrc: "img/IMG_4013.PNG",
        originalPrice: "8,48",
        currentPrice: "5,75"
    },
    {
        title: "Medicamento X",
        imageSrc: "img/IMG_4013.PNG",
        originalPrice: "33,90",
        currentPrice: "27,81"
    }
];
document.addEventListener("DOMContentLoaded", function () {
    // Função para exibir as informações dos cards no HTML
    function exibirCards() {
        const cardsRow = document.querySelector(".row"); // Selecionar a classe .row

        cardsInfo.forEach((card, index) => {
            const cardHtml = `
                <div class="col-md-3">
                    <div class="card">
                        <img src="${card.imageSrc}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${card.title}</h5>
                            <p class="card-price"> <del>DE:${card.originalPrice}</del><br>R$${card.currentPrice}</p>

                            <div class="cart-area">
                                <div class="cart-buttons">
                                    <div class="quantity">
                                        <p>Qtd:</p>
                                    </div>
                                    <button class="btn btn-cart">+</button>
                                    <button class="btn btn-cart quantity-button">0</button>
                                    <button class="btn btn-cart">-</button>
                                </div>
                                <button class="btn btn-pink add-to-cart-button" data-index="${index}">Adicionar</button>
                                <button class="btn btn-black">Comprar agora</button>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            cardsRow.insertAdjacentHTML("beforeend", cardHtml);
        });

        const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
        addToCartButtons.forEach(button => {
            button.addEventListener("click", function (event) {
                const clickedIndex = event.target.getAttribute("data-index");
                const clickedCard = cardsInfo[clickedIndex];

                console.log("Medicamento adicionado:", clickedCard.title);
                console.log("Lista de medicamentos:", cardsInfo);

                alert(`${clickedCard.title} foi adicionado ao carrinho!`);
            });
        });
    }

    exibirCards();
});
