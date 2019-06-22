class Branch {

    constructor(begin, end, weight) {
        this.begin = begin;
        this.end = end;
        this.weight = weight;
    }

    draw() {
        return new Promise((resolve) => {
            var stepX = (this.end.x - this.begin.x) / 10;
            var stepY = (this.end.y - this.begin.y) / 10;
            var animX = this.begin.x;
            var animY = this.begin.y;
            var i = 0;

            var timer = setInterval(() => {
                strokeWeight(this.weight);

                if(this.weight > 0.9)
                    stroke(104, 72, 17);
                else
                    stroke(104, 178, 96);

                line(animX, animY, animX + stepX, animY + stepY);
                animX += stepX;
                animY += stepY;

                i++;

                if(i == 10) {
                    clearInterval(timer);
                    resolve();
                }
            }, 60);
        })
    }

    grow(dir) {
        var direction = p5.Vector.sub(this.end, this.begin);
        direction.rotate((dir == "right" ? PI : -PI) / random(5, 14));
        direction.mult(random(0.5, 0.87));

        var newEnd = p5.Vector.add(this.end, direction);

        return new Branch(this.end, newEnd, this.weight * 0.7);
    }

    length() {
        return p5.Vector.dist(this.begin, this.end);
    }
}