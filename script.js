import { aluguel } from "./lista.js"

const listaImg = [
    'https://images.unsplash.com/photo-1673121414328-52eff37bc6d0?w=600&h=400&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1591047139334-337807f2b3e5?w=600&h=400&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1620802051782-725fa33db067?w=600&h=400&fit=crop&auto=format',
    'https://images.unsplash.com/photo-1499115026740-47ec7a0d026e?w=600&h=400&fit=crop&auto=format']

const cardImg = document.querySelectorAll('.imgBike')

const botaoBike = document.querySelectorAll('.botaoBike')
console.log(botaoBike)
const bikeSelecionada = document.getElementById('bikeSelecionada')

const listTipo = document.querySelectorAll('.smallCard')
const listNome = document.querySelectorAll('.h2Card')
const listPreco = document.querySelectorAll('.precoCard')

const preco = document.getElementById('precoAluguel')
const precoAluguel = document.querySelectorAll('.precoAluguel')

let indexacao 

cardImg.forEach((card, index) => {
    card.style.backgroundImage = `url(${listaImg[index]})`
})

botaoBike.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        if(botao.textContent == 'Indisponível'){
            alert('Este item está indisponível')
            document.querySelector('.cardPreco').style.display = 'none'
        }
        else{
            bikeSelecionada.setAttribute('src', `${listaImg[index]}`)

            aluguel.tipo = listTipo[index].textContent
            
            aluguel.nome = listNome[index].textContent

            aluguel.preco = listPreco[index].textContent

            preco.textContent = listPreco[index].textContent

            precoAluguel.forEach((preco, index) => {
                preco.textContent = ''
            })

            document.querySelector('.cardPreco').style.display = 'flex'
        }
        indexacao = index
    })
})

console.log(aluguel)