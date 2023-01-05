import "./style.css";
import javascriptLogo from "./javascript.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;
setupCounter(document.querySelector("#counter"));

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/alpha/${country}`)
//     .then(function (response) {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// };

// getCountryData("IN");

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/alpha/${country}`)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//       const borderingCountry = data[0].borders?.[0];
//       if (!borderingCountry) return;
//       return fetch(`https://restcountries.com/v3.1/alpha/${borderingCountry}`);
//     })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
// };
// getCountryData("IN");

console.log("Test start");
setTimeout(() => console.log("0 second timer"));
Promise.resolve("Resolved Promise 1").then((res) => console.log(res));
console.log("test end");
