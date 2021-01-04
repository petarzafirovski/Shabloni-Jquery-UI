$(document).ready(function(){
    $(".spance").hide();
    $("#date").datepicker();
    var newHtml=document.createElement("span");
    $("li").on('click', function (event) {

        $target = $(event.target);
        $target.addClass('ui-selected');
        $(newHtml).append($target.text()+", ");
    });

    $("#btn").click(function(){

        if($("#name").val()==="" || $("#surname").val()==="" || $("#password").val()=="" || $("#date").val()===""){
            $(".spance").show();
            $("input").addClass("inputError")
        }
        else{
            $("#dialog").dialog("open")
            $(".spance").hide();
            $("input").removeClass("inputError")
            $("#dialogName").append("<span class='test'>"+$("#name").val()+"</span>")
            $("#dialogSurname").append("<span class='test'>"+$("#surname").val()+"</span>")
            $("#dialogPass").append("<span class='test'>"+$("#password").val()+"</span>")
            $("#dialogDate").append("<span class='test'>"+$("#date").val()+"</span>")
            $("#dialogHobbies").append(newHtml);
        }
    })
    $("#dialog").dialog({
        autoOpen:false,
        modal:true,
        buttons:{
            "Close":function(){
                $("#dialog").dialog("close");
                $("#name").val(""),$("#surname").val(""),$("#password").val(""),$("#date").val(""),
                    $(".test").remove();

            }
        }

    })

})