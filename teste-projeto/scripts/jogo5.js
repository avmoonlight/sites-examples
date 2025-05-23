function ativarBotao(botao) {
  botao.classList.add('ativo');
  botao.querySelector('span').innerText = 'Carregando...';

  setTimeout(() => {
    botao.querySelector('span').innerText = '✔️ Pronto!';
    botao.style.pointerEvents = 'none';
  }, 2000);
}
