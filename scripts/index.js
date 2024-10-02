import Header from "../components/header.js";
import ElementDetails from "../components/element-details.js";
import BoilerPlate from "../components/boiler-plate.js";
import Footer from "../components/footer.js";
import JoinNewsletter from "../components/join-newsletter.js";
import ConjugationTable from "../components/conjugation-table.js";
import ToolTip from "../components/tool-tip.js";
import TranslationTable from "../components/translation-table.js";

customElements.define("boiler-plate", BoilerPlate);
customElements.define("conjugation-table", ConjugationTable);
customElements.define("translation-table", TranslationTable);
customElements.define("header-component", Header);
customElements.define("footer-component", Footer);
customElements.define("join-newsletter", JoinNewsletter);
customElements.define("element-details", ElementDetails);
customElements.define("tool-tip", ToolTip);
