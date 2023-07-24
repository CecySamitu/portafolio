let app = document.getElementById('desc');

let typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Estudiante de Ingenieria en Computación | Desarrolladora de software Jr')
  .pauseFor(1000)
  .deleteChars(30)
  .pauseFor(1000)
  .start();
