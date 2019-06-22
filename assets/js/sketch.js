function setup() {
    createCanvas(windowWidth, windowHeight);
    background(40);
    noLoop();

    this.moon();

    var numOfTrees = random(15, 21);

    for(var i = 0; i < numOfTrees; i++) {
        var initialPos = random(0, windowWidth);
        var a = createVector(initialPos, height);
        var b = createVector(initialPos, height - random(50, 300));
        var root = new Branch(a, b, 10);

        var tree = new Tree(root);
        tree.grow();
    }
}

function draw() {}

function moon() {
    var size = random(60, 120);
    var posX = random(90, windowWidth);
    var posY = random(80, 160);

    smooth();
    noStroke();
    fill(255,0,0);
    ellipse(posX, posY, size + 5, size + 5);
    filter( BLUR, 6 );
    stroke(0);
    fill(255,255,0);
    ellipse(posX, posY, size, size);
}