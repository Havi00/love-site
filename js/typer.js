const sentence = "I love you Darshanaa.";
const box = document.getElementById("typebox");
let i = 0;

function type() {
  box.textContent += sentence.charAt(i);
  i++;

  if (i === sentence.length) {      // sentence done
    box.textContent += "\n";        // new line
    i = 0;                          // restart index
  }
  setTimeout(type, 70);             // steady speed
}
type();
