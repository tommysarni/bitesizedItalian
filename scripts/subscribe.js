/**
 * DOM Elements needed: name, email, birthday, results, form
 */
console.log('loaded subscribe.js')
const SERVER_URL = "https://email-list-server.onrender.com/subscribe";
const today = (document.getElementById("birthday").max = new Date()
  .toISOString()
  .split("T")[0]);
document.getElementById("submit").addEventListener("click", (e) => {
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

  document.querySelector("form").style.display = "none";
});

const formatBirthday = () => {
  const birthday = document.getElementById("birthday")?.value || "";
  const RE = /^(\d{4})[-](\d{2})[-](\d{2})$/;
  if (!RE.test(birthday)) return "";
  const [year, month, day] = birthday.split("-");
  if (!year || !month || !day) return "";
  return `${month}-${day}-${year}`;
};

const validateForm = () => {
  const name = document.getElementById("name")?.value;
  const email = document.getElementById("email")?.value;
  const birthday = formatBirthday();

  if (!name || !email || !birthday) {
    throw new Error("Invalid Credentials Supplied");
  }

  return { name, email, birthday };
};

const setResult = (text) => {
  const result = document.getElementById("result");
  if (result) result.textContent = text;
};
