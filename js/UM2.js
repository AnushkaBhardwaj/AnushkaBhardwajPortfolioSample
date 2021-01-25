//Movement Animation to happen
const card = document.querySelector(".card");
const container = document.querySelector(".container");
const Ldashboard = document.querySelector(".Ldashboard");
//Items
const title = document.querySelector(".title");
const photo = document.querySelector(".photo img");
const contact = document.querySelector(".contact");
const description = document.querySelector(".info h3");
const buttons = document.querySelector(".buttons");
const user = document.querySelector(".user");
const links = document.querySelector(".links");
const name = document.querySelector(".name");
//const Ldashboard = document.querySelector(".Ldashboard");


//Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  //let xaxis = (window.innerWidth / 2 - e.pageX) / 100;
  //let yaxis = (window.innerHeight / 2 - e.pageY) / 100;
  //Ldashboard.style.transform = `rotateY(${xaxis}deg) rotateX(${yaxis}deg)`;

});
//Animate In
container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
  //xLdashboard.style.transition = "none";
  //Popout
  title.style.transform = "translateZ(115px)";
  photo.style.transform = "translateZ(100px)";
  contact.style.transform = "translateZ(60px)";
  description.style.transform = "translateZ(95px)";
  buttons.style.transform = "translateZ(80px)";
  user.style.transform = "translateZ(95px)";
  links.style.transform = "translateZ(60px)";
  name.style.transform = "translateZ(95px)";
  //Ldashboard.style.transform = "translateZ(25px)";
  
});
//Animate Out
container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  //Ldashboard.style.transition = "all 0.5s ease";
  //Ldashboard.style.transform = `rotateY(0deg) rotateX(0deg)`;

  //Popback
  title.style.transform = "translateZ(0px)";
  photo.style.transform = "translateZ(0px)";
  description.style.transform = "translateZ(0px)";
  buttons.style.transform = "translateZ(0px)";
  contact.style.transform = "translateZ(0px)";
  user.style.transform = "translateZ(0px)";
  links.style.transform = "translateZ(0px)";
  name.style.transform = "translateZ(0px)";  
  //Ldashboard.style.transform = "translateZ(0px)";
  
});