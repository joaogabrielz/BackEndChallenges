class Navegacao {
	constructor() {
		this.rotas = {
      login: {
        controller: new LoginController(),
      },
			esqueciSenha: {
        controller: new EsqueciSenhaController(),
  		},
      signUp: {
        controller: new SignUpController()
      },
      home: {
        controller: new HomeController(),
      },
    }
	}

  irParaHome() {
    this.irPara(this.rotas.home);  
  }

  irParaLogin() {
    this.irPara(this.rotas.login);  
  }

  irParaEsqueciSenha() {
    this.irPara(this.rotas.esqueciSenha);   
  }

  irParaSignUp() {
    this.irPara(this.rotas.signUp);
  }

  irPara(rota) {
    rota.controller.init();
  }
}