$(document).ready(function () {
   $("#msg").hide();
    $("#b2").click(function () { 
       $("#b1").on("click", function(){
           $("#msg").show();
        });
        $("#b1").text("Bonton debloquer");
    });
    $("#b3").click(function(){
        $("#b1").off("click");
        $("#b1").text("Bouton bloquer");
        $("#msg").hide();
    });
});