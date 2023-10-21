//https://www.rapidtables.com/convert/color/rgb-to-hsl.html
//convert hsl <-> rgb

let hsl = {hue: 0, sat: 50, light: 50};
let rgb;
let R;
let G;
let B;

let d;

function rotateHue(){
   hsl.hue += 1;
   document.body.style.backgroundColor = `hsl(${hsl.hue},${hsl.sat}%,${hsl.light}%)`;
}

function enter(){
   let inputs = document.getElementsByClassName('rgb');
   
   //input validation
   for (let x of inputs){
      if (x === ''){return;}
   }

   let r = inputs.red.value;
   let g = inputs.green.value;
   let b = inputs.blue.value;

   let d = Math.sqrt((R - r)**2 + (G - g)**2 + (B - b)**2).toFixed(1);

   let result = confirm(`Original color: ${rgb} \nColor distance: ${d}`);
   if(result){resetColor();}
   return;
}

function resetColor(){
   R = Math.round(Math.random()*255);
   G = Math.round(Math.random()*255);
   B = Math.round(Math.random()*255);
   rgb = `rgb(${R},${G},${B})`;
   document.body.style.backgroundColor = rgb;
   return;
}

function start(){
   clearInterval(openPage);
   //clear away the start and opacity up the menu
}

function introColorChange(){
   rotateHue();
}

let openPage = setInterval(introColorChange,2);
//resetColor();

document.getElementById('enter').addEventListener('onclick',enter);
