document.addEventListener('scroll', function() {
  let node = document.getElementById("box");
  var currentColor = window.getComputedStyle(node).backgroundColor;
  
  // Extract the RGB values from the background color
  var rgb = extractRGB(currentColor);

  // Increment each RGB component by 1
  if(rgb.r == 255 && rgb.g < 254){
    rgb.g += 10;
  }else if(rgb.g == 255 && rgb.r > 0){
    rgb.r -= 10;
  }else if(rgb.g == 255 && rgb.r == 0 & rgb.b < 255){
    rgb.b += 10;
  }else 

  // Apply the new color to the element
  node.style.backgroundColor = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

  let clone = node.cloneNode(true);
  document.getElementById("body").appendChild(clone);
});

function extractRGB(color) {
  var match = color.match(/\d+/g);
  return { r: parseInt(match[0]), g: parseInt(match[1]), b: parseInt(match[2]) };
}
