function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if(name == "" || email == "") {
    alert("Please fill all fields");
    return false;
  }
  alert("Message sent successfully!");
  return true;
}
let sections = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    let pos = sec.getBoundingClientRect().top;
    if(pos < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});
function toggleMode() {
  document.body.classList.toggle("dark");
}
let text = "Hi, I'm Kalyani 👋 Software Developer";
let i = 0;
function typeEffect() {
  if(i < text.length) {
    document.getElementById("type").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}
typeEffect();