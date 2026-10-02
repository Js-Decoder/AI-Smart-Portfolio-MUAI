const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".nav");
const delBr404 = document.querySelector(
  ".Page-404__Main__Txt__description-404",
);
const boxErorr404 = document.querySelector(".Page-404__Main__Txt");
const widthScreen = screen.availWidth;
toggler.addEventListener("click", (e) => {
  navbar.classList.toggle("nav__expanded");
});
// if (widthScreen <= 812) {
//   addBr404Des();
// }
// function addBr404Des() {
//   let result = '';
//   result += `
//   <h5 class="Page-404__Main__Txt__Title">404</h5>
//     <p class="Page-404__Main__Txt__description-404">Well, something is not right here.<br>back to home!</p>`;
//   boxErorr404.innerHTML = result;
// }
