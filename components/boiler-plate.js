/**
 * Update title
 * Add Script File
 * Add Stylesheet
 */

class BoilerPlate extends HTMLElement {
  css = `
    :host {
        width: 100%;
        display: block;
    }
    h1 {
    font-family: "Alegraya", serif;
    }
    `;

  template = () => {
    const temp = document.createElement("template");
    temp.id = "boiler-plate";
    temp.innerHTML = `
      <style>
      ${this.css.trim()}
        </style>
        <body>
            <slot name="main">Main</slot>
        </body>
        `.trim();
    return temp;
  };

  constructor() {
    super();

    document.title = this.getAttribute("title");
    const depends = (this.getAttribute("dependencies") || "")
      .split("|")
      .filter((d) => d);

    depends.forEach((d) => {
      const dependency_tag = document.createElement("script");
      //   dependency_tag.type = "module";
      dependency_tag.src = d;
      document.body.appendChild(dependency_tag);
    });

    const css = this.getAttribute("css");
    if (css) {
      const css_script_tag = document.createElement("link");
      css_script_tag.rel = "stylesheet";
      css_script_tag.href = css;
      document.head.appendChild(css_script_tag);
    }

    const js = this.getAttribute("js");
    if (js) {
      const js_script_tag = document.createElement("script");
      js_script_tag.type = "module";
      js_script_tag.src = this.getAttribute("js");
      document.head.appendChild(js_script_tag);
    }

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template().content.cloneNode(true));
  }

  connectedCallback() {
    console.log('here')
  }

  render() {
    // this.shadowRoot.innerHTML = this.template()
  }
}

export default BoilerPlate;
