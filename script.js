document.addEventListener('scroll', function() {
  const node = document.getElementById("box");
  const clone = node.cloneNode(true);
    document.getElementById("body").appendChild(clone);
  });


