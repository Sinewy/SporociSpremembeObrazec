/**
 * Created by jurez on 05/15/2015.
 */
$(document).ready(function() {

    $("#personPersonalBtn").click(function() {
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
        }
    });

    $("#personBusinessBtn").click(function() {
        if($("#personBusinessBtn").hasClass("notSelected")) {
            $("#personBusinessBtn").removeClass("notSelected");
            if(!$("#personPersonalBtn").hasClass("notSelected")) {
                $("#personPersonalBtn").addClass("notSelected");
            }
            $("#personType").val("pravna");
            if($(".selectActionType").hasClass("hidden")) {
                $(".selectActionType").fadeIn();
                $(".selectActionType").removeClass("hidden");
            }
        }
    });

    $("#newDataBtn").click(function() {
        if($("#newDataBtn").hasClass("notSelected")) {
            $("#newDataBtn").removeClass("notSelected");
            if(!$("#updateDataBtn").hasClass("notSelected")) {
                $("#updateDataBtn").addClass("notSelected");
            }
            $("#actionType").val("vpis");
            if($(".formNewData").hasClass("hidden")) {
                $(".formNewData").fadeIn();
                $(".formNewData").removeClass("hidden");
            }
            if(!$(".formUpdateData").hasClass("hidden")) {
                $(".formUpdateData").fadeOut();
                $(".formUpdateData").addClass("hidden");
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
            if($(".formUpdateData").hasClass("hidden")) {
                $(".formUpdateData").fadeIn();
                $(".formUpdateData").removeClass("hidden");
            }
            if(!$(".formNewData").hasClass("hidden")) {
                $(".formNewData").fadeOut();
                $(".formNewData").addClass("hidden");
            }
        }
    });

    $("#moreInfoPublishing").hover(function() {

    });



});
