$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

// Function to verify that the phone number is correct.
function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function validateCreditCard(txtCreditCard) {
    var a = document.getElementById(txtCreditCard).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /^\(?([0-9]{4})\)?[-. ]?([0-9]{4})?[-. ]?([0-9]{4})?[-. ]?([0-9]{4})$/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDates = ["06/29/2020", "07/07/2020", "07/10/2020"];
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays, Saturday is Day 6
    if (date.getDay() === 0 || date.getDay() === 6)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);

    //var expertChosen = $("#expert").find(":selected").val();
    return [unavailableDates.indexOf(string) === -1]
}

// HERE, JQuery "LISTENING" starts
$(document).ready(function () {

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#phone").on("change", function () {
        if (!validatePhone("phone")) {
            alert("Wrong format for phone, Please in the format XXX-XXX-XXXX or XXX XXX XXXX");
            $("#phone").val("123-456-7890");
            $("#phone").addClass("error");
        }
        else {
            $("#phone").removeClass("error");
        }
    });

    // Credit card validation
    $("#credit").on("change", function () {
        if (!validateCreditCard("credit")) {
            alert("Wrong format for phone, Please in the format xxxx xxxx xxxx xxxx");
            $("#credit").val("1234 1234 1234 1234");
            $("#credit").addClass("error");
        }
        else {
            $("#credit").removeClass("error");
        }
    });

    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery
    // You can try different themes (the names are under the calendars) / This is Excite Bike
    // To use a different theme you must include its css in your HTML file.
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/

    $("#dateInput").datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noMon,
            beforeShowDay: disableDates,
            beforeShowDay: function (date) {
                return [date.getDay() != 1 && date.getDay() != 0 && date.getDay() != 6];
            }
        }
    );

    $("#expert").on("change", function () {
        // destroys the datepicker to create another one with different settings
        $("#dateInput").datepicker("destroy");
        var expertChosen = $("#expert").find(":selected").val();
        if (expertChosen == "judy") {
            $("#dateInput").datepicker(
                {
                    dateFormat: setDateFormat,
                    // no calendar before June 1rst 2020
                    minDate: new Date('06/01/2020'),
                    maxDate: '+4M',
                    // used to disable some dates
                    beforeShowDay: $.datepicker.noMon,
                    beforeShowDay: disableDates,
                    beforeShowDay: function (date) {
                        return [date.getDay() != 1 && date.getDay() != 0 && date.getDay() != 6];
                    }
                }
            );
        }
        else if (expertChosen == "kyle") {
            $("#dateInput").datepicker(
                {
                    dateFormat: setDateFormat,
                    // no calendar before June 1rst 2020
                    minDate: new Date('06/01/2020'),
                    maxDate: '+4M',
                    // used to disable some dates
                    beforeShowDay: $.datepicker.noWeekends,
                    beforeShowDay: disableDates,
                    beforeShowDay: function (date) {
                        return [date.getDay() != 2 && date.getDay() != 3 && date.getDay() != 0 && date.getDay() != 6];
                    }
                }
            );
        }
        else if (expertChosen == "lisa") {
            $("#dateInput").datepicker(
                {
                    dateFormat: setDateFormat,
                    // no calendar before June 1rst 2020
                    minDate: new Date('06/01/2020'),
                    maxDate: '+4M',
                    // used to disable some dates
                    beforeShowDay: $.datepicker.noWeekends,
                    beforeShowDay: disableDates,
                    beforeShowDay: function (date) {
                        return [date.getDay() != 4 && date.getDay() != 5 && date.getDay() != 0 && date.getDay() != 6];
                    }
                }
            );
        }
    });

    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put
    $("#debit").on("mouseenter", function () {
        $("#debit").addClass("showInput");
    });

    $("#debit").on("mouseleave", function () {
        $("#debit").removeClass("showInput");
    });

    // https://jqueryui.com/tooltip/
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#debit").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });

    // Book Appointment Button
    $("#bookButton").click(function () {
        var expertChosen = $("#expert").find(":selected").val();
        alert("Appointment successfully booked with " + expertChosen + ".");
    });

});