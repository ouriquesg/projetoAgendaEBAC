console.log("Programa iniciado com sucesso!");
const form = document.getElementById('form-Agenda');
    let linhas = '';
form.addEventListener('submit', function(e){
    e.preventDefault();
    
    adicionaContato();
    attLista();
});
function adicionaContato() {
    const inputName = document.getElementById('name');
    const inputEmail = document.getElementById('email');
    const inputPhone = document.getElementById('phone');

    let linha = '<tr>';
    linha += `<td>${inputName.value}</td>`;
    linha += `<td>${inputEmail.value}</td>`;
    linha += `<td>${inputPhone.value}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputName.value = '';
    inputEmail.value = '';
    inputPhone.value = '';
}
function attLista() {
    const corpoTable = document.querySelector('tbody');
    corpoTable.innerHTML = linhas;
}