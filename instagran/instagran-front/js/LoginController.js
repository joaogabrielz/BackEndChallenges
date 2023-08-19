class LoginController {
  constructor() {
    this.container = document.querySelector("#main");
    let view = new LoginView().template();
    this.container.innerHTML = view;
    this.bind();
  }

  bind() {
    //pegando os elementos
    let esqueciSenha = this.container.querySelector("#esqueci-senha");
    let signUp = this.container.querySelector("#sign-up");
    let login = this.container.querySelector("#login");

    //Lidando com as ações
    esqueciSenha.addEventListener("click", () => {
      this.irEsqueciSenha();
    })

    login.addEventListener("click", () => {
      this.fazerLogin();
    })

    signUp.addEventListener("click", () => {
      this.irSignUp();
    });
  }

  irEsqueciSenha() {
    console.log("irEsqueciSenha");
  }

  irSignUp() {
    console.log("irSignUp");
  }

  fazerLogin() {
    console.log("fazerLogin");
  }
}