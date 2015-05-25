/**
 * Created by jurez on 05/15/2015.
 */
$(document).ready(function() {

    var fadeOutDone = $.Deferred();
    var numOfWorkFields = 1;
    var maxNumOfWorkFields = 5;

    $("#personPersonalBtn").click(function() {
        resetDataType();
        if($("#personPersonalBtn").hasClass("notSelected")) {
            $("#personPersonalBtn").removeClass("notSelected");
            if(!$("#personBusinessBtn").hasClass("notSelected")) {
                $("#personBusinessBtn").addClass("notSelected");
            }
            $("#personType").val("fizicna");
            if($(".selectActionType").hasClass("hidden")) {
                $(".selectActionType").fadeIn();
                $(".selectActionType").removeClass("hidden");
            }
            personType = "typePerson";
        }
    });

    $("#personBusinessBtn").click(function() {
        if($("#personBusinessBtn").hasClass("notSelected")) {
            removeForm();
            $.when(fadeOutDone).then(function(removeDone) {
                if(!$(".selectActionType").hasClass("hidden")) {
                    $(".selectActionType").fadeOut(function() {
                        $(".selectActionType").addClass("hidden");
                        $("#formDataBusiness").load("formDataBusiness.html #theForm", function() {
                            $("#formDataBusiness").fadeIn();
                            $("#formDataBusiness").removeClass("hidden");
                            disableFormFields();
                            addButtonFuctionality();
                        });
                    });
                } else {
                    $("#formDataBusiness").load("formDataBusiness.html #theForm", function() {
                        $("#formDataBusiness").fadeIn();
                        $("#formDataBusiness").removeClass("hidden");
                        disableFormFields();
                        addButtonFuctionality();
                    });
                    if($("footer").hasClass("sticky")) {
                        $("footer").removeClass("sticky");
                    }
                }
            });

            $("#personBusinessBtn").removeClass("notSelected");
            if(!$("#personPersonalBtn").hasClass("notSelected")) {
                $("#personPersonalBtn").addClass("notSelected");
            }
            $("#personType").val("pravna");
        }
    });

    $("#newDataBtn").click(function() {
        if($("#newDataBtn").hasClass("notSelected")) {
            $("#newDataBtn").removeClass("notSelected");
            if(!$("#updateDataBtn").hasClass("notSelected")) {
                $("#updateDataBtn").addClass("notSelected");
            }
            $("#actionType").val("vpis");
            removeForm();
            $.when(fadeOutDone).then(function(removeDone) {
                $("#formNewDataPerson").load("formNewDataPerson.html #theForm", function() {
                    $("#formNewDataPerson").fadeIn();
                    $("#formNewDataPerson").removeClass("hidden");
                });

            });
            if($("footer").hasClass("sticky")) {
                $("footer").removeClass("sticky");
            }
        }
    });

    $("#updateDataBtn").click(function() {
        if($("#updateDataBtn").hasClass("notSelected")) {
            $("#updateDataBtn").removeClass("notSelected");
            if(!$("#newDataBtn").hasClass("notSelected")) {
                $("#newDataBtn").addClass("notSelected");
            }
            $("#actionType").val("sprememba");
            removeForm();
            $.when(fadeOutDone).then(function(removeDone) {
                $("#formUpdateDataPerson").load("formUpdateDataPerson.html #theForm", function() {
                    $("#formUpdateDataPerson").fadeIn();
                    $("#formUpdateDataPerson").removeClass("hidden");
                    disableFormFields4Business();
                    addButtonFuctionality4Business();
                });
            });
            if($("footer").hasClass("sticky")) {
                $("footer").removeClass("sticky");
            }
        }
    });

    function resetDataType() {
        removeForm();
        if(!$("#newDataBtn").hasClass("notSelected")) {
            $("#newDataBtn").addClass("notSelected");
        }
        if(!$("#updateDataBtn").hasClass("notSelected")) {
            $("#updateDataBtn").addClass("notSelected");
        }
    }

    function removeForm() {
        fadeOutDone = $.Deferred();
        if(!$("#theForm").length == 0) {
            if(!$("#formNewDataPerson").hasClass("hidden")) {
                $("#formNewDataPerson").fadeOut(function() {
                    $("#formNewDataPerson").addClass("hidden");
                    $("#theForm").remove();
                    fadeOutDone.resolve(true);
                });
            }
            if(!$("#formUpdateDataPerson").hasClass("hidden")) {
                $("#formUpdateDataPerson").fadeOut(function() {
                    $("#formUpdateDataPerson").addClass("hidden");
                    $("#theForm").remove();
                    fadeOutDone.resolve(true);
                });
            }
            if(!$("#formDataBusiness").hasClass("hidden")) {
                $("#formDataBusiness").fadeOut(function() {
                    $("#formDataBusiness").addClass("hidden");
                    $("#theForm").remove();
                    fadeOutDone.resolve(true);
                });
            }
        } else {
            fadeOutDone.resolve(true);
        }
    }

    function addButtonFuctionality() {
        $("#addFieldBtn").click(function() {
            if(numOfWorkFields < maxNumOfWorkFields) {
                numOfWorkFields++;
                $("#workFields").append(prepareNewWorkField(numOfWorkFields));
            }
        });

        $("#removeFieldBtn").click(function() {
            if(numOfWorkFields > 1) {
                $("#businessField" + numOfWorkFields).remove();
                numOfWorkFields--;
            } else if(numOfWorkFields == 1) {
                $("#businessField1 option:eq(0)").prop("selected", true);
            }
        });

        $("#searchForCompany").click(function() {
            if($("#taxNum").val() != "") {
                $("#businessUnit").prop("disabled", false);
            }
        });

        $("#businessUnit").change(function() {
            if($("#businessUnit option:eq(0)").prop("selected")) {
                $("#mainFormBusiness").children().prop("disabled", true);
                $("#workFields").children().prop("disabled", true);
                $(".inputFields").children().prop("disabled", true);
                $("#iAgree").prop("disabled", true);
            } else {
                $("#mainFormBusiness").children().prop("disabled", false);
                $("#workFields").children().prop("disabled", false);
                $(".inputFields").children().prop("disabled", false);
                $("#iAgree").prop("disabled", false);
            }
        });
    }

    function addButtonFuctionality4Business() {
        $("#searchForPhoneNumber").click(function() {
            if($("#phoneNumber").val() != "") {
                $("#mainFormBusiness").children().prop("disabled", false);
                $("#iAgree").prop("disabled", false);
                $(".inputFields").children().prop("disabled", false);
            }
        });

    }

    function disableFormFields() {
        $("#businessUnit").prop("disabled", true);
        $("#mainFormBusiness").children().prop("disabled", true);
        $("#workFields").children().prop("disabled", true);
        $(".inputFields").children().prop("disabled", true);
        $("#iAgree").prop("disabled", true);
    }

    function disableFormFields4Business() {
        $("#mainFormBusiness").children().prop("disabled", true);
        $("#iAgree").prop("disabled", true);
        $(".inputFields").children().prop("disabled", true);
    }

    function prepareNewWorkField(num) {
        var element = "";
        element += "<select id='businessField" + num + "' name='businessField'" + num + "'>";
        element += "<option value='0' selected>Izberite dejavnost</option>";
        element += "<option value='1'>dejavnost 1</option>";
        element += "<option value='2'>dejavnost 2</option>";
        element += "<option value='3'>dejavnost 3</option>";
        element += "</select>";
        return element;
    }

});
