// const fetchRandomAdvice = () => {
//   fetch("https://api.adviceslip.com/advice")
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// };
// fetchRandomAdvice();

const url = "https://api.adviceslip.com/advice";

const getAdvice = async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  document.querySelector(".advice").innerHTML = `"${data.slip.advice}"`;
  document.querySelector(".advice-id").innerHTML = `Advice #${data.slip.id}`;
};

getAdvice();

const adviceBtn = document.querySelector(".imgbtn");

adviceBtn.addEventListener("click", function () {
  console.log("hello");
  getAdvice();
});
// adviceBtn.addEventListener("click", getAdvice());
