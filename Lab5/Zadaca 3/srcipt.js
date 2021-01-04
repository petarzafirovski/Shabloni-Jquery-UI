$(document).ready(function (){

    $("#addBtn").click(function (){
        if($("#inputField").val()!==""){
            $("#select ul").append("<li class='liItem selective'>"+$("#inputField").val()+"</li>");
        }
    })

        $("#delete").click(function(){
                $(".ui-selected").hide();
        })

    $( "#selectable" ).bind("mousedown", function(event, ui) {
        event.ctrlKey = true;

    });

    $( "#selectable" ).selectable({
        stop: function() {
            var result = $( "#result" ).empty();
            $( ".ui-selected", this ).each(function() {
                var index = $( "#selectable").find("li" ).index( this );
                result.append($(this).text() + " ")
            });
        }
    });
})



