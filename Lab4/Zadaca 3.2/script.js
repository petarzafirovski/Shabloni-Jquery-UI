$(document).ready(function (){
    var code =$("#code"), airline = $("#airline"),to=$("#toWhere"),
        klas=$("#dropdown").datepicker();

    function addUser(){
                        if($.isNumeric($("#code").val())){
                            return $("#users tbody").append(`<tr><td>${code.val()}</td><td>${airline.val()}</td><td>${to.val()}</td><td>${klas.val()}</td></tr>`)
                        }
                        else{
                            alert("Code needs to be consisted only of digits!")

                        }
    }

    $("#dialog").dialog({
        autoOpen:false,
        height:550,
        width:350,
        modal:true,
        buttons:{
            "Додади": function (){
                if(code.val()!=="" && airline.val()!=="" && to.val()!==""){
                    addUser();
                    $("#dialog").dialog('close');
                    $("#code").val(""), $("#airline").val(""), $("#toWhere").val("");
                }
                $('Додади').attr("disabled",true);
            },
            "Откажи": function (){
                $("#dialog").dialog('close')
                $("#code").val(""), $("#airline").val(""), $("#toWhere").val("");


            }
        }
    })

    $("#create-user").button().click(function (){
        $("#dialog").dialog("open")
    })

})

