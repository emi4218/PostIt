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


    afficher() {
        let monPostIt = document.createElement('div');
        monPostIt.classList.add('postIt');
        monPostIt.style.display = "fixed";
        monPostIt.style.top = this.y + "px";
        monPostIt.style.left = this.x + "px";
        monPostIt.style.width = this.largeur + "px";
        monPostIt.style.height = this.hauteur + "px";
        monPostIt.style.backgroundColor = this.couleur;
        monPostIt.innerHTML = "";
        document.appendChild(monPostIt);
    }
}