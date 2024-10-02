class TranslationTable extends HTMLElement {
  css = `
      table {
        max-width: 95vw;
        margin: 15px;
        border-radius: 30px;
        text-align: left;
        border-collapse: collapse;
        border-spacing: 8px;

      }
      thead {
        background-color: var(--light);
      }
      td {
        padding-right: 10px;
      }
      tr:last-of-type {
        font-weight: bold;
      }
    `.trim();
  template = ({
    title,
    pov,
    infinitive,
    infinitive_meaning,
    subject,
    conjugation,
    meaning,
  }) => {
    if (
      [pov, infinitive, infinitive_meaning, subject, conjugation, meaning].some(
        (x) => x === undefined
      )
    )
      return "";
    return `
        <table>
            <caption style="text-align:center">${title}</caption>
            <thead>
            <tr>
                <th>Subject</th>
                <th>Verb</th>
                <th>Meaning</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>${pov}</td>
                <td>${infinitive}</td>
                <td>${infinitive_meaning}</td>
            </tr>
            <tr>
                <td>${subject}</td>
                <td>${conjugation}</td>
                <td>${meaning}</td>
            </tr>
            </tbody>
        </table>
     `;
  };
  constructor() {
    super();
    const data = this.getAttribute("data-table");
    const json = JSON.parse(data);

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

export default TranslationTable;
