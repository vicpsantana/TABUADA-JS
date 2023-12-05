//Seleção de elemetos 
 //Formulário
  const multiplicationForm = document.querySelector("#multiplication-form");
  const numberInput = document.querySelector("#number");
  const multiplicationInput = document.querySelector("#multiplicator"); 
  const multiplicationTable = document.querySelector("#multiplication-operations");

  const multiplicationTitle = document.querySelector("#multiplication-title span")


//Funções
const creatTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = "";

    for(i = 1; i <=multiplicatorNumber; i++) {

        const result = number * i;

        const template = `<div class="row">
        <div class="operation">${number} x ${i} =</div>
        <div class="result">${result}</div>
        </div>`; /*``vai poder carregar o html*/
        
        const parser = new DOMParser() /*Esse objeto nos permite transferir isso aqui para o HTML*/

        const htmlTemplate = parser.parseFromString(template, "text/html")  /*Transforma uma string em html*/

        const row = htmlTemplate.querySelector(".row")

        multiplicationTable.appendChild(row) /*Adicionando o elemnto filho na minha tabela "row" vai funcionar dentro do loop várias vezes, baseado na quantidade que colocamos em MULTIPLICATORNUMBER */

        multiplicationTitle.innerText = number;

    }

};

//Eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault(); /*Qundo clicar, enviar*/

    const multiplicationNumber = +numberInput.value;

    const multiplicatorNumber = +multiplicationInput.value;

    if (!multiplicationNumber || !multiplicatorNumber) return;  /*Caso ele não coloque um dos dois números que precisamos para a conta // não vai funcionar*/


    creatTable(multiplicationNumber, multiplicatorNumber);


   
});