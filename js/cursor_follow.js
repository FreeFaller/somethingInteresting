var picture = $("#picture");
$("#container").on("mousemove", function(e) {
    var w = -($(window).innerWidth() / 2 - e.pageX) / 15,
        h = ($(window).innerHeight() / 2 - e.pageY) / 15;
    picture.attr("style", 
    	"transform: rotateY(" + w + "deg) rotateX(" + h + "deg);-webkit-transform: rotateY(" + w + "deg) rotateX(" + h + "deg);-moz-transform: rotateY(" + w + "deg) rotateX(" + h + "deg)")
})