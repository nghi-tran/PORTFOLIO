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
<<<<<<< HEAD
          <a href="about.html">info</a>
=======
          <a href="about.html">about</a>
>>>>>>> ec0d9218bb1d6e16309d2c2712c04edd88527b99
        </div>
    </div>

     `
    ;
  }
}

customElements.define('my-header', MyHeader);
