/*document.getElementById('btn').addEventListener('click', (e)=>{
    e.preventDefault();
    const fullValue = document.getElementById('init-value').value;
    const percentValue = document.getElementById('percent-value').value/100;

    // Values to print:

    const total = fullValue - (fullValue*percentValue);

    document.getElementById('divSaida').innerHTML = total.toFixed(2);
})*/

document.getElementById('btn btn-increase').addEventListener('click', (e) => {
    e.preventDefault();
    let fullValue = document.getElementById('init-value').value;
    let percentValue = document.getElementById('percent-value').value / 100;

    fullValue = parseFloat(fullValue);
    percentValue = parseFloat(percentValue);


    // Values to print:

    if (fullValue && percentValue !== '') {
        const adictioalValue = (fullValue * percentValue);

        const total = (fullValue + adictioalValue);

        const divSaida = document.getElementById('divSaida');
        divSaida.removeAttribute('class', 'DNS');

        document.getElementById('divSaida').innerHTML = `Valor do aumento: ${adictioalValue}<br>  Valor final: ${total} `;


    }
    else {
        alert('Preencha todos os campos!');
    }
})


document.getElementById('btn-back').addEventListener('click', (e) => {
    e.preventDefault();
    window.history.back();
})





