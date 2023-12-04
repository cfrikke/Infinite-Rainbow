  const node = document.getElementById("box");
  const clone = node.cloneNode(true);
document.addEventListener('scroll', function() {
  node = document.getElementById("box");
  clone = node.cloneNode(true);
    document.getElementById("body").appendChild(clone);
  });


