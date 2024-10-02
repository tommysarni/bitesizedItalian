class ToolTip extends HTMLElement {
  windowWidth = window.innerWidth;
  css = `
    .tooltipcontainer {
        display: inline-block;
        position: relative;
    }
    .tiproot {
        margin: 0;
        display: inline-block;
        background-color: white;
        padding: 3px 10px;
        text-decoration: underline;
        border-radius: 10px;
        border: none;
    }
    .tiproot:hover {
        background-color: var(--dark);
        color: var(--light);
        cursor: pointer;
    }
    .tiproot:active {
        cursor: default;
    }
    .tip {
        z-index: 5;
        position: absolute;
        top: 125%;
        background-color: white;
        width: max-content;
        transform: scale(0);
        transform-origin: top left;
        transition: transform .3s;
    }
    .tip.focus {
        transform: scale(1);

    }
    .tip.focus + .tiproot {
        background-color: var(--dark);
        color: var(--light);
    }
    .escape {
        width: 15px;
        height: 15px;
        color: white;

        background-color: red;
        border-radius: 10px;
        margin: 2px;
        position: absolute;
        border: 1px solid #ccc;
    }
    .escape:hover {
        cursor: pointer;
        box-shadow: 0 0 5px 0px red;
    }
    `.trim();
  template = () => {
    const temp = document.createElement("template");
    temp.innerHTML = `
        <style>
             ${this.css.trim()}
         </style>
         <div class="tooltipcontainer">
            <div tabindex="-1" class="tip">
                <button onclick="console.log('clicked'); this.parentNode.classList.remove('focus');" class="escape"></button>
                <slot class="tipcontent" name="tipcontent">ADD CONTENT</slot>
            </div>
            <slot class="tiproot" name="tiproot">ADD ROOT</slot>
          </div>
    `;
    return temp;
  };
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(this.template().content.cloneNode(true));
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });

    // this.shadowRoot.querySelector('.tip').style.transform = 'scale(0)'
    // this.render(tiproot, tipcontent);
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector(".tiproot")
      .addEventListener("click", (e) => {
        const tip = this.shadowRoot.querySelector(".tip");
        tip.classList.add("focus");
        if (tip) {
          tip.focus();
          this.updateTableOpenCSS();
        }
      });
  }

  exit() {
    this.shadowRoot.querySelector('.tip').classList.remove('focus');
  }

  updateTableOpenCSS = () => {
    const tip = this.shadowRoot.querySelector(".tip");
    const tipWidth = tip.offsetWidth;
    const tiproot = this.shadowRoot.querySelector(".tiproot");
    const { x, y } = tiproot.getBoundingClientRect();
    console.log(x, this.windowWidth);

    const rawPercent = Math.floor(x) / Math.floor(this.windowWidth);
    const percent = Math.floor(rawPercent * 100);
    console.log(percent);
    tip.style.transformOrigin = `${percent}% 0%`;
    tip.style.left = `-${Math.floor(tipWidth * rawPercent)}px`;
  };

  render() {
    this.shadowRoot.innerHTML = `
      <style>${this.css.trim()}</style>
          ${this.template().trim()}
          
          `.trim();
  }
}

export default ToolTip;
