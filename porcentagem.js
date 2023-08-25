/*document.getElementById('btn').addEventListener('click', (e)=>{
    e.preventDefault();
    const fullValue = document.getElementById('init-value').value;
    const percentValue = document.getElementById('percent-value').value/100;

    // Values to print:

    const total = fullValue - (fullValue*percentValue);

    document.getElementById('divSaida').innerHTML = total.toFixed(2);
})*/

document.getElementById('btn btn-descont').addEventListener('click', (e) => {
    e.preventDefault();
    const fullValue = document.getElementById('init-value').value;
    const percentValue = document.getElementById('percent-value').value / 100;

    // Values to print:

    if(fullValue && percentValue !==''){
        const descontValue = (fullValue * percentValue).toFixed(2);

        const total = (fullValue - descontValue).toFixed(2);

        const divSaida = document.getElementById('divSaida');
        divSaida.removeAttribute('class', 'DNS');

        document.getElementById('divSaida').innerHTML = `Valor do desconto: ${descontValue}<br>  Valor final: ${total} `;


     }
    else{
        alert('Preencha todos os campos!');
    }
})



document.getElementById('btn-back').addEventListener('click', (e) => {
    e.preventDefault();
    window.history.back();
})





