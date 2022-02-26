class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
    `
    <div class="container__navbar">
        <div class="home">
          <a href="index.html">nghitran</a>
        </div>

        <div class="work">
          <a href="work.html">work</a>
        </div>

        <div class="about">
          <a href="about.html">about</a>
        </div>
    </div>

     `
    ;
  }
}

customElements.define('my-header', MyHeader);
