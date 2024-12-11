let skillSection = document.getElementById("skill-section");
let skill = document.getElementById("skill");
let project = document.getElementById("projectsBtn");
let projectCard= document.getElementById("projects");
let light = document.getElementById("light");
let body = document.getElementById("main");
let nav = document.getElementById("nav");
let section = document.getElementById("section");
let active = document.querySelector(".active");
let dark = document.getElementById("dark");
let socialIcons = document.querySelectorAll("#social-icons a");
let projectLink = document.querySelector(".project-link p");

function gsapAnimation(){
    let s1 = gsap.timeline();
    s1.from(".g", {
        y:-50,
        duration:1,
        delay:0.5,
        opacity:0,
        stagger:0.1,
    })
}


let isActive = false;
dark.addEventListener("click", () => {
    isActive = true;
    body.style.backgroundColor = "rgb(6 3 2)";
    nav.style.backgroundColor = "rgb(6 3 2)";
    nav.style.color = "hsl(14, 100%, 57%);";
    body.style.color = "white";
    section.style.backgroundColor="rgb(33 17 12)"
    dark.style.display = "none";
    light.style.display = "inherit";
    light.style.color = "hsl(14, 100%, 57%)"
    skill.style.backgroundColor = "black";
    project.style.backgroundColor = "inherit";
    socialIcons.forEach(a => {
        a.style.color = "hsl(14, 100%, 57%)";
      });
    gsapAnimation();
})

light.addEventListener("click", () => {
    isActive = !isActive;
    body.style.backgroundColor = "white";
    nav.style.backgroundColor = "white";
    section.style.backgroundColor="hsl(0, 0%, 78%)";
    nav.style.color = "black";
    body.style.color = "black";
    dark.style.display = "inherit";
    light.style.display = "none";
    skill.style.backgroundColor = "white";
    project.style.backgroundColor = "inherit";
    gsapAnimation();

})

project.addEventListener("click", (e) => {
    skillSection.style.display = "none";
    skill.classList.remove("active");
    project.classList.add("active");
    projectCard.style.display="inherit";
    
    if(isActive==false){
        skill.style.backgroundColor = "inherit";
        project.style.backgroundColor = "white";
    }
    else{
        skill.style.backgroundColor = "inherit";
        project.style.backgroundColor = "black";
    }
})

skill.addEventListener("click", () => {
    projectCard.style.display="none";
    project.classList.remove("active");
    skill.classList.add("active");
    skillSection.style.display = "inherit";
    project.style.backgroundColor = "inherit";
    skill.style.backgroundColor = "white";
    if(isActive==false){
        skill.style.backgroundColor = "white";
        project.style.backgroundColor = "inherit";
    }
    else{
        skill.style.backgroundColor = "black";
        project.style.backgroundColor = "inherit";
    }
})

gsapAnimation();




