let cafe = document.getElementById('coffee')
let fundo = document.getElementById('fundo-verde')
let transparente = document.getElementById('frappuccino-transparent')
let texto = document.getElementById('frappuccino-text')
let botoes = document.getElementById('botoes')
let direito = document.getElementById('direita')
let esquerdo = document.getElementById('esquerda')
let branco = document.getElementById('frappuccino-white')
let copo = document.getElementById('frappuccino')
let pink = document.getElementById('pink')
let abacate = document.getElementById('abacate')
let mocha = document.getElementById('mocha')
let cup = document.getElementById('cup')
let contador = 0
function esquerda() {
    contador--
    if (contador == 0) {
        cafe.src = '../imagens/frappuccino1.png'
        fundo.style.backgroundColor = '#0FA870'
        transparente.style.color = '#0FA870'
        direito.style.backgroundColor = '#0FA870'
        esquerdo.style.backgroundColor = '#0FA870'
        botoes.style.position = 'relative'
        botoes.style.bottom = '210px'
        texto.style.position = 'relative'
        texto.style.bottom = '330px'
        pink.style.backgroundColor = '#081A18'
    } else if (contador == 1) {
        cafe.src = '../imagens/pink3.png'
        fundo.style.backgroundColor = '#ff96e1'
        transparente.style.color = '#ff96e1'
        direito.style.backgroundColor = '#ff96e1'
        esquerdo.style.backgroundColor = '#ff96e1'
        transparente.style.textShadow = '-5px 2px 1px #ffffff'
        branco.style.color = '#ffffff'
        botoes.style.position = 'relative'
        botoes.style.bottom = '150px'
        texto.style.position = 'relative'
        texto.style.bottom = '275px'
        copo.style.position = 'relative'
        copo.style.bottom = '1740px'
        pink.style.backgroundColor = '#ff96e1'
        abacate.style.backgroundColor = '#081A18'
    } else if (contador == 2) {
        cafe.src = '../imagens/abacate3.png'
        fundo.style.backgroundColor = '#ffffff'
        transparente.style.textShadow = '-5px 2px 1px #0FA870'
        transparente.style.color = '#ffffff'
        branco.style.color = '#0FA870'
        direito.style.backgroundColor = '#ffffff'
        esquerdo.style.backgroundColor = '#ffffff'
        botoes.style.position = 'relative'
        botoes.style.bottom = '130px'
        texto.style.position = 'relative'
        texto.style.bottom = '260px'
        copo.style.position = 'relative'
        copo.style.bottom = '1720px'
        abacate.style.backgroundColor = '#ffffff'
        mocha.style.backgroundColor = '#081A18'
    }else if (contador == 3) {
        cafe.src = '../imagens/mocha1.png'
        fundo.style.backgroundColor = '#0FA870'
        transparente.style.color = '#0FA870'
        direito.style.backgroundColor = '#0FA870'
        esquerdo.style.backgroundColor = '#0FA870'
        transparente.style.textShadow = '-5px 2px 1px #ffffff'
        branco.style.color = '#ffffff'
        botoes.style.position = 'relative'
        botoes.style.bottom = '150px'
        texto.style.position = 'relative'
        texto.style.bottom = '270px'
        copo.style.position = 'relative'
        copo.style.bottom = '1820px'
        mocha.style.backgroundColor = '#985100'
        cup.style.backgroundColor = '#081A18'

    }
}
function direita(){
    contador++
    if (contador == 1) {
        cafe.src = '../imagens/pink3.png'
        fundo.style.backgroundColor = '#ff96e1'
        transparente.style.color = '#ff96e1'
        direito.style.backgroundColor = '#ff96e1'
        esquerdo.style.backgroundColor = '#ff96e1'
        botoes.style.position = 'relative'
        botoes.style.bottom = '150px'
        texto.style.position = 'relative'
        texto.style.bottom = '275px'
        pink.style.backgroundColor = '#ff96e1'
    } else if (contador == 2){
        cafe.src = '../imagens/abacate3.png'
        fundo.style.backgroundColor = '#ffffff'
        transparente.style.textShadow = '-5px 2px 1px #0FA870'
        transparente.style.color = '#ffffff'
        branco.style.color = '#0FA870'
        direito.style.backgroundColor = '#ffffff'
        esquerdo.style.backgroundColor = '#ffffff'
        botoes.style.position = 'relative'
        botoes.style.bottom = '130px'
        texto.style.position = 'relative'
        texto.style.bottom = '260px'
        copo.style.position = 'relative'
        copo.style.bottom = '1720px'
        pink.style.backgroundColor = '#081A18'
        abacate.style.backgroundColor = '#ffffff'
    } else if (contador == 3) {
        cafe.src = '../imagens/mocha1.png'
        fundo.style.backgroundColor = '#985100'
        transparente.style.color = '#985100'
        direito.style.backgroundColor = '#985100'
        esquerdo.style.backgroundColor = '#985100'
        transparente.style.textShadow = '-5px 2px 1px #ffffff'
        branco.style.color = '#ffffff'
        botoes.style.position = 'relative'
        botoes.style.bottom = '150px'
        texto.style.position = 'relative'
        texto.style.bottom = '270px'
        copo.style.position = 'relative'
        copo.style.bottom = '1820px'
        abacate.style.backgroundColor = '#081A18'
        mocha.style.backgroundColor = '#985100'
        
    } else if (contador == 4) {
        cafe.src = '../imagens/cup1.png'
        fundo.style.backgroundColor = '#0FA870'
        transparente.style.color = '#0FA870'
        direito.style.backgroundColor = '#0FA870'
        esquerdo.style.backgroundColor = '#0FA870'
        transparente.style.textShadow = '-5px 2px 1px #ffffff'
        branco.style.color = '#ffffff'
        botoes.style.position = 'relative'
        botoes.style.bottom = '150px'
        texto.style.position = 'relative'
        texto.style.bottom = '270px'
        copo.style.position = 'relative'
        copo.style.bottom = '1820px'
        mocha.style.backgroundColor = '#081A18'
        cup.style.backgroundColor = '#0FA870'
    }
}