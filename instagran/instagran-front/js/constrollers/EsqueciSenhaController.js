class EsqueciSenhaController {
  init() {
    this.setContainer = document.querySelector("#main");
    let view = new EsqueciSenhaView().template();
    this.container.innerHTML = view;
    this.bind()
  }

  bind() {
    let login = this.container.querySelector("#sign-in");
    let esquciSenha = this.container.querySelector("#esqueci-senha");

    login.addEventListener("click", () => {
      this.irParaLogin();
    });

    esquciSenha.addEventListener("click", () => {
      this.recuperarSenha();
    })
  }

  irParaLogin() {
    new Navegacao().irParaLogin();
  }

  recuperarSenha() {
    console.log("recuperarSenha");
  }

  set setContainer(main) {
    this.container = main;
  }
}