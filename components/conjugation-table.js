class ConjugationTable extends HTMLElement {
  css = `
      
    `.trim();
  template = (data) => {
    console.log(data)
    const [are, ere, ire] = data
    const [word, io, tu, ] = 
    console.log(are)
    return `
          <table>
              <thead>
                <tr>
                  <td></td>
                  <td>-ARE</td>
                  <td>-ERE</td>
                  <td>-IRE</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Cucin<i>are</i></td>
                  <td>Scriv<i>ere</i></td>
                  <td>Apr<i>ire</i></td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Io</td>
                  <td>Cucin<b>o</b></td>
                  <td>Scriv<b>o</b></td>
                  <td>Apr<b>o</b></td>
                </tr>
                <tr>
                  <td>Tu</td>
                  <td>Cucin<b>i</b></td>
                  <td>Scriv<b>i</b></td>
                  <td>Apr<b>i</b></td>
                </tr>
                <tr>
                  <td>Lui/Lei</td>
                  <td>Cucin<b>a</b></td>
                  <td>Scriv<b>e</b></td>
                  <td>Apr<b>e</b></td>
                </tr>
                <tr>
                  <td>Noi</td>
                  <td>Cucin<b>iamo</b></td>
                  <td>Scriv<b>iamo</b></td>
                  <td>Apr<b>iamo</b></td>
                </tr>
                <tr>
                  <td>Voi</td>
                  <td>Cucin<b>ate</b></td>
                  <td>Scriv<b>ete</b></td>
                  <td>Apr<b>ite</b></td>
                </tr>
                <tr>
                  <td>Loro</td>
                  <td>Cucin<b>ano</b></td>
                  <td>Scriv<b>ono</b></td>
                  <td>Apr<b>ono</b></td>
                </tr>
              </tbody>
          </table>
          `;
  };
  constructor() {
    super();
    const data = this.getAttribute("data-conjugation");
    const json = JSON.parse(data).map((r) => r.split("|"));
    // ["cucinare", "o", "i", "a", "iamo", "ate", "ano"];
    // console.log(json);

    this.attachShadow({ mode: "open" });
    this.render(json);
  }

  render(json) {
    this.shadowRoot.innerHTML = `
      <style>${this.css.trim()}</style>
          ${this.template(json).trim()}
          
          `.trim();
  }
}

export default ConjugationTable;
