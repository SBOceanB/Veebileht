// Autor: Ayrton Rungi
// Fail: script2.js
// Funktsioon: Slideshow piltide vahetamine

// Massiiv kõikide slaidide andmetega
const slides = [
    {
      src: "https://tartu.operapizza.ee/_next/image?url=https%3A%2F%2Fdb.operapizza.ee%2Fuploads%2Fpepperoni_a6a91812a3.jpg&w=1920&q=75",
      name: "Pepperoni"
    },
    {
      src: "https://tartu.operapizza.ee/_next/image?url=https%3A%2F%2Fdb.operapizza.ee%2Fuploads%2Fmargareta_56de3f7f07.jpg&w=1920&q=75",
      name: "Margareta"
    },
    {
      src: "https://tartu.operapizza.ee/_next/image?url=https%3A%2F%2Fdb.operapizza.ee%2Fuploads%2Fnapolitana_0f1b3340ee.jpg&w=1920&q=75",
      name: "Napolitana"
    },
    {
      src: "https://tartu.operapizza.ee/_next/image?url=https%3A%2F%2Fdb.operapizza.ee%2Fuploads%2Fopera_18b7773005.jpg&w=1920&q=75",
      name: "Opera"
    }
  ];
// Hoiab aktiivse pildi indeksit
  let index = 0;
// Võtame HTML elemendid kasutamiseks
  const slideImg = document.getElementById("slide-img");
  const slideName = document.getElementById("slide-name");
// Funktsioon, mis uuendab ekraanil olevat pilti ja nime
  function updateSlide() {
    slideImg.src = slides[index].src;
    slideName.textContent = slides[index].name;
  }
// Nupu "next" vajutus – liigu järgmisele pildile
  document.querySelector(".next").addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateSlide();
  });
// Nupu "prev" vajutus – liigu eelmisele pildile
  document.querySelector(".prev").addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateSlide();
  });
