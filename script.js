const singupBtn = document.querySelector(".signupBtn");
const loginBtn = document.querySelector(".loginBtn");
const moveBtn = document.querySelector(".moveBtn");
const start = document.querySelector(".start");
const modalForm = document.querySelector(".modalForm");
const wrapper = document.querySelector(".wrapper");
const can1 = document.querySelector(".can1");
const can2 = document.querySelector(".can2");
const singup = document.querySelector(".singup");
const login = document.querySelector(".login");

loginBtn.addEventListener("click", () => {
  moveBtn.classList.add("rightBtn");
  login.classList.add("loginForm");
  singup.classList.remove("singupForm");
  moveBtn.innerHTML = "Login";
});

singupBtn.addEventListener("click", () => {
  moveBtn.classList.remove("rightBtn");
  login.classList.remove("loginForm");
  singup.classList.add("singupForm");
  moveBtn.innerHTML = "Singup";
});

start.addEventListener("click", () => {
  wrapper.style.display = "flex";
});

can1.addEventListener("click", () => {
  wrapper.style.display = "none";
});

can2.addEventListener("click", () => {
  wrapper.style.display = "none";
});
