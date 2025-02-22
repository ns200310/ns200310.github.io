document.addEventListener("DOMContentLoaded", function () {
    let typetext = new TypeIt("#typewriter", {
        loop: true,
    });

    typetext.type("Fullstack Developer!").pause(2000).delete(20).type("AI Engineer!").pause(2000).delete(12).type("Entrepuneur!").pause(2000).delete(12).go();
    
  });
