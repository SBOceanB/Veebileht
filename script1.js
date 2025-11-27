// Autor: Ayrton Rungi
// Fail: script1.js
// Funktsioon: Slideshow piltide vahetamine

// Massiiv kõikide slaidide andmetega
const slides = [
  {
    src: "https://scontent.ftll3-1.fna.fbcdn.net/v/t39.30808-6/490103111_1114412720718088_3574761563281129420_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=_Eia3RIZ190Q7kNvwGO1-I3&_nc_oc=AdmGlTjrF8TJk-ddPm49R7UuuheXKqBBW3E-u4Pr6BYZpYBUdxfmMJr3FdABb4qWsSlMoZlnMzVETEF6eo30Jw-2&_nc_zt=23&_nc_ht=scontent.ftll3-1.fna&_nc_gid=eK3BtBlfa4AZw8aB0EjU3A&oh=00_Afj3NUNswD-BjfkRNDimgt8k0O1p2GSlDdqKhIDy5SpfZQ&oe=692CFE41",
    name: "Valik ciabattasid"
  },
  {
    src: "https://www.matsimoka.ee/storage/images/_thumbs/pub_th2/img-6169_1.webp",
    name: "Tartu müügipunkt"
  },
  {
    src: "https://scontent.ftll3-2.fna.fbcdn.net/v/t39.30808-6/488463374_1108696324623061_2045851146742298865_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=q-qH6ut35NwQ7kNvwG2zfPL&_nc_oc=AdkOdLo0e1pPdFVfwYxIIEjeBUjItKCMWF79ODokyvT5pWFBEIJjwHOWUfrcXHAXGa5Xx4_FIYj08MQkg16z2Xw6&_nc_zt=23&_nc_ht=scontent.ftll3-2.fna&_nc_gid=frjxOa19xqFqXNVXwPLwEA&oh=00_AfiAfbj195c59ZPjJcVMl5MmaqS6Mr6iKqTGL3ArQDR0eA&oe=692D1E7B",
    name: "Trühvli-salaami ciabatta"
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
