import { aluguel } from "./lista.js";

const dataRetirada = document.getElementById('dataRetirada')
const dataDevolucao = document.getElementById('dataDevolucao')
const botaoConfirmar = document.getElementById('botaoConfirmar')


console.log(aluguel.tipo)
    document.getElementById('tipoInfo').innerHTML = aluguel.tipo
            
    document.getElementById('nomeInfo').value = aluguel.nome

    document.getElementById('precoInfo').value = aluguel.preco




const mes31 = ['01', '03', '05', '07', '08', '10', '12']
const mes30 = ['04', '06', '09', '11']


let contadorDias = 0

botaoConfirmar.addEventListener('click', () => {
    const diaRetirada = dataRetirada.value[8] + dataRetirada.value[9]
    const mesRetirada = dataRetirada.value[5] + dataRetirada.value[6]

    const diaDevolucao = dataDevolucao.value[8] + dataDevolucao.value[9]
    const mesDevolucao = dataDevolucao.value[5] + dataDevolucao.value[6]

    if(mesDevolucao != mesRetirada){
        if(mes31.includes(mesRetirada)){
        contadorDias = (31 + Number(diaDevolucao)) - Number(diaRetirada)
        }
        else if(mes30.includes(mesRetirada)){
            contadorDias = (30 + Number(diaDevolucao)) - Number(diaRetirada)  
        }
        else{
            contadorDias = (28 + Number(diaDevolucao)) - Number(diaRetirada) 
        }
    }
    else{
        contadorDias = Number(diaDevolucao) - Number(diaRetirada)
    }

    const diasAluguel = document.querySelectorAll('.diasAluguel')

    diasAluguel.forEach((dia, index) => {
        dia.textContent = String(contadorDias)
    })

    let contadorPreco

    contadorPreco = contadorDias * Number(listPreco[indexacao].textContent)

    precoAluguel.forEach((preco, index) => {
        preco.textContent = contadorPreco.toFixed(2).replace('.', ',')
    })
})