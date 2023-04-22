let email1 = 'cerqueiraclaudemir@yahoo.com.br'
let tel1 = '(11) 995092407'

let message = document.getElementById('contact')

message.addEventListener('click', function() {
    let contatos = 'Email: ' +  email1
    let contatos2 = 'Celular:' + tel1
    alert(contatos)
    alert(contatos2)


})
