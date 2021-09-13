window.addEventListener('load', () => {
    let plateau = document.getElementById('contain');

    let testPostIt1 = new PostIt(plateau, 200, 200, 300, 300, "green", "Test test fonctionne s'il te plaît");
    testPostIt1.afficher();

})
