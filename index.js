import DonutMaker from "./DonutMaker.js";
const donutMaker = new DonutMaker(0,0,0);

var clickCount = document.querySelector('.click__count');
var clickValue = document.querySelector('.click__value');

const addDonutButton = document.querySelector('.donut__button');
addDonutButton.addEventListener('click', () => {
  donutMaker.addDonut();
  clickCount.innerText = 'Donuts Owned: ' + donutMaker.numDonuts; 
  clickValue.innerText = 'Click Value: ' + Math.round(donutMaker.donutPerClick()) + ' donuts'
})

const addAutoClicker = document.querySelector('.auto__clicker__button');
addAutoClicker.addEventListener('click', () => {
  donutMaker.addAutoClicker();
  const autoClickerCount = document.querySelector('.auto__clicker__count');
  autoClickerCount.innerText = 'Number Of Auto Clickers: ' + donutMaker.numAutoClickers;
  const autoClickerCost = document.querySelector('.auto__clicker_cost');
  autoClickerCost.innerText = 'Auto Clicker Cost: ' + donutMaker.autoClickerCost + ' donuts'
  clickCount.innerText = 'Donuts Owned: ' + donutMaker.numDonuts;
})

const addDonutMultiplier = document.querySelector('.purchase__button');
addDonutMultiplier.addEventListener('click', () => {
  donutMaker.addDonutMultiplier();
  const donutMultiplierCount = document.querySelector('.count__donut__multiplier');
  donutMultiplierCount.innerText = 'Donut Multiplier amount: ' + donutMaker.numDonutMultiplier;
  const donutMultiplierCost = document.querySelector('.donut__multiplier_cost');
  donutMultiplierCost.innerText = 'Donut Multiplier Cost: ' + donutMaker.donutMultiplierCost + ' donuts'
  clickCount.innerText =  'Donuts Owned: ' + donutMaker.numDonuts;
  clickValue.innerText = 'Click Value: ' + Math.round(donutMaker.donutPerClick()) + ' donuts'
})

setInterval(function () {
  donutMaker.activateAutoClickers();
  clickCount.innerHTML = 'Donuts Owned: ' + donutMaker.numDonuts;
}, 1000)


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
