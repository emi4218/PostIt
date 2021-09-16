let numPostIt = -1;
let tabPostIt = [];
// let action = "";

window.addEventListener('load', () => {
    let plateau = document.getElementById('contain');

    // let testPostIt1 = new PostIt(plateau, 1, 300, 300, 300, 300, "#46e2ac", "Test test fonctionne s'il te plaît");
    // testPostIt1.afficher();

    // let testPostIt2 = new PostIt(plateau, 2, 600, 600, 200, 200, "#e2f26a", "test 2");
    // testPostIt2.afficher();
    // testPostIt2.deplacer(500, 600);

    // testPostIt1.agrandir(400, 400);
    // testPostIt2.changerTexte("Allez, je crois en toi !");


    document.addEventListener("mousemove", souris)
    function souris(event) {
        // console.log(event);
        if (numPostIt != -1) { // si le post-it existe (différent de -1), on le déplace selon les coordonnées (clientx et y de la souris)
            tabPostIt[numPostIt].deplacer(event.clientX, event.clientY);
        }
    }

    document.getElementById('stockage').addEventListener('click', event => {
        console.log('ajout post-it')
        tabPostIt.push(new PostIt(plateau, tabPostIt.length)); // push ajoute un élément dans le tableau
        tabPostIt[tabPostIt.length - 1].afficher(plateau); // on met -1 parce qu'après le push, le tableau vaut 1 mais le tableau commence à 0
    })

    document.addEventListener('click', () => { // pour pouvoir cliquer à nouveau quand on a déplacé le post-it
        numPostIt = -1;
    })


})
