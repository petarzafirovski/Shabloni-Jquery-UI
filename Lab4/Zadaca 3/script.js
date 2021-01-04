$(document).ready(function () {
   var availableTags = [
       {
           value: "oblivion",
           label: "Oblivion",
           description: "A veteran assigned to extract Earth's remaining resources begins to question what he knows about his mission and himself."
       },
       {
           value: "enders-game",
           label: "Ender's Game",
           description: "Young Ender Wiggin is recruited by the International Military to lead the fight against the Formics, a genocidal alien race which nearly annihilated the human race in a previous invasion."
       },
       {
           value: "elysium",
           label: "Elysium",
           description: "In the year 2154, the very wealthy live on a man-made space station while the rest of the population resides on a ruined Earth. A man takes on a mission that could bring equality to the polarized worlds."
       }
   ];
    $("#inp").autocomplete({
        minLength:0,
        source: availableTags,
        focus:function (event,ui){
            $("#inp").val(ui.item.label);
            return false;
        },
        select: function( event, ui ) {
            $("#inp").val(ui.item.label);
            $( "#dv" ).html( ui.item.description );
            return false
        }

    })
        .autocomplete( "instance" )._renderItem = function( ul, item ) {
       return $( "<li>" )
            .append( "<div>" + item.label + "<br>" + item.description + "</div>" )
            .appendTo( ul );
    };
})


