class LoginController {
  init() {
    this.setContainer = document.querySelector("#main");
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
    new Navegacao().irParaEsqueciSenha();
  }

  irSignUp() {
    new Navegacao().irParaSignUp();
  }

  async fazerLogin() {
    let email = this.container.querySelector("#emaillogin").value;
    let password = this.container.querySelector("#passwordlogin").value;

    let payload = {
      email,
      password
    }

    let response = await fetch("http://localhost:3000/users/sign-in", {
      body: JSON.stringify(payload),
      method: "POST"
    });
    let data = await response.json();

    if(!data.token){
      if(data.error){
        alert(data.error)
      }
      else{
        alert("Ocorreu um erro ao logar!")
      }
    }
    
    new Navegacao().irParaHome();
  }

  set setContainer(main) {
    this.container = main;
  }
}