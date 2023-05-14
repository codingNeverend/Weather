let url;
let townElement = document.querySelector(".town");
let temperatureElement = document.querySelector("#temperature_label");
let newTown = document.querySelector("#changeVille");
let container = document.querySelector(".container");
let logo = document.querySelector('#logo');
let menu = document.querySelector('.burger'); 
let menuTown = document.querySelector('.changeTown'); 
let card = document.querySelector('.card');

refreshWeather("Paris");

async function refreshWeather(town) {
  url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    town +
    "&appid=0495a3371f7d23fcb66cb1628b1d1962&units=metric";
    
  axios
    .get(url)
    .then((donnees) => {
      townElement.textContent = town;
      temperatureElement.textContent = donnees.data.main.temp;
      if (donnees.data.weather[0].main == "Clouds") {
        container.style.backgroundImage =
          "url('images/bgClouds.jpg')";
          logo.src = "images/cloudy.png";
          card.style.backgroundColor = "lightgrey";
        } else if (donnees.data.weather[0].main == "Clear") {
        container.style.backgroundImage =
          "url('images/blueSky.jpg')";
          logo.src = "images/sun.png";
          card.style.backgroundColor = "blue";
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

submit.addEventListener("click", () => {
  newTown = document.querySelector("#changeVille").value;
  refreshWeather(newTown);
  document.querySelector("#changeVille").value = "";
  menuTown.classList.toggle('changeTownAnime');
});

menu.addEventListener("click", () => {
  menuTown.classList.toggle('changeTownAnime');
});
