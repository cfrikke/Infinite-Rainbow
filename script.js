document.addEventListener( 'scroll', function () {
    var pre = document.querySelector( 'html' );
    pre.innerHTML = pre.innerHTML + "<div id='redbox'></div>\n";
    pre.innerHTML = pre.innerHTML + "<div id='redorangebox'></div>\n";
    pre.innerHTML = pre.innerHTML + "<div id='yellowbox'></div>\n";
    pre.innerHTML = pre.innerHTML + "<div id='yellowgreenbox'></div>\n";
    pre.innerHTML = pre.innerHTML + "<div id='greenbox'></div>\n";
    pre.innerHTML = pre.innerHTML + "<div id='tealbox'></div>\n";
    pre.innerHTML = pre.innerHTML + "<div id='bluebox'></div>\n";
    pre.innerHTML = pre.innerHTML + "<div id='dsbluebox'></div>\n";
    pre.innerHTML = pre.innerHTML + "<div id='indigobox'></div>\n";
    pre.innerHTML = pre.innerHTML + "<div id='bvbox'></div>\n";
    pre.innerHTML = pre.innerHTML + "<div id='violetbox'></div>\n";
  });