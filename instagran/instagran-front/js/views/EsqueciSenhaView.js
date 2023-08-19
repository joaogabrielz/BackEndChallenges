class EsqueciSenhaView {
  template() {
    return `
    <nav class="py-3 container-fluid">
      <a class="p-3 nav-item" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#262626" class="bi bi-caret-left" viewBox="0 0 16 16">
          <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
        </svg>
      </a>
    </nav>

    <main class="container">
      <h1 class="text-center mb-5">Instagren</h1>

      <form id="form-esqueci-senha">
        <div class="mb-2">
          <input type="email" class="form-control" placeholder="Seu melhor email">
        </div>
        <div class="text-end fw-bold mb-4">
          <a id="sign-in" href="#">Voltar para o login</a>
        </div>
        <div class="mb-2">
          <button id="esqueci-senha" type="button" class="btn btn-primary w-100">Recuperar senha</button>
        </div>
      </form>
    </main>

    <footer class="py-4 text-center">
      <span>Instagram Of Facebrok</span>
    </footer>
  `; 
  }
}