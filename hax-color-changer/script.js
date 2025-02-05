let body = document.querySelector("body").style;

function makeId(length) {
  let result = "#";
  let characters = "ABCDEF123456789";
  for (let i = 0; i < length; i++)
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  return result;
}

function changeColor() {
  const text = document.querySelector("#hex");
  const color = makeId(6);

  text.innerText = color;
  body.backgroundColor = color;
}
