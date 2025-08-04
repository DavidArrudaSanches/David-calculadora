const botao= document.querySelector('.calculator__keys')

botao.forEach(btnop => {
    btnop.addEventListener('click', () => {
        const valorop = btnop.dataset.action

        console.log(valorop)
    })
})

lista = []

botao.forEach(btnnum => {
    btnnum.addEventListener('click', ()=>{
        const valornum = btnnum.dataset.number

        console.log(valornum)
        lista.push(valornum)
        console.log(lista)
    } )
})

const calculator = () => {

}
