function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var resultado = document.querySelector('div#resultado')
    if (Number(fano.value) > ano){
        window.alert('[ERRO] Esse ano ainda não chegou!')
    }
    else if (fano.value.length == null || Number(fano.value) == 0){
        window.alert('Digite um ano para começar!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ' '
        var img = document.createElement('img') /*Possivel fazer no HTML também*/
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'homem'
            if (idade >= 0 && idade < 11){
                img.setAttribute('src', 'images/homem criança.jpg')
            } else if (idade < 21){
                img.setAttribute('src', 'images/homem jovem.jpg')
            } else if (idade <= 60){
                img.setAttribute('src', 'images/homem adulto.jpg')
            } else {
                img.setAttribute('src', 'images/homem velho.jpeg')
            }
        } else if (fsex[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade < 11){
                img.setAttribute('src', 'images/mulher criança.jpg')
            } else if (idade < 21){
                img.setAttribute('src', 'images/mulher jovem.png')
            } else if (idade <= 60){
                img.setAttribute('src', 'images/mulher adulta.jpg')
            } else {
                img.setAttribute('src', 'images/mulher velha.jpeg')
            }
        }
    
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resultado.appendChild(img) /*Adiciona o elemento criado no JS para o HTML*/
    }
}