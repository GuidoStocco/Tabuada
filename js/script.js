// Seleção de elementos
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicatorInput = document.querySelector("#multiplicator");
const multiplicationTable = document.querySelector(".multiplication-operation");
const multiplicationTitle = document.querySelector(".multiplication-title span")



// funções
const creatTable = (number, multiplicatorNumber) => {

    multiplicationTable.innerHTML = "";

    for(i = 1; i <= multiplicatorNumber; i++){
        const result = number * i;

        const template = `<div class="row">
            <div class="operation">${number} x ${i} = </div>
            <div class="result">${result}</div>
            </div>`;

            const parser = new DOMParser();

            const htmlTemplate = parser.parseFromString(template, "text/html");

            const row = htmlTemplate.querySelector(".row");

            multiplicationTable.appendChild(row)
    }

    multiplicationTitle.innerText = number;

}



// eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;
    const multiplicatorNumber = +multiplicatorInput.value;

    if(!multiplicationNumber || !multiplicatorNumber){
        return
    }

    creatTable(multiplicationNumber, multiplicatorNumber);
});