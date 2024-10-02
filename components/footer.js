class Footer extends HTMLElement {
  css = `
    
      * {
        color: var(--light);
        }

    footer {
        width: 100%;
        height: 250px;
        background-color: var(--dark);
        padding: 20px;
    }
    a {
    text-decoration: none;
    }
    nav {
        margin-top: 10px;
    }
    `.trim();
  template = () => {
    return `
          <footer>
              <h1><a href="./index.html">Bite Size Italian</a></h1>
              <join-newsletter dependencies="https://unpkg.com/axios/dist/axios.min.js"></join-newsletter>
          </footer>
          `;
  };

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${this.css.trim()}</style>
          ${this.template().trim()}
          
          `.trim();
  }
}

export default Footer;
