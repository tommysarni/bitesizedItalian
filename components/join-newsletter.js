class JoinNewsletter extends HTMLElement {
  css = `
    
    `.trim();
  template = () => {
    return `
          <h1>Join the Newsletter and Learn</h1>
        <form>
          <div class="field">
            <!-- <label for="name">Enter your name: </label> -->
            <input type="text" name="name" id="name" value="Joey" required />
          </div>
          <div class="field">
            <!-- <label for="email">Enter your email: </label> -->
            <input
              type="email"
              name="email"
              id="email"
              value="joeyschmoe@gmail.com"
              maxlength="128"
              required
            />
          </div>
          <div class="field">
            <!-- <label for="birthday">Start date:</label> -->

            <input
              type="date"
              id="birthday"
              name="birthday"
              maxlength="10"
              minlength="10"
              min="1900-01-01"
            />
          </div>

          <input id="submit" type="submit" value="Subscribe!" />
        </form>
        <h1 id="result"></h1>
          `;
  };

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();

    const depends = this.getAttribute("dependencies")
      .split("|")
      .filter((d) => d);
    console.log(depends);

    depends.forEach((d) => {
      const dependency_tag = document.createElement("script");
    //   dependency_tag.type = "module";
      dependency_tag.src = d;
      document.body.appendChild(dependency_tag);
    });

   
  }

  connectedCallback() {
    const _this = this;
    window.addEventListener("DOMContentLoaded", function (event) {
      _this.main();
    });
  }

  main() {
    /**
     * DOM Elements needed: name, email, birthday, results, form
     */

    const SERVER_URL = "https://email-list-server.onrender.com/subscribe";
    const today = (this.shadowRoot.getElementById("birthday").max = new Date()
      .toISOString()
      .split("T")[0]);
    this.shadowRoot.getElementById("submit").addEventListener("click", (e) => {
      e.preventDefault();
      const { name, email, birthday } = validateForm();

      //   axios
      //     .post(SERVER_URL, {
      //       name,
      //       email,
      //       birthday,
      //     })
      //     .then(function (response) {
      //       const { code, errors } = response.data || {};
      //       // if code === 11000 then already subscribed
      //       const text =
      //         code || errors
      //           ? "There was an error. Try again later."
      //           : "Congrats! You have subscribed.";

      //       setResult(text);
      //     })
      //     .catch(function (error) {
      //       console.log(error);
      //       setResult("There was an error. Try again later.");
      //     });

      this.shadowRoot.querySelector("form").style.display = "none";
    });

    const formatBirthday = () => {
      const birthday = this.shadowRoot.getElementById("birthday")?.value || "";
      const RE = /^(\d{4})[-](\d{2})[-](\d{2})$/;
      if (!RE.test(birthday)) return "";
      const [year, month, day] = birthday.split("-");
      if (!year || !month || !day) return "";
      return `${month}-${day}-${year}`;
    };

    const validateForm = () => {
      const name = this.shadowRoot.getElementById("name")?.value;
      const email = this.shadowRoot.getElementById("email")?.value;
      const birthday = formatBirthday();

      if (!name || !email || !birthday) {
        throw new Error("Invalid Credentials Supplied");
      }

      return { name, email, birthday };
    };

    const setResult = (text) => {
      const result = this.shadowRoot.getElementById("result");
      if (result) result.textContent = text;
    };
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>${this.css.trim()}</style>
          ${this.template().trim()}
          
          `.trim();
  }
}

export default JoinNewsletter;
