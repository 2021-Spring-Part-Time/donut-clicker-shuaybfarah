class DonutMaker {
    constructor(numDonuts, numAutoClickers, numDonutMultiplier){
        this.numDonuts = numDonuts;
        this.numAutoClickers = numAutoClickers;
        this.numDonutMultiplier = numDonutMultiplier;
        this.autoClickerCost = 100;
        this.donutMultiplierCost = 10;
    }

    addDonut(){
       this.numDonuts += Math.round(this.donutPerClick());
    }

    addAutoClicker() {
        if (this.numDonuts >= this.autoClickerCost) {
            this.numAutoClickers++;
            this.numDonuts -= this.autoClickerCost;
            this.autoClickerCost *= 1.1;
            this.autoClickerCost = Math.round(this.autoClickerCost);
        }
    }

    activateAutoClickers()   {
        for(let i=0; i < this.numAutoClickers; i++){
            this.addDonut();
        }
    }
    

    addDonutMultiplier() {
        if(this.numDonuts >= this.donutMultiplierCost){
            this.numDonutMultiplier++;
            this.numDonuts -= this.donutMultiplierCost;
            this.donutMultiplierCost *= 1.1;
            this.donutMultiplierCost = Math.round(this.donutMultiplierCost);
        }
    }

    donutPerClick() {
        return Math.pow(1.2, this.numDonutMultiplier)
    }

    updateDonutClickCount() {
        this.donutPerClick();
    }

    // updateDonutClickValue(){
    //     return this.numDonutMultiplier;
    // }
}

export default DonutMaker;