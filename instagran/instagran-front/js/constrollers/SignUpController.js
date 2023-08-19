class SignUpController {
  init() {
    this.setContainer = document.querySelector("#main");
    let view = new SignUpView().template();
    this.container.innerHTML = view;
    
    this.setInputFile = document.querySelector("#avatar");
    this.setAvatarPreview = document.querySelector("#avatar-preview");

    this.bind();
  }

  bind() {
    this.avatarPreview.addEventListener("click", () => {
      this.inputFile.click();
    });

    this.container.querySelector("#login").addEventListener("click", () => {
      new Navegacao().irParaLogin();
    });

    this.inputFile.addEventListener("change", () => {
      this.showPreview();
    })

    this.container.querySelector("#sign-up").addEventListener("click", (e) => {
      e.preventDefault();
      this.criarUsuario();
    }) 
  }

  async criarUsuario() {
    let name = document.querySelector("#name").value;
    let username = document.querySelector("#username").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    let formData = new FormData();
    formData.append("name", name);
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", this.inputFile.files[0]);

    let response = await fetch("http://localhost:3000/users/sign-up", {
      body: formData,
      method: "POST"
    });
    let sessao = await response.json();
    sessionStorage.setItem("token", sessao.token);
    new Navegacao().irParaHome();
  }

  showPreview() {
    if(this.inputFile.files && this.inputFile.files[0]) {
      var reader = new FileReader();
      reader.onload = (e) => {
        this.avatarPreview.src = e.target.result;
      };
      reader.readAsDataURL(this.inputFile.files[0])
    }
  }

  set setContainer(main) {
    this.container = main;
  }

  set setInputFile(inputFile) {
    this.inputFile = inputFile;
  }

  set setAvatarPreview(avatarPreview) {
    this.avatarPreview = avatarPreview;
  }
}