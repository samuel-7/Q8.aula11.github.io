function previsaoDeChinchilas() {
    let n_chinchilas = parseInt(document.getElementById('numero_chin').value)
    let n_anos = parseInt(document.getElementById('numero_anos').value)
    let outPrevisao = document.getElementById('outPrevisao')
    resposta = ""

    for (let i = 1; i <= n_anos; i++) {

        resposta = `${i}º Ano: ${n_chinchilas} Chinchilas` + "\n"
        outPrevisao.textContent = resposta
        
        n_chinchilas = (n_chinchilas * 3)
        document.getElementById('outPrevisao').innerHTML = resposta
        
        
    }
    
}
let mostrar_previsao = document.getElementById('previsao')
mostrar_previsao.addEventListener('click', previsaoDeChinchilas)