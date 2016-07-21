window.onload = function() {
    var spans = document.getElementsByTagName('span');
    var link = document.getElementsByTagName('a');
    var i;
    for ( i=0; i < spans.length; i++) {
    	console.log(spans[i].innerText);
    }
    for ( i=0; i < link.length; i++) {
    	console.log(link[i].innerText);
    }
}
