
window.sr = ScrollReveal({ reset: true });

sr.reveal('.apresentaçao', { 
    rotate: { x: 100, y: 100, z: 0 },
    duration: 1000
  });


  const saibaMaisButton = document.querySelector("#saiba-mais");
  const modal = document.querySelector("#modal");
  const fade = document.querySelector("#fade");
  
  const saibaMais2Button = document.querySelector("#saiba-mais2");
  const modal2 = document.querySelector("#modal2");
  const fade2 = document.querySelector("#fade2");

  const saibaMais3Button = document.querySelector("#saiba-mais3");
  const modal3 = document.querySelector("#modal3");
  const fade3 = document.querySelector("#fade3");

  const saibaMais4Button = document.querySelector("#saiba-mais4");
  const modal4 = document.querySelector("#modal4");
  const fade4 = document.querySelector("#fade4");

  const saibaMais5Button = document.querySelector("#saiba-mais5");
  const modal5 = document.querySelector("#modal5");
  const fade5 = document.querySelector("#fade5");


  const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");

    modal2.classList.toggle("hide");
    fade2.classList.toggle("hide");

    modal3.classList.toggle("hide");
    fade3.classList.toggle("hide");

    modal4.classList.toggle("hide");
    fade4.classList.toggle("hide");

    modal5.classList.toggle("hide");
    fade5.classList.toggle("hide");
  };

  [saibaMaisButton, modal, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
  });

  [saibaMais2Button, modal2, fade2].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
  });

  [saibaMais3Button, modal3, fade3].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
  });

  [saibaMais4Button, modal4, fade4].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
  });

  [saibaMais5Button, modal5, fade5].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
  });