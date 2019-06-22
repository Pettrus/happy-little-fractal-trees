class Tree {
    constructor(branch) {
        this.branches = [];
        this.branches[0] = branch;
        this.length = 0;
    }

    async grow() {
        this.branches.push(this.branches[this.length].grow("left"));
        this.branches.push(this.branches[this.length].grow("right"));
    
        this.length++;
    
        var bifu = 0;
        var r = 2;
    
        if(this.branches[this.length].length() > 7)
            this.grow();
        else {
            for(var z = 0; z < this.branches.length; z++) {
                if(bifu == 0 || z == bifu) {
                    await this.branches[z].draw();
                    bifu += r;
                    r *= 2;
                }else {
                    this.branches[z].draw();
                }
            }
        }
    }
}