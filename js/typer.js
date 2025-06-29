const sentence = "I love you Darshanaa. ";
const box = document.getElementById("typebox");
let i = 0;

function type() {
  box.textContent += sentence.charAt(i);
  i = (i + 1) % sentence.length;
  // after each full sentence, add a small pause
  if (i === 0) setTimeout(type, 600);
  else setTimeout(type, 80);  // typing speed (ms)
}
type();
