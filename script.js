function converter() {
    let dinheiro = document.getElementById('moneytxt')

    if (dinheiro.value.length == 0) {
        alert('[ERRO]: Por favor, insira um número.')
    } else {
        if (dinheiro.value < 0) {
            alert('[ERRO]: Por favor, digite um valor positivo.')
        } else {
            valorTotal = dinheiro.value
            let vintecinco = Math.floor(valorTotal / 0.25)
            let sobra = valorTotal % 0.25

            let dez = Math.floor(sobra / 0.10)
            sobra = sobra % 0.10

            let cinco = Math.floor(sobra / 0.05)
            sobra = sobra % 0.05

            let um = Math.floor(sobra / 0.01)

            document.getElementById('resultado').innerHTML = 'Você tem ' + vintecinco + ' moedas de 25 centavos, ' + dez + ' moedas de 10 centavos, ' + cinco + ' moedas de 5 centavos e ' + um + ' moedas de 1 centavo.'
        }
    }
}