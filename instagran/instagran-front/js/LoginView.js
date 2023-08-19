class LoginView {
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

      <form id="form-sign-in">
        <div class="mb-2">
          <input type="email" class="form-control" placeholder="Seu melhor email">
        </div>
        <div class="mb-2">
          <input type="password" class="form-control" placeholder="A mais secreta senha">
        </div>
        <div class="text-end fw-bold mb-4">
          <a id="esqueci-senha" href="#">Esqueci minha senha</a>
        </div>
        <div class="mb-2">
          <button id="login" type="button" class="btn btn-primary w-100">Log in</button>
        </div>
      </form>

      <div class="my-5 d-flex align-items-center divisor-content">
        <span class="divisor"></span>
        <span class="mx-2 divisor-message text-center">OR</span>
        <span class="divisor"></div>
      </div>

      <p class="text-center">
        Don’t have an account? <a href="#" id="sign-up">Sign up.</a>
      </p>
    </main>

    <footer class="py-4 text-center">
      <span>Instagram Of Facebrok</span>
    </footer>
  `; 
	}
}