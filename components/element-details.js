class ElementDetails extends HTMLElement {

  template = () => {
    const temp = document.createElement('template')
    temp.id="element-details-template"
    temp.innerHTML = `
    <style>
        details {
          font-family: "Open Sans Light", Helvetica, Arial;
        }
        .name {
          font-weight: bold;
          color: #217ac0;
          font-size: 120%;
        }
        h4 {
          margin: 10px 0 -8px 0;
        }
        h4 span {
          background: #217ac0;
          padding: 2px 6px 2px 6px;
        }
        h4 span {
          border: 1px solid #cee9f9;
          border-radius: 4px;
        }
        h4 span {
          color: white;
        }
        .attributes {
          margin-left: 22px;
          font-size: 90%;
        }
        .attributes p {
          margin-left: 16px;
          font-style: italic;
        }
      </style>
      <details>
        <summary>
          <span>
            <code class="name"
              >&lt;<slot name="element-name">NEED NAME</slot>&gt;</code
            >
            <span class="desc"
              ><slot name="description">NEED DESCRIPTION</slot></span
            >
          </span>
        </summary>
        <div class="attributes">
          <h4><span>Attributes</span></h4>
          <slot name="attributes"><p>None</p></slot>
        </div>
      </details>
      <hr />
      `
    return temp

  }


  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template().content.cloneNode(true))

  }

  render() {
    // this.shadowRoot.innerHTML = this.template()
  }
}

export default ElementDetails