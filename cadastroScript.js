$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: 'Seu Telefone'
    });

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            produtoDeInteresse: {
                required: false
            },
            menssagem: {
                required: true
            },
        },
        messages: {
            nome: 'Por favor insira o seu nome',
            telefone: 'Por favor insira o seu telefone',
            email: 'Por favor insira o seu E-mail',
            produtoDeInteresse: 'Por favor insira o seu produto de interesse',
            menssagem: 'Por favor insira o sua  mensagem',
        },
        submitHandler: function(form) {
            alert('Obrigado pelo Cadastro')
            refresh()
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem: ${camposIncorretos} campo incorretos`)
            }
        }
    })
});
