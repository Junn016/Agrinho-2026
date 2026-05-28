/* =========================================================
   DADOS DINÂMICOS
========================================================= */

const sensors = [
  {
    icon: "🌡️",
    title: "Temperatura",
    description:
      "Monitoramento térmico em tempo real com alta precisão."
  },

  {
    icon: "💧",
    title: "Umidade do Ar",
    description:
      "Controle climático inteligente para ambientes agrícolas."
  },

  {
    icon: "🌱",
    title: "Umidade do Solo",
    description:
      "Sensores capazes de detectar níveis ideais de irrigação."
  },

  {
    icon: "☀️",
    title: "Luminosidade",
    description:
      "Análise de intensidade luminosa para eficiência energética."
  }
];

/* =========================================================
   RENDERIZAÇÃO DOS CARDS
========================================================= */

const featuresGrid = document.getElementById("features-grid");

sensors.forEach(sensor => {

  const card = document.createElement("article");

  card.classList.add("feature-card");

  card.innerHTML = `
    <span>${sensor.icon}</span>
    <h3>${sensor.title}</h3>
    <p>${sensor.description}</p>
  `;

  featuresGrid.appendChild(card);

});

/* =========================================================
   CAROUSEL
========================================================= */

const slides = [
  {
    title: "Agricultura Inteligente",
    text:
      "Monitoramento de plantações e irrigação automatizada."
  },

  {
    title: "Cidades Sustentáveis",
    text:
      "Controle ambiental para espaços urbanos inteligentes."
  },

  {
    title: "Estufas Automatizadas",
    text:
      "Sensoriamento climático para máxima produtividade."
  }
];

const carouselTrack = document.getElementById("carousel-track");

slides.forEach(slide => {

  const slideElement = document.createElement("article");

  slideElement.classList.add("slide");

  slideElement.innerHTML = `
    <h3>${slide.title}</h3>
    <p>${slide.text}</p>
  `;

  carouselTrack.appendChild(slideElement);

});

let currentSlide = 0;

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function updateCarousel() {

  carouselTrack.style.transform =
    `translateX(-${currentSlide * 100}%)`;

}

nextBtn.addEventListener("click", () => {

  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  updateCarousel();

});

prevBtn.addEventListener("click", () => {

  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  updateCarousel();

});

/* =========================================================
   ACCORDION
========================================================= */

const faqData = [
  {
    question: "A estação funciona em tempo real?",
    answer:
      "Sim. Os sensores atualizam os dados continuamente."
  },

  {
    question: "É possível integrar com IoT?",
    answer:
      "Sim. A plataforma suporta integração com APIs e IoT."
  },

  {
    question: "Os dados podem ser armazenados?",
    answer:
      "Sim. O sistema possui armazenamento histórico em nuvem."
  }
];

const accordionContainer =
  document.getElementById("accordion-container");

faqData.forEach(item => {

  const accordionItem = document.createElement("article");

  accordionItem.classList.add("accordion-item");

  accordionItem.innerHTML = `
    <button class="accordion-header">
      ${item.question}
    </button>

    <div class="accordion-content">
      <p>${item.answer}</p>
    </div>
  `;

  accordionContainer.appendChild(accordionItem);

});

const accordionHeaders =
  document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {

  header.addEventListener("click", () => {

    const parent = header.parentElement;

    parent.classList.toggle("active");

  });

});

/* =========================================================
   ACESSIBILIDADE
========================================================= */

let currentFontSize = 16;

const body = document.body;

document
  .getElementById("increase-font")
  .addEventListener("click", () => {

    currentFontSize += 1;

    body.style.fontSize = `${currentFontSize}px`;

  });

document
  .getElementById("decrease-font")
  .addEventListener("click", () => {

    currentFontSize -= 1;

    body.style.fontSize = `${currentFontSize}px`;

  });

/* =========================================================
   ALTO CONTRASTE
========================================================= */

document
  .getElementById("contrast-toggle")
  .addEventListener("click", () => {

    body.classList.toggle("high-contrast");

  });

/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
  document.querySelectorAll(".reveal");

function revealOnScroll() {

  revealElements.forEach(element => {

    const windowHeight = window.innerHeight;

    const elementTop =
      element.getBoundingClientRect().top;

    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {

      element.classList.add("active");

    }

  });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();