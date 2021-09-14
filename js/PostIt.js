class PostIt {

    x;
    y;
    largeur;
    hauteur;
    couleur;
    texte;
    monPostIt;

    constructor(plateau, num, x = 100, y = 100, largeur = 200, hauteur = 200, couleur = "#46e2ac", texte = "") {
        this.plateau = plateau;
        this.num = num; // id du post-it
        this.x = x;
        this.y = y;
        this.largeur = largeur;
        this.hauteur = hauteur;
        this.couleur = couleur;
        this.texte = texte;
        this.monPostIt = document.createElement('div'); // on créé la div
    }


    afficher() {
        this.monPostIt.classList.add('postIt'); // on met la classe postIt
        this.monPostIt.style.position = "fixed";
        this.monPostIt.style.top = this.y + "px";
        this.monPostIt.style.left = this.x + "px";
        this.monPostIt.style.width = this.largeur + "px";
        this.monPostIt.style.height = this.hauteur + "px";
        this.monPostIt.style.backgroundColor = this.couleur;
        this.monPostIt.innerHTML = this.texte;
        let menu = document.createElement('div');
        menu.classList.add('bottomMenu');
        this.monPostIt.appendChild(menu);
        let resize = document.createElement('i');
        resize.classList.add('fas', 'fa-expand-alt');
        menu.appendChild(resize);
        let edit = document.createElement('i');
        edit.classList.add('far', 'fa-edit');
        menu.appendChild(edit);
        let move = document.createElement('i');
        move.classList.add('fas', 'fa-hand-pointer');
        menu.appendChild(move);
        move.addEventListener('click', event => { // on met l'event click sur move (en gros, qd on clique sur l'icone hand-pointer)
            console.log("on a cliqué sur le post it " + this.num)
            if (numPostIt != this.num) { // si le numPostIt (déclaré à -1 dans l'index) est différent du numéro de post-it cliqué
                numPostIt = this.num; // numPostIt prend le numéro de post-it cliqué
            }
            else { // on relache le post it (puisqu'au reclick il n'est plus à -1 mais a pris la valeur du numéro du post-it)
                numPostIt = -1;
            }
            event.stopPropagation(); // pour éviter d'envoyer l'event au post-it et à la page, juste le laisser sur le curseur move
        })
        this.plateau.appendChild(this.monPostIt); // on ajoute la div au plateau
    }

    deplacer(x, y) {
        this.x = x;
        this.y = y;
        this.monPostIt.style.top = this.y + "px";
        this.monPostIt.style.left = this.x + "px";
    }

    agrandir(largeur, hauteur) {
        this.largeur = largeur;
        this.hauteur = hauteur;
        this.monPostIt.style.width = this.largeur + "px";
        this.monPostIt.style.height = this.hauteur + "px";
    }

    changerTexte(texte) {
        this.texte = texte;
        this.monPostIt.innerHTML = this.texte;
    }
}