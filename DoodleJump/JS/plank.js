class Plank extends Canvas{
    constructor(x, y, img) {
        super();
        this.height = 20;
        this.width = 150;

        this.x = x;
        this.y = y;


        this.img = img;
    }

    drawPlank() {
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    moveDown() {
        this.y += 200;
    }

}
