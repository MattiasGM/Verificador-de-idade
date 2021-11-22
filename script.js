verif.addEventListener('click', verificar)

function verificar() {

    var data = new Date()
    var ano = data.getFullYear()
    var txtano = window.document.querySelector('input#txtano')
    var res = window.document.querySelector('div#res')

    if(txtano.value.length == 0 || Number(txtano.value) > ano) {
        window.alert('Dados Inválidos')
        res.innerHTML = 'Dados inválidos, confirme os dados e tente novamente'
    } else {

        var sexo = window.document.getElementsByName('radsex')
        var genero = ''
        var idade = ano - Number(txtano.value)
        var img = window.document.createElement('img')

        if(sexo[0].checked) {
            genero = 'Masculino'
            if(idade >= 0 && idade < 12) {
                //bebe
                img.setAttribute('src', 'imagens/bebeh.png')
            } else if(idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/homem.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso.png')
            }
        } else if(sexo[1].checked) {
            genero = 'Feminino'
            if(idade >= 0 && idade < 12) {
                //bebe
                img.setAttribute('src', 'imagens/bebem.png')
            } else if(idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/mulher.png')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idosa.png')
            }
        }
        res.innerHTML = `Gênero: <p>${genero} de ${idade} ano(s)</p>`
        res.appendChild(img)

    }
}