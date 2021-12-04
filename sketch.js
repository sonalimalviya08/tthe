var array=[45,"hi",true,null,65]
console.log(array[3]);

var arr2=[24,25,32,63,87];

function score(){
var sum=arr2[0]+arr2[1]+arr2[2]+arr2[3]+arr2[4]
var avg=sum/arr2.length;
console.log(avg)
}

function setup() {
  createCanvas(400, 400);
  score();
}

function draw() {
  background(220);
}