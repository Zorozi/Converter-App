const convertBtn = document.getElementById("con")
const lenBtn = document.getElementById("len-btn")
const volBtn = document.getElementById("vol-btn")
const masBtn = document.getElementById("mass-btn")
const inputEl = document.getElementById("convert-el")
const areaBtn = document.getElementById("area-btn")
const tempBtn = document.getElementById("temp-btn")
const distBtn = document.getElementById("distance-btn")


convertBtn.addEventListener("click", convertMetrics)

function convertMetrics(){
    
    let length = 0;
    let feet = 0;
    let volume = 0;
    let mass = 0

    if (inputEl.value > 0){
       length = inputEl.value * 3.281 
       feet = inputEl.value / 3.281
       volume = inputEl.value * 0.264
       gallons = inputEl.value / 0.264
       mass = inputEl.value * 2.204
       pounds = inputEl.value / 2.204
       acre = inputEl.value * 0.405
       hectare = inputEl.value * 2.469
       celcius = inputEl.value * 9/5 + 32
       fahrenheight = (inputEl.value - 32) * 5/9
       kilometers = inputEl.value * 0.623
       miles = inputEl.value * 1.609


       let inFeet = length.toFixed(2) + " feet | "
       let inMeters = feet.toFixed(2) + " meters "
       let inGallons = volume.toFixed(3) + " gallons | "
       let inLiters = gallons.toFixed(3) + " liters "
       let inPounds = mass.toFixed(3) + " pounds | "
       let inKilos = pounds.toFixed(3) + " kilograms "
       let inAcres = hectare.toFixed(1) + " acres | "
       let inHectares = acre.toFixed(1) + " hectares "
       let inCelcius = fahrenheight.toFixed(2) + " celcius | "
       let inFahrenheight = celcius.toFixed(2) + " fahrenheight "
       let inKilometers = miles.toFixed(2) + " kilometers | "
       let inMiles = kilometers.toFixed(2) + " miles "


       lenBtn.textContent = inputEl.value + " meters = " + inFeet + inputEl.value + " feet = " + inMeters
       volBtn.textContent = inputEl.value + " liters = " + inGallons + inputEl.value + " gallons = " + inLiters
       masBtn.textContent = inputEl.value + " kilograms = " + inPounds + inputEl.value + " pounds = " + inKilos
       areaBtn.textContent = inputEl.value + " hectares = " + inAcres + inputEl.value + " acres = " + inHectares 
       tempBtn.textContent = inputEl.value + " fahrenheight = " + inCelcius + inputEl.value + " celcius = " + inFahrenheight
       distBtn.textContent = inputEl.value + " miles = " + inKilometers + inputEl.value + " kilometers = " + inMiles     
    }
  
}
    
