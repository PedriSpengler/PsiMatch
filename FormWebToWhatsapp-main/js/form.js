document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();


  const cliente = document.querySelector("#cliente").value;
  const fecha = document.querySelector("#fecha").value;
  const hora = document.querySelector("#hora").value;
  const resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");


  if (cliente === "" || fecha === "" || hora === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltam alguns dados ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Formulário enviado com sucesso ${cliente}, em breve entraremos em contato ! Obrigado !`;

  window.open(url);
});
