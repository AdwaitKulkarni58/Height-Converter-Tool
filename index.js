document.querySelector(".convertToCentimetres").addEventListener("click", convertFeetToCentimetres);
document.querySelector(".convertToFeet").addEventListener("click", convertCentimetresToFeet);

function convertFeetToCentimetres() {

    let heightInFeet = document.querySelector(".feet").value;
    let heightInInches = document.querySelector(".inches").value;

    let feetToCentimetres = parseInt(heightInFeet) * 30.48;
    let inchesToCentimetres = parseInt(heightInInches) * 2.54;

    document.querySelector(".resultOfFeetCalculation").innerHTML = (feetToCentimetres + inchesToCentimetres).toFixed(2) + " cm";
}

function convertCentimetresToFeet() {
    let heightInCentimetres = document.querySelector(".centi").value;
    let heightInFeet = (parseInt(heightInCentimetres) / 30.48).toFixed(1);

    let modifiedHeight = heightInFeet * 10;
    let feet = modifiedHeight / 10;
    let inches = modifiedHeight % 10;
    inches = ((inches / 10) * 12).toFixed(1);

    document.querySelector(".resultOfCentimetresCalculation").innerHTML = Math.floor(feet) + " ft" + " " + inches + " inch";
}