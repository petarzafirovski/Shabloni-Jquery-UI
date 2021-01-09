$(document).ready(function (){
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
                $("#contentDIV").append("<span>"+$("#contentInp").val()+"</span>");
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
                $("#contentDIV").find("span").remove();
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
        buttons:{
            OK:function (){
                if ($("#pas1").val()===$("#passwordValidation").val()){
                    $("#dialog3").dialog( "close" );
                    $(".passValidation").val("");

                }
                else{
                    $("#errorPass").show();
                }

            }
        }
    })
    $("#sendBtn").click(function (){
        $("#dialog3").dialog("open");
    })
})