function forLoop(arr) {
  for(let i=0;i<25; i++){
    if(i===1) {
      arr.push("I am 1 strange loop.");
    }else {
      arr.push("I am ${i} strange loop.");
    }
  }
  return arr;
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function whileLoop(num) {
while (num>0) {
  console.log(num--);
}
return 'done';
}

function doWhileLoop(arr) {
do {
  arr.pop();
}
while (arr.length > 0 || maybeTrue());
}