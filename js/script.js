const quartzButton = document.querySelector("#quartzButton");
const parchmentButton = document.querySelector("#parchmentButton");
const shearsButton = document.querySelector("#shearsButton");

quartzButton.addEventListener('click', () => {
    alert("Quartz");
});

parchmentButton.addEventListener('click', () => {
    alert("Parchment");
})

shearsButton.addEventListener('click', () => {
    alert("Shears");
})
