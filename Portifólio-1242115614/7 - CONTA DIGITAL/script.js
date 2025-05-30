let saldo = 0.00;
let entradas = 0.00;
let saídas = 0.00;

function atualizarCampos() {
  document.getElementById('saldo').innerText = saldo.toFixed(2);
  document.getElementById('entradas').innerText = entradas.toFixed(2);
  document.getElementById('saidas').innerText = saídas.toFixed(2);
}

function abrirPIX() {
  document.getElementById('pix-form').style.display = 'block';
}

function alternarAba(aba) {
  document.querySelectorAll('.aba').forEach(el => el.classList.remove('ativo'));

  if (aba === 'receber') {
    document.querySelectorAll('.aba')[0].classList.add('ativo');
    document.getElementById('form-receber').style.display = 'block';
    document.getElementById('form-transferir').style.display = 'none';
  } else {
    document.querySelectorAll('.aba')[1].classList.add('ativo');
    document.getElementById('form-receber').style.display = 'none';
    document.getElementById('form-transferir').style.display = 'block';
  }
}

function mostrarIndisponivel() {
  alert('Sistema indisponível. Tente novamente mais tarde.');
}

function receber() {
  const cpf = document.getElementById('cpf-receber').value;
  const valor = parseFloat(document.getElementById('valor-receber').value);

  if (!cpf || !valor) {
    alert('Todos os campos devem ser preenchidos!');
    return;
  }

  saldo += valor;
  entradas += valor;
  atualizarCampos();
  adicionarTransacao('entrada', 'Transferência recebida', valor);
  alert('Transação realizada com sucesso');
}

function transferir() {
  const chave = document.getElementById('chave-transferir').value;
  const valor = parseFloat(document.getElementById('valor-transferir').value);

  if (!chave || !valor) {
    alert('Todos os campos devem ser preenchidos!');
    return;
  }

  if (valor > saldo) {
    alert('Saldo insuficiente!');
    return;
  }

  saldo -= valor;
  saídas += valor;
  atualizarCampos();
  adicionarTransacao('saída', 'Transferência enviada', valor);
  alert('Transação realizada com sucesso');
}

function adicionarTransacao(tipo, descricao, valor) {
  const data = new Date();
  const id = `${data.getFullYear()}${(data.getMonth() + 1).toString().padStart(2, '0')}${data.getDate().toString().padStart(2, '0')}${data.getHours().toString().padStart(2, '0')}${data.getMinutes().toString().padStart(2, '0')}${data.getSeconds().toString().padStart(2, '0')}`;

  const lista = document.getElementById('lista-transacoes');

  if (lista.children[0].innerText === 'Não constam transações') {
    lista.innerHTML = '';
  }

  const li = document.createElement('li');
  li.innerText = `${tipo.toUpperCase()} | ${descricao} | ${data.toLocaleString()} | Valor: R$${valor.toFixed(2)} | ID: ${id}`;
  lista.appendChild(li);
}

atualizarCampos();
