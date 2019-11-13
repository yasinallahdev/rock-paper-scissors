class QuartzParchmentShearsGame {
    constructor() {
        this.computerChoice = "";
        this.userWins = 0;
        this.computerWins = 0;
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
            return {outcome: "It was a tie", 
            "userChoice": userChoice, 
            "computerChoice": this.computerChoice, 
            "userWins": this.userWins, 
            "computerWins": this.computerWins};
        } else if(
            ( (userChoice === "Quartz") && (this.computerChoice === "Parchment") ) ||
            ( (userChoice === "Parchment") && (this.computerChoice === "Shears") ) ||
            ( (userChoice === "Shears") && (this.computerChoice === "Quartz") )
        ) {
            this.computerWins++;
            return {outcome: "You lose", 
                "userChoice": userChoice, 
                "computerChoice": this.computerChoice, 
                "userWins": this.userWins, 
                "computerWins": this.computerWins};
        } else {
            this.userWins++;
            return {outcome: "You win", 
            "userChoice": userChoice, 
            "computerChoice": this.computerChoice, 
            "userWins": this.userWins, 
            "computerWins": this.computerWins};
        }
    }
}

module.exports = new QuartzParchmentShearsGame();
