function criptografar() {
  const textoRequisicao = document
    .getElementById("textoRequisicao")
    .value.toLowerCase();

  if (textoRequisicao === "") {
    document.getElementsByClassName(
      "corpo__resultado__semTexto"
    )[0].style.display = "flex";
    document.getElementsByClassName(
      "corpo__resultado__comTexto"
    )[0].style.display = "none";
    document.getElementsByClassName(
      "corpo__resultado__caracteresInvalido"
    )[0].style.display = "none";
    return;
  }

  const regex = /[^\w\s]|_/g;

  if (regex.test(textoRequisicao)) {
    document.getElementsByClassName(
      "corpo__resultado__semTexto"
    )[0].style.display = "none";
    document.getElementsByClassName(
      "corpo__resultado__comTexto"
    )[0].style.display = "none";
    document.getElementsByClassName(
      "corpo__resultado__caracteresInvalido"
    )[0].style.display = "flex";
    return;
  }

  //Ao fazer consulta, ocultar a imagem padrao e depois colocar o resultado
  document.getElementsByClassName(
    "corpo__resultado__semTexto"
  )[0].style.display = "none";
  document.getElementsByClassName(
    "corpo__resultado__comTexto"
  )[0].style.display = "flex";
  document.getElementsByClassName(
    "corpo__resultado__caracteresInvalido"
  )[0].style.display = "none";

  //pega o texto do usuário

  //pegar o textoRequisicao e fazer as trocas
  /* 
    A letra "e" é convertida para "enter"
    A letra "i" é convertida para "imes"
    A letra "a" é convertida para "ai"
    A letra "o" é convertida para "ober"
    A letra "u" é convertida para "ufat" */

  const textoCriptografado = textoRequisicao
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

  //Resposta consulta
  document.getElementById("resposta_consulta").value = textoCriptografado;
}

function descriptografar() {
  const textoRequisicao = document
    .getElementById("textoRequisicao")
    .value.toLowerCase();

  if (textoRequisicao === "") {
    document.getElementsByClassName(
      "corpo__resultado__semTexto"
    )[0].style.display = "flex";
    document.getElementsByClassName(
      "corpo__resultado__comTexto"
    )[0].style.display = "none";
    document.getElementsByClassName(
      "corpo__resultado__caracteresInvalido"
    )[0].style.display = "none";
    return;
  }

  const regex = /[^\w\s]|_/g;

  if (regex.test(textoRequisicao)) {
    document.getElementsByClassName(
      "corpo__resultado__semTexto"
    )[0].style.display = "none";
    document.getElementsByClassName(
      "corpo__resultado__comTexto"
    )[0].style.display = "none";
    document.getElementsByClassName(
      "corpo__resultado__caracteresInvalido"
    )[0].style.display = "flex";
    return;
  }

  //Ao fazer consulta, ocultar a imagem padrao e depois colocar o resultado
  document.getElementsByClassName(
    "corpo__resultado__semTexto"
  )[0].style.display = "none";
  document.getElementsByClassName(
    "corpo__resultado__comTexto"
  )[0].style.display = "flex";
  document.getElementsByClassName(
    "corpo__resultado__caracteresInvalido"
  )[0].style.display = "none";

  //pegar o textoRequisicao e fazer as trocas
  /* 
    A letra "e" é convertida para "enter"
    A letra "i" é convertida para "imes"
    A letra "a" é convertida para "ai"
    A letra "o" é convertida para "ober"
    A letra "u" é convertida para "ufat" */

  const textoDescriptografado = textoRequisicao
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

  //Resposta consulta
  document.getElementById("resposta_consulta").value = textoDescriptografado;
}
// função para copiat caixa de texto da resposta da consulta
document
  .getElementById("botao_copiar")
  .addEventListener("click", clipboardCopy);
async function clipboardCopy() {
  let textoConsultaResposta =
    document.getElementById("resposta_consulta").value;
  await navigator.clipboard.writeText(textoConsultaResposta);
}
//função para alterar paleta de cores da página

function alterarPaleta1() {
  document.documentElement.style.setProperty("--primary-color", "#0a3871");
  document.documentElement.style.setProperty(
    "--primary-light-color",
    "#1f4f8a"
  );
  document.documentElement.style.setProperty("--secondary-color", "#d8dfe8");
  document.documentElement.style.setProperty(
    "--secondary-light-color",
    "#e5e5e5"
  );
  document.documentElement.style.setProperty("--third-color", "#ffffff");
  document.documentElement.style.setProperty("--forth-color", "#808080");
  document.documentElement.style.setProperty(
    "--primary-font",
    "'Inter', sans-serif"
  );
}

function alterarPaleta2() {
  document.documentElement.style.setProperty("--primary-color", "#11af03");
  document.documentElement.style.setProperty(
    "--primary-light-color",
    "#93fb15"
  );
  document.documentElement.style.setProperty("--secondary-color", "#93fb15");
  document.documentElement.style.setProperty(
    "--secondary-light-color",
    "#000000"
  );
  document.documentElement.style.setProperty("--third-color", "#ffed00");
  document.documentElement.style.setProperty("--forth-color", "#0f6292");
  document.documentElement.style.setProperty(
    "--primary-font",
    "'Orbitron', sans-serif"
  );
}
