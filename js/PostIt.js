class PostIt {

    x;
    y;
    largeur;
    hauteur;
    couleur;
    texte;

    constructor(x, y, largeur, hauteur, couleur, texte) {
        this.x = x;
        this.y = y;
        this.largeur = largeur;
        this.hauteur = hauteur;
        this.couleur = couleur;
        this.texte = texte;
    }


    affiche() {
        let monPostIt = document.createElement('div');
        monPostIt.classList.add('postIt');
        monPostIt.style.gridArea = this.x + "/" + this.y;
        document.appendChild(monPostIt);
    }
}