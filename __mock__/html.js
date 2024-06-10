const generateForm = () => `
  <section class="section-form" id="section-form">
    <form id="form-login">
      <div class="field">
        <label for="username">Usuário</label>
        <input type="text" name="username" id="username" />
      </div>
      <div class="field">
        <label for="password">Senha</label>
        <input type="password" name="password" id="password" />
      </div>
      <div class="field">
        <button type="submit">Enviar</button>
      </div>
    </form>
  </section> 
`

export {
  generateForm
}