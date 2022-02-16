const rotations = ["|", "/", "-", "\\","|", "/", "-", "\\", "|"];

let timer = 100;
const redraw = '\r';

for(const position of rotations) {
  setTimeout(() => {
    process.stdout.write(redraw + position);
  }, timer+= 300);
};