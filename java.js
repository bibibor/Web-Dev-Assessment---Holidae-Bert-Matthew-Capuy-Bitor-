
/*SMOOTH SCROLL NAVIGATION*/
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e){
    const target = this.getAttribute('href');
    if(target.startsWith("#")){
      e.preventDefault();
      document.querySelector(target).scrollIntoView({
        behavior:'smooth'
      });
    }
  });
});


/*ACTIVE NAVBAR LINK ON SCROLL*/
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if(scrollY >= sectionTop - 250){
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if(link.getAttribute("href") === "#" + current){
      link.classList.add("active");
    }
  });
});

/*NAVBAR BACKGROUND CHANGE ON SCROLL*/
const navbar = document.querySelector("nav");
window.addEventListener("scroll", () => {

  if(window.scrollY > 100){
    navbar.style.padding = "18px 45px";
    navbar.style.backdropFilter = "blur(16px)";
    navbar.style.boxShadow =
    "0 10px 30px rgba(0,0,0,0.25)";
  }
  else{
    navbar.style.padding = "22px 45px";
    navbar.style.boxShadow =
    "0 10px 30px rgba(0,0,0,0.2)";
  }
});


/*PACKAGE BUTTON POPUP*/
document.querySelectorAll(".package-btn").forEach(button => {
  button.addEventListener("click", function(e){
    e.preventDefault();
    alert(
      "Booking system coming soon ✈️"
    );
  });
});

/*GALLERY IMAGE CLICK ZOOM*/
document.querySelectorAll(".gallery-item img")
.forEach(image => {
  image.addEventListener("click", () => {
    image.classList.toggle("zoomed");
  });
});

/*ABOUT FEATURE HOVER SOUND EFFECT*/
document.querySelectorAll(".feature").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform =
    "translateY(-10px) scale(1.05)";
  });
  card.addEventListener("mouseleave", () => {
    card.style.transform =
    "translateY(0px) scale(1)";
  });
});

/*FADE IN SECTIONS ON SCROLL*/
const fadeElements =
document.querySelectorAll(
  ".card, .gallery-item, .learn-box, .feature"
);

const observer =
new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

fadeElements.forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});

/*HERO BUTTON GLOW EFFECT*/
const heroBtn = document.querySelector(".btn");
setInterval(() => {
  heroBtn.classList.toggle("glow");
}, 1200);


/*RANDOM PACKAGE TAG COLORS*/
const tags =
document.querySelectorAll(".package-tag");
const colors = [
  "#ff4d6d",
  "#8d4bff",
  "#00b894",
  "#ff9f1c"
];
tags.forEach(tag => {
  const randomColor =
  colors[Math.floor(Math.random() * colors.length)];
  tag.style.background = randomColor;
});


/*LIVE CLOCK IN FOOTER*/
const footer = document.querySelector("footer");
const clock = document.createElement("p");
clock.style.marginTop = "10px";
footer.appendChild(clock);
function updateClock(){
  const now = new Date();
  clock.innerHTML =
  "Local Time: " +
  now.toLocaleTimeString();
}

setInterval(updateClock, 1000);
updateClock();

/*SIMPLE TYPING EFFECT*/
const heroTitle =
document.querySelector(".hero-content h2");
const text =
heroTitle.innerText;
heroTitle.innerText = "";
let index = 0;

function typeText(){
  if(index < text.length){
    heroTitle.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeText, 70);
  }
}

typeText();
