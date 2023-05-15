let temperature = document.getElementById("tempValue");
let image = document.getElementById("changeWithTemperature");
let result = document.getElementById('result');
let btn = document.getElementById('generate');
const from = document.getElementById('from');
const to = document.getElementById('to');
let fromTemp;
let toTemp;
let calValue;


let oldValue = temperature.value;
let newValue;

// For Changing Images on Changing Temperature
let changeImage = (value) => {
    if(value<=0)
        image.src = 'Image/tempL0.png'
    else if(value>0 && value<=10)
        image.src = 'Image/tempG0.png'
    else if(value>10 && value<=20)
        image.src = 'Image/tempG10.png'
    else if(value>20 && value<=30)
        image.src = 'Image/tempG20.png'
    else if(value>30 && value<=35)
        image.src = 'Image/tempG30.png'
    else if(value>35 && value<=40)
        image.src = 'Image/tempG35.png'
    else if(value>40 && value<=45)
        image.src = 'Image/tempG40.png'
    else if(value>45 && value<=50)
        image.src = 'Image/tempG45.png'
    else
        image.src = 'Image/tempG50.png'
}

setInterval(()=>{
    newValue = temperature.value;

    if(newValue !== oldValue) {
        changeImage(newValue);

        oldValue = newValue;
    }

}, 100)

// Main Logic to Change the Temperatures
btn.addEventListener('click', function() {
    fromTemp = from.value;
    toTemp = to.value;

    console.log(toTemp+fromTemp)
    if(fromTemp==toTemp) {
        calValue = newValue;
        result.innerHTML = `${calValue} &deg;${fromTemp==='fahrenheit' ? 'F' : 'C'}`;
    }
        else {
            if(toTemp==='celsius') { // F to C
                calValue = ((newValue - 32) * (5/9));
                result.innerHTML = `${calValue} &deg;${toTemp==='fahrenheit' ? 'F' : 'C'}`;
            }
            else { // C to F
                calValue = (newValue * (9/5)) + 32;
                result.innerHTML = `${calValue} &deg;${toTemp==='fahrenheit' ? 'F' : 'C'}`;
        }
    }

    // Changes images according to the temperature
    if(fromTemp!=='celsius')
        changeImage(calValue);
});
