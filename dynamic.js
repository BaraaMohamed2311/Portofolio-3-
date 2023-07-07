/*******************Burger*************************/
const burger = document.querySelector("#burger");
const ul = document.querySelector(".nav-ul");
let burger_mood = "closed";

/***********************************************************/

/******************Navlinks****************************************/

/***progress animation***/
let sections = Array.from(document.querySelectorAll(".section"));

let links = Array.from(document.querySelectorAll(".nav-links"));

let position;

/******************************************************************/

//            SKILLS
const skills = document.querySelector("#skills");

let skill_counter = 0;

let spans = Array.from(document.querySelectorAll(".progress-bar"));

/*************************************Burger*****************/

burger.addEventListener("click", () => {
  if (burger_mood === "closed") {
    ul.style = `opacity:1; pointer-events:all;`;
    burger_mood = "opened";
  } else if (burger_mood === "opened") {
    ul.style = `opacity:0; pointer-events:none;`;
    burger_mood = "closed";
  }
});

/***************************mainbtn**********************************/

/**************************Navlinks***********************************************************/

window.addEventListener("scroll", function () {
  let position = document.documentElement.scrollTop;

  sections.forEach(function (section) {
    let sectionTop = section.offsetTop;
    let sectionHeight = section.offsetHeight;
    let sectionId = section.getAttribute("id");

    if (
      position >= sectionTop - sectionHeight * 0.3 &&
      position < sectionTop + sectionHeight - sectionHeight * 0.3
    ) {
      links.forEach(function (link) {
        let linkHref = link.getAttribute("href");

        if (linkHref === `#${sectionId}`) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      });
    }
  });

  /*******************************Skils*********************************/

  spans.forEach(function (span) {
    if (position > skills.offsetTop - skills.offsetHeight * 0.9) {
      span.style.width = span.getAttribute("data-width");
    }
  });
});
