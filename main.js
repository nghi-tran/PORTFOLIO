class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML =
    `
    <div id="navbar" class="container__navbar">
      <div class="container__wrapper">
        <div class="home">
          <a href="index.html">nghitran</a>
        </div>

        <div class="work">
          <a href="work.html">work</a>
        </div>

        <div class="about">
          <a href="about.html">info</a>
        </div>
      </div>

    </div>

     `
    ;
  }
}

customElements.define('my-header', MyHeader);


var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-8%";
    }
    prevScrollpos = currentScrollPos;
  }
