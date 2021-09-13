window.addEventListener('load', () => {
    let plateau = document.getElementById('contain');

    let testPostIt1 = new PostIt(plateau, 200, 200, 300, 300, "#46e2ac", "Test test fonctionne s'il te plaît");
    testPostIt1.afficher();

    let testPostIt2 = new PostIt(plateau, 600, 600, 200, 200, "#e2f26a", "test 2");
    testPostIt2.afficher();
    testPostIt2.deplacer(500, 600);

    testPostIt1.agrandir(400, 400);
    testPostIt2.changerTexte("Allez, je crois en toi !");

})
