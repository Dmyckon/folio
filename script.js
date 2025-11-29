




function lightView() {
    document.getElementById("body").style.backgroundColor = "#e6eff7"
    document.getElementById("profile").style.backgroundColor = "white"
    document.getElementById("one").style.color = "black"
    document.getElementById("two").style.color = "black"
    document.getElementById("three").style.color = "black"
    document.getElementById("four").style.color = "black"
    document.getElementById("note").style.color = "gray"
    document.getElementById("light").style.display = "none"
    document.getElementById("dark").style.display = "block"
}

function darkView() {
    document.getElementById("body").style.backgroundColor = "black"
    document.getElementById("profile").style.backgroundColor = "lightgray"
    document.getElementById("one").style.color = "white"
    document.getElementById("two").style.color = "white"
    document.getElementById("three").style.color = "white"
    document.getElementById("four").style.color = "white"
    document.getElementById("note").style.color = "gray"
    document.getElementById("light").style.display = "block"
    document.getElementById("dark").style.display = "none"
}


// make my div slide from left to right

const elements = document.querySelectorAll(".scroll-slide");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {
      // Slide in
      entry.target.classList.add("opacity-100", "translate-x-0");
      entry.target.classList.remove("opacity-0", "translate-x-10");
    } else {
      // WAIT before resetting (prevents instant snap)
      setTimeout(() => {
        entry.target.classList.remove("opacity-100", "translate-x-0");
        entry.target.classList.add("opacity-0", "translate-x-10");
      }, 200); // delay helps animation stay smooth
    }

  });
}, { threshold: 0.3 });

elements.forEach(el => observer.observe(el));


// another code- to make my nav slide

 document.getElementById("box").classList.add(
      "opacity-100",
      "[animation:slide-right_0.9s_ease-out_forwards]"
    );

// the bounce code
   const move = document.getElementById("move");

  // check if element is visible in viewport
  function isVisible(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
  }

  // trigger the bounce
  function bounce() {
    if (!isVisible(move)) return;

    // reset animation
    move.classList.remove("[animation:smallBounceOnce_0.4s_ease-out_forwards]");
    
    // force browser to notice the change
    void move.offsetWidth;
    
    // add animation class again
    move.classList.add("[animation:smallBounceOnce_0.4s_ease-out_forwards]");
  }
  // run on scroll and on page load
  //window.addEventListener("scroll", bounce);
  window.addEventListener("load", bounce);


// linking my whatsapp
  function sendClick() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let number = "2348071968229";

    let url = "https://wa.me/" + number + "?text="
      + "Name: " + encodeURIComponent(name) + "%0A"
      + "Email: " + encodeURIComponent(email) + "%0A"
      + "Message: " + encodeURIComponent(message);

    window.open(url, "_blank");
  }


  // make them scroll up

const scrollUpElements = document.querySelectorAll(".scroll-up");

const scrollUpObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Slide UP
      entry.target.classList.add("opacity-100", "translate-y-0");
      entry.target.classList.remove("opacity-0", "translate-y-10");
    } else {
      // Smooth reset so it can animate again
      setTimeout(() => {
        entry.target.classList.remove("opacity-100", "translate-y-0");
        entry.target.classList.add("opacity-0", "translate-y-10");
      }, 200);
    }
  });
}, { threshold: 0.3 });

scrollUpElements.forEach(el => scrollUpObserver.observe(el));



// make div scroll from up to down
const scrollDivs = document.querySelectorAll(".scroll-div");

function animateDivs() {
  scrollDivs.forEach(div => {
    const rect = div.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight - 50 && rect.bottom > 0) {
      // Div is in viewport → animate down
      div.classList.add("translate-y-0", "opacity-100");
      div.classList.remove("-translate-y-24", "opacity-0");
    } else {
      // Div is out of viewport → reset above to animate again
      div.classList.remove("translate-y-0", "opacity-100");
      div.classList.add("-translate-y-24", "opacity-0");
    }
  });
}

// Trigger on scroll
window.addEventListener("scroll", animateDivs);
// Trigger on load
window.addEventListener("load", animateDivs);


