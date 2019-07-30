function randomcolor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

var $ = function(id) {
    return document.getElementById(id);
};

window.onload = function() {
	var temp = randomcolor();
	$("colorbox1").style.background = temp;
	$("colorbox1value").innerHTML = temp;
	var temp = randomcolor();
	$("colorbox2").style.background = temp;
	$("colorbox2value").innerHTML = temp;
	var temp = randomcolor();
	$("colorbox3").style.background = temp;
	$("colorbox3value").innerHTML = temp;
}
