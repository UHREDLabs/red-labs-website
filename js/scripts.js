// Shows and hides "Class" boxes on "Accelerator" page
$(document).ready(function() {
    var halftime = 200;
    var fadeOutObject = $("#holding-stuff").children()
    
    $(".square").click(function() {
        fadeOutObject.fadeOut(halftime);
        if (this.id === "class-one-show") {
            $("#class-one").delay(halftime).fadeIn(halftime);
        } else if (this.id === "class-two-show") {
            $("#class-two").delay(halftime).fadeIn(halftime);
        } else if (this.id === "class-three-show") {
            $("#class-three").delay(halftime).fadeIn(halftime);
        } else if (this.id === "class-four-show") {
            $("#class-four").delay(halftime).fadeIn(halftime);
        };
    });
    
    $(".class-hide").click(function() {
        fadeOutObject.fadeOut(halftime);
        $(".squares").delay(halftime).fadeIn(halftime);
    });
});