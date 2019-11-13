const buttons = document.querySelectorAll('button');
const resultParagraph = document.querySelector('#resultParagraph');
const userWins = document.querySelector('#userWins');
const computerWins = document.querySelector('#computerWins');

buttons.forEach(element => {
    element.addEventListener('click', () => {
        let userChoice;
        switch(element.id) {
            case "quartzButton":
                userChoice = "Quartz";
                break;
            case "parchmentButton":
                userChoice = "Parchment";
                break;
            case "shearsButton":
                userChoice = "Shears";
                break;
            default:
                alert("There was an error.");
                return;
        }
        fetch(`/api?userChoice=${userChoice}`)
            .then(res => res.json())
            .then(response => {
                console.table(response);
                resultParagraph.textContent = `${response["outcome"]}, because you chose ${response["userChoice"]} and the computer chose ${response["computerChoice"]}`;
                userWins.textContent = response["userWins"];
                computerWins.textContent = response["computerWins"];
            })
            .catch(err => console.log(err));
    })
});
