const paragrafos = document.querySelector('.paragrafos');
const ps = paragrafos.querySelectorAll('p');

const styleBody = getComputedStyle(document.body);
const backgroundColorBody = styleBody.backgroundColor;
console.log(backgroundColorBody);

for (const p of ps) {
  console.log(p);
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = "#fff"
}
