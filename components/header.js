class Header extends HTMLElement {
  css = `
    * {
        color: var(--light);
    }
    header {
        width: 100%;
        height: 100px;
        background-color: var(--dark);
        padding: 20px;
    }
    a {
    text-decoration: none;
    }
    nav {
        margin-top: 10px;
    }
    nav > a {
        border: solid var(--light) 1px;
        padding: 2px 5px;
        border-radius: 5px;
        margin: 0px 2px;
    }
    nav > a:hover {
        border: solid var(--dark) 1px;
        color: var(--dark);
        background-color: var(--light);
        padding: 2px 5px;
        border-radius: 5px;
        margin: 0px 2px;
    }
    h1 {
        margin: 0;
        font-family: "Alegraya", serif;
    }
  `.trim();
  template = () => {
    return `
        <header>
            <h1><a href="./index.html">Bite Size Italian</a></h1>
            <nav>
                <a href="./index.html">Home</a>
                <a href="./present-tense.html">Present Tense</a>
                <a href="./lessons.html">Lessons</a>
            </nav>
        </header>
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

export default Header;
