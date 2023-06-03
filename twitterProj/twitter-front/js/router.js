class Router {
    constructor() {
        this.rotas = {
            signUp: {
                path: "/home",
                controller: "SignUpController",
            },
            home: {
                path: "/home",
                controller: "HomeController",
            },
            criarTweet: {
                path: "/tweet/new",
                controller: "NewTweetController"
            }
        };
    }
    
    irParaHome() {
        this.irPara(this.rotas.home)
    }
    irParaCriarTweet() {
        this.irPara(this.rotas.criarTweet)
    }
    irSignUp() {
        this.irPara(this.rotas.signUp)
    }
    irPara(rota) {
        //history.pushState({}, "", rota.path);
        eval(`new ${rota.controller}();`)
    }   

}