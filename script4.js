// Autor: Ayrton Rungi
// Fail: script4.js
// Funktsioon: Slideshow piltide vahetamine

// Massiiv kõikide slaidide andmetega
const slides = [
    {
      src: "https://imageproxy.wolt.com/menu/menu-images/64f725e81d2ba43a2e750196/1b4dff34-bf81-11ee-8442-96cc1f91893a_img_7751__1_.jpg?w=960",
      name: "Caesari wrap kanaga"
    },
    {
      src: "https://imageproxy.wolt.com/menu/menu-images/64f725e81d2ba43a2e750196/c3a7a2cc-e531-11ee-bb6e-1a2de8e0a841_img_8313.jpg?w=960",
      name: "Pastasalat kanaga"
    },
    {
      src: "https://imageproxy.wolt.com/menu/menu-images/64f725e81d2ba43a2e750196/66ba336e-c901-11ee-81b2-ee7bbdb67564_img_7911.jpg?w=960",
      name: "Jogurt puuviljadega"
    },
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
