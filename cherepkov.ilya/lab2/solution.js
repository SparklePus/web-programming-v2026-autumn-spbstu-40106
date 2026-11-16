function rgbToHex(rgb) {
  const numbers = rgb.match(/\d+/g).map(Number);

  const hex = numbers.map((number) => number.toString(16).padStart(2, '0'));

  return '#' + hex.join('').toUpperCase();
}

console.log(rgbToHex('rgb(255,0,0)'));
console.log(rgbToHex('rgb(0,255,0)'));
console.log(rgbToHex('rgb(0,0,255)'));
