export default function autenticar(requisicao,resposta){
  const usuario = requisicao.body.usuario;
  const senha = requisicao.body.senha;
  if(usuario == 'admin' && senha == 'admin'){
    resposta.redirect('/menu.html');
  }
  else {
    resposta.write('<p>Usuário ou senha inválidos</p>');
    resposta.write('<a href = "/login.html">Voltar</a>');
    resposta.end();
  }
}