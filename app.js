function criptografar() {
  document.getElementById("imagem_nao_encontrada").style.display = "none";
  document.getElementById("resposta_consulta").style.display = "flex";
  document.getElementById("botao_copiar").style.display = "flex";
}

function descriptografar() {
  document.getElementById("imagem_nao_encontrada").style.display = "flex";
  document.getElementById("resposta_consulta").style.display = "none";
  document.getElementById("botao_copiar").style.display = "none";
}
