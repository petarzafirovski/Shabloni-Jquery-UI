$(document).ready(function (){
    $("#tab2").hide();
    $("#tab3").hide();
    $("#tab1").show();
    var index=1;
    $("#next").click(function (){
        if(index<3){
            index++;
        }else if(index===3){
            return;
        }
        $("#id"+index).css("background","darkorange");
        $("#id"+parseInt(index-1)).css("background","gray");
        $(".panel").hide();
        $("#tab"+index).show();

    })

    $("#prev").click(function (){
        if(index>1){
            index--;
        }
        $("#id"+index).css("background","darkorange");
        $("#id"+parseInt(index+1)).css("background","steelblue");
        $(".panel").hide();
        $("#tab"+index).show();
    })

    $("#error").hide();
    $("#errorPass").hide();
    $("#dialog").dialog({
        autoOpen:true,
        modal:true,
        buttons:{
            OK:function (){
                var pas = $("#pas1").val();
                if(pas.length>=6 && pas.match(/(?=.*[!@#$%^&*()<>?:])/) && pas===$("#pas2").val())
                {
                    $("#dialog").dialog( "close" );
                }
                else{
                    $("#error").show();
                }


            }
        }
    })

    $("#dialog2").dialog({
        autoOpen: false,
        modal: true,
        buttons: {
            Insert:function (){
                $("#contentDIV").append("<p>"+$("#contentInp").val()+"</p>");
                $("#dialog2").dialog( "close" );
            },
            Clear:function (){
                $("#toWho").val("");
                $("#cc").val("");
                $("#subject").val("");
                $("#contentInp").val("");
                $("#p1").find("span").remove();
                $("#p2").find("span").remove();
                $("#p3").find("span").remove();
                $("#contentDIV").find("p").remove();
                $("#dialog2").dialog( "close" );
            }
        }
    })

    $("#insertBtn").click(function (){
        if($("#toWho").val()!=="" && $("#cc").val()!=="" && $("#subject").val()!==""){
            $("#p1").append("<span>"+$("#toWho").val()+"</span>");
            $("#p2").append("<span>"+$("#cc").val()+"</span>");
            $("#p3").append("<span>"+$("#subject").val()+"</span>");
            $("#dialog2").dialog("open");
        }
    })

    $("#dialog3").dialog({
        autoOpen:false,
        modal:true,
        buttons: {
            OK: function () {
                if ($("#pas1").val() === $("#passwordValidation").val()) {
                    $("#dialog3").dialog("close");
                    $(".passValidation").val("");
                    $("#selectable").append("<li class='selected'>" + "<div>" + "To: " + $("#toWho").val() + "<br>" + "Subject: " + $("#subject").val() + "</div>" + "</li>")
                } else {
                    $("#errorPass").show();
                }
            }
        }
    })

    $("#sendBtn").click(function (){
        $("#dialog3").dialog("open");
    })

    $("#selectable").selectable();

    $("#deleteBtn").click(function (){
        $("li.ui-selected").remove();
    })

    $(".selectable").scroll();

})



