let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2");
let form3 = document.getElementById("form3");
let next1 = document.getElementById("next1");
let next2 = document.getElementById("next2");
let prev1 = document.getElementById("prev1");
let prev2 = document.getElementById("prev2");
let progress = document.getElementById("progress");

next1.onclick = () => {
  form1.style.left = "-450px";
  form2.style.left = "40px";
  progress.style.width = "240px";
};

prev1.onclick = () => {
  form1.style.left = "40px";
  form2.style.left = "450px";
  progress.style.width = "120px";
};

next2.onclick = () => {
  form2.style.left = "-450px";
  form3.style.left = "40px";
  progress.style.width = "360px";
};

prev2.onclick = () => {
  form2.style.left = "40px";
  form3.style.left = "450px";
  progress.style.width = "240px";
};
