class PostIt {

    x;
    y;
    largeur;
    hauteur;
    couleur;
    texte;
    monPostIt;

    constructor(plateau, x, y, largeur, hauteur, couleur, texte) {

        this.plateau = plateau;
        this.x = x;
        this.y = y;
        this.largeur = largeur;
        this.hauteur = hauteur;
        this.couleur = couleur;
        this.texte = texte;
        this.monPostIt = document.createElement('div');
    }


    afficher() {
        this.monPostIt.classList.add('postIt');
        this.monPostIt.style.position = "fixed";
        this.monPostIt.style.top = this.y + "px";
        this.monPostIt.style.left = this.x + "px";
        this.monPostIt.style.width = this.largeur + "px";
        this.monPostIt.style.height = this.hauteur + "px";
        this.monPostIt.style.backgroundColor = this.couleur;
        this.monPostIt.innerHTML = this.texte;
        this.plateau.appendChild(this.monPostIt);
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