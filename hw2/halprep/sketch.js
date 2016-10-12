var halsays;

function preload(){
  halsays = loadStrings('hal.txt');  
}

function setup() {
  var halstring = "";
  for (var i = 0; i<halsays.length;i++){
    halstring+=halsays[i]+" ";
  }
  halstring = halstring.replace(/[^a-zA-Z0-9':[\]]/g, " ")
  halstring = halstring.replace(/ +/g, " ");
  halstring = halstring.trim();
  
  halstring = halstring.replace(/ *\[[^\]]*]/, "");
  
  console.log(halstring);
  
  var quotes = halstring.split(/HAL:/);
  console.log("there are " + quotes.length + " chapters!");
  
  saveStrings(quotes, 'hal_cooked.txt');
}

function draw() {
  
}