class Game {
    constructor() {
        this.computerChoice = "";
    }
    generateComputerChoice() {
        switch(Math.floor(Math.random() * 3)) {
            case 0: 
                this.computerChoice = "Quartz";
                break;
            case 1:
                this.computerChoice = "Parchment";
                break;
            case 2:
                this.computerChoice = "Shears";
                break;
            default:
                console.log("Something's gone wrong!");
                return null;
        }
    }
    checkWhoWins(userChoice) {
        if(userChoice === this.computerChoice) {
            return {outcome: "it was a tie", "userChoice": userChoice, "computerChoice": this.computerChoice};
        } else if(
            ( (userChoice === "Quartz") && (this.computerChoice === "Parchment") ) ||
            ( (userChoice === "Parchment") && (this.computerChoice === "Shears") ) ||
            ( (userChoice === "Shears") && (this.computerChoice === "Quartz") )
        ) {
            return {outcome: "you lose", "userChoice": userChoice, "computerChoice": this.computerChoice};
        } else {
            return {outcome: "you win", "userChoice": userChoice, "computerChoice": this.computerChoice};
        }
    }
}

module.exports = {
    game = new Game()
}
