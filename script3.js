// Autor: Ayrton Rungi
// Fail: script3.js
// Funktsioon: Slideshow piltide vahetamine

// Massiiv kõikide slaidide andmetega
const slides = [
    {
      src: "https://imageproxy.wolt.com/menu/menu-images/5e69dea92b19b4620a2b633e/c1b15816-d65a-11eb-99b4-5abcf37fdda0_bolt___has_032021_011.jpeg?w=960",
      name: "Kebab"
    },
    {
      src: "https://imageproxy.wolt.com/menu/menu-images/5e69dea92b19b4620a2b633e/80ea30fa-d4f7-11eb-93f6-b6151540baf2_bolt___has_032021_088.jpeg?w=600",
      name: "Döner box"
    },
    {
      src: "https://imageproxy.wolt.com/menu/menu-images/63e2011cae3e6dfd86d30a9c/9392208a-d3b7-11ed-8e05-c64e62585cf9_eyw_1355.jpeg?w=600",
      name: "Kebabi komplekt"
    },
    {
      src: "https://imageproxy.wolt.com/menu/menu-images/60115424aef0bc1c83792d1e/4e9b2f92-931f-11eb-bc5f-665607b03c20_bolt___has_032021_034.jpeg?w=600",
      name: "Kebabi vaagen"
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
