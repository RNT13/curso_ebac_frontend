const form = document.getElementById('numberForm');
const contato = [];
const ddi = [];
const numero = [];

let linhas = '';

form.addEventListener('submit', function(event){
    event.preventDefault();

    adicionaLinha();
    atualizaTabela();
})

//adiciona linhas
function adicionaLinha() {
    const inputNomeContato = document.getElementById('nomeContato');
    const inputddiContato = document.getElementById('ddiContato');
    const inputtelefoneContato = document.getElementById('telefoneContato');

    if(contato.includes(inputNomeContato.value)) {
        alert(`O nome: ${inputNomeContato.value} já existe`);
    } else {
        contato.push(inputNomeContato.value);
        ddi.push(inputddiContato.value);
        numero.push(inputtelefoneContato.value);

        let linha = `<tr>`;
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputddiContato.value}</td>`;
        linha += `<td>${inputtelefoneContato.value}</td>`;
        linha += `<td><img src="../imagens/adicionado.png" alt="icone de a dicionado" /></td>`;
        linha += `</tr>`;

        linhas += linha;

        document.getElementById('totalContatos').textContent = contato.length;
    }

    inputNomeContato.value = '';
    inputddiContato.value = '';
    inputtelefoneContato.value = '';
}

//atualiza tabela
function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}