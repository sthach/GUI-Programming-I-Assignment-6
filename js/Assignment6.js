/*
Name: Sony Thach 
Email: sony_thach@student.uml.edu   
Comp.4610, GUI Programming I   
Description: Assignment 6
*/
$(document).ready(function () {

    /* bind Parsley to forms for input validations */
    $('#rowcolumnsForm').parsley();
    $('#priceEntryForm').parsley();
    $('#mpgEntryForm').parsley();
    $('#financeForm').parsley();
    $('#leaseForm').parsley();

    /* hide tabs */
    $("#tabs").tabs();
    $("#tabs").hide();


    /* sliders for inputs */
    $("#numberOfColumnsSlider").slider({
        range: "max",
        min: 1,
        max: 20,
        slide: function (e, ui) {
            $("#numberOfColumns").val(ui.value);
        }
    });
    $("#numberOfColumns").change(function () {
        var input = $("#numberOfColumns").val();
        $("#numberOfColumnsSlider").slider("value", input);
    });

    /* slider for row input */
    $("#numberOfRowsSlider").slider({
        range: "max",
        min: 1,
        max: 20,
        slide: function (e, ui) {
            $("#numberOfRows").val(ui.value);
        }
    });
    $("#numberOfRows").change(function () {
        var input = $("#numberOfRows").val();
        $("#numberOfRowsSlider").slider("value", input);
    });

    /* 
    slider for finance form inputs 
    */
    $("#estimatedMilesDriven1Slider").slider({
                range: "max",
        min: 1,
        max: 50000,
        slide: function (e, ui) {
            $("#estimatedMilesDriven1").val(ui.value);
        }
    });
    $("#estimatedMilesDriven1").change(function () {
        var input = $("#estimatedMilesDriven1").val();
        $("#estimatedMilesDriven1Slider").slider("value", input);
    });
    $("#costPerGallon1Slider").slider({
                range: "max",
        min: .01,
        max: 20,
        slide: function (e, ui) {
            $("#costPerGallon1").val(ui.value);
        }
    });
    $("#costPerGallon1").change(function () {
        var input = $("#costPerGallon1").val();
        $("#costPerGallon1Slider").slider("value", input);
    });
    $("#interestRate1Slider").slider({
        range: "max",
        min: 0,
        max: 100,
        slide: function (e, ui) {
            $("#interestRate1").val(ui.value);
        }
    });
    $("#interestRate1").change(function () {
        var input = $("#interestRate1").val();
        $("#interestRate1Slider").slider("value", input);
    });
    $("#monthsOfPayment1Slider").slider({
        range: "max",
        min: 1,
        max: 100,
        slide: function (e, ui) {
            $("#monthsOfPayment1").val(ui.value);
        }
    });
    $("#monthsOfPayment1").change(function () {
        var input = $("#monthsOfPayment1").val();
        $("#monthsOfPayment1Slider").slider("value", input);
    });

    /* 
    sliders for lease form inputs 
    */
    $("#estimatedMilesDriven2Slider").slider({
        range: "max",
        min: 1,
        max: 50000,
        slide: function (e, ui) {
            $("#estimatedMilesDriven2").val(ui.value);
        }
    });
    $("#estimatedMilesDriven2").change(function () {
        var input = $("#estimatedMilesDriven2").val();
        $("#estimatedMilesDriven2Slider").slider("value", input);
    });
    $("#milesDrivenAllowedSlider").slider({
        range: "max",
        min: 1,
        max: 100000,
        slide: function (e, ui) {
            $("#milesDrivenAllowed").val(ui.value);
        }
    });
    $("#milesDrivenAllowed").change(function () {
        var input = $("#milesDrivenAllowed").val();
        $("#milesDrivenAllowedSlider").slider("value", input);
    });
    $("#costPerGallon2Slider").slider({
        range: "max",
        min: 0.1,
        max: 20,
        slide: function (e, ui) {
            $("#costPerGallon2").val(ui.value);
        }
    });
    $("#costPerGallon2").change(function () {
        var input = $("#costPerGallon2").val();
        $("#costPerGallon2Slider").slider("value", input);
    });

    $("#leaseMonthlyCostSlider").slider({
        range: "max",
        min: 1,
        max: 10000,
        slide: function (e, ui) {
            $("#leaseMonthlyCost").val(ui.value);
        }
    });
    $("#leaseMonthlyCost").change(function () {
        var input = $("#leaseMonthlyCost").val();
        $("#leaseMonthlyCostSlider").slider("value", input);
    });
    $("#costPerAdditionalMileSlider").slider({
        range: "max",
        min: 1,
        max: 200,
        slide: function (e, ui) {
            $("#costPerAdditionalMile").val(ui.value);
        }
    });
    $("#costPerAdditionalMile").change(function () {
        var input = $("#costPerAdditionalMile").val();
        $("#costPerAdditionalMileSlider").slider("value", input);
    });
    $("#monthsOfPayment2Slider").slider({
        range: "max",
        min: 1,
        max: 100,
        slide: function (e, ui) {
            $("#monthsOfPayment2").val(ui.value);
        }
    });
    $("#monthsOfPayment2").change(function () {
        var input = $("#monthsOfPayment2").val();
        $("#monthsOfPayment2Slider").slider("value", input);
    });



    /* submit number of prices and mpgs along with purchase options of finance or lease */
    $("#rowColumnsForm").on("submit", function (event) {
        event.preventDefault();

        $("#financeTable tr").remove();
        $("#leaseTable tr").remove();

        var columns = 0;
        var rows = 0;

        /*
        obtain how many inputs will enter for prices and miles per gallon 
        */
        columns = document.getElementById("numberOfColumns").value;
        console.log("FIRSTFORM Prices: " + columns);
        rows = document.getElementById("numberOfRows").value;
        console.log("FIRSTFORM Columns: " + rows);


        var htmlToAdd = "";

        $('#priceEntryForm').parsley().destroy();
        var priceForm = document.getElementById("priceEntryForm");

        /* create labels and fields for user to input prices */
        for (var i = 1; i < parseInt(columns, 10) + 1; i++) {
            htmlToAdd += "<div><label for=\"price" + i + "\" class= \"dynamicColumnInput\"> Price" + i + ":</label>";
            htmlToAdd += "<input id=\"price" + i + "\" class= \"dynamicColumnInput\"><br>";
            htmlToAdd += "<div class=\"generatedPriceSlider\" id=\"price" + i + "Slider\"></div></div>"
            priceForm.innerHTML = htmlToAdd;

        }

        /* sliders for dynamically generated price inputs */
        $(".generatedPriceSlider").slider({
            range: "max",
            min: 1,
            max: 200000,
            slide: function (e, ui) {

                var input = $(this).parent().find("input");
                input.val(ui.value);
            }
        });
        $(this).parent().find("input").change(function () {
            var input = $(this).parent().find("input").val();
            $(this).parent().find(".generatedPriceSlider").slider("value", input);
        });

        // add validator attributes to dynamically created price input fields
        for (var i = 1; i < parseInt(columns, 10) + 1; i++) {
            $('#price' + i).attr("data-parsley-required", "true");
            $('#price' + i).attr("data-parsley-pattern", "\\d+\\.?\\d{0,2}$");
            $('#price' + i).attr("min", ".01");
        }
        $('#priceEntryForm').parsley();

        $('#priceEntryForm').css('display', 'block');
        console.log(document.getElementById("priceEntryForm").innerHTML);


        htmlToAdd = '';
        $('#mpgEntryForm').parsley().destroy();
        var mpgForm = document.getElementById("mpgEntryForm");

        /* create input and fields for user to input miles per gallon values */
        for (var i = 1; i < parseInt(rows, 10) + 1; i++) {
            htmlToAdd += "<div><label for=\"mpg" + i + "\"> MPG" + i + ":</label>"
            htmlToAdd += "<input id=\"mpg" + i + "\" type=\"number\"><br>";
            htmlToAdd += "<div class=\"generatedMpgSlider\" id=\"price" + i + "Slider\"></div></div>"
            mpgForm.innerHTML = htmlToAdd;
        }

        /* silders for dynamically generated Mpg inputs */
        $(".generatedMpgSlider").slider({
            range: "max",
            min: 1,
            max: 100,
            slide: function (e, ui) {

                var input = $(this).parent().find("input");
                input.val(ui.value);
            }
        });
        $(this).parent().find("input").change(function () {
            var input = $(this).parent().find("input").val();
            $(this).parent().find(".generatedMpgSlider").slider("value", input);
        });
        // add validator attributes to dynamically created price input fields
        for (var i = 1; i < parseInt(rows, 10) + 1; i++) {
            $('#mpg' + i).attr("data-parsley-required", "true");
            $('#mpg' + i).attr("data-parsley-type", "digits");
            $('#mpg' + i).attr("min", "1");

        }
        $('#mpgEntryForm').parsley();

        $('#mpgEntryForm').css('display', 'block');

        $('#featuresForm').css('display', 'table');

        var financeCheck = document.getElementById("finance").checked;
        var leaseCheck = document.getElementById("lease").checked;

        /* if finance option selected then show finance form to user */
        if (financeCheck === true) {
            document.getElementById("financeForm").style.display = "table";
            document.getElementById("leaseForm").style.display = "none";
            document.getElementById("leaseTable").style.display = "none";



            $("#financeForm").on("submit", function (event) {
                event.preventDefault();
                htmlToAdd = "";

                $("#tabs").show();
$("#tabs ul li").css('visibility' , 'visible');
                // validate entries for prices, mpgs, and purchasing details
                $("#priceEntryForm").parsley().validate();
                $('#mpgEntryForm').parsley().validate();

                if (($("#priceEntryForm").parsley().isValid()) === false || ($('#mpgEntryForm').parsley().isValid()) === false) {
                    return false;
                }

                /* if no features selected */
                if (document.getElementById("gpsCheckBox").checked === false && document.getElementById("heatedSeatsCheckBox").checked === false) {

                    document.getElementById("financeTable").style.display = "table";
                    document.getElementById("leaseTable").style.display = "none";
                    $('[href="#noFeatureTab"]').closest('li').show();
                    $('[href="#gpsFeatureTab"]').closest('li').hide();
                    $('[href="#heatedSeatsFeatureTab"]').closest('li').hide();
                    $('[href="#bothFeaturesTab"]').closest('li').hide();


                    /* F1 no features*/
                    /* call function to calculate cost/month and cost/mile and inflate table */
                    inflateFinanceTable("financeTable");

                    // hide table if input value is changed
                    $('#priceEntryForm input').change(function () {
                        document.getElementById("financeTable").style.display = "none";
                        $("#tabs").hide();
                    });

                    $('#mpgEntryForm input').change(function () {
                        document.getElementById("financeTable").style.display = "none";
                        $("#tabs").hide();

                    });
                    $('#financeForm input').change(function () {
                        document.getElementById("financeTable").style.display = "none";
                        $("#tabs").hide();

                    });
                }


                /* if only GPS feature selected */
                if (document.getElementById("gpsCheckBox").checked === true && document.getElementById("heatedSeatsCheckBox").checked === false) {
                    document.getElementById("financeGpsTable").style.display = "table";
                    document.getElementById("leaseGpsTable").style.display = "none";
                    document.getElementById("financeTable").style.display = "table";
                    document.getElementById("leaseTable").style.display = "none";
                    $('[href="#noFeatureTab"]').closest('li').show();
                    $('[href="#gpsFeatureTab"]').closest('li').show();
                    $('[href="#heatedSeatsFeatureTab"]').closest('li').hide();
                    $('[href="#bothFeaturesTab"]').closest('li').hide();

                    /* 
                    F2 GPS feature 
                    */
                    /* call function to calculate cost/month and cost/mile and inflate table */
                    inflateFinanceTable("financeTable");
                    inflateFinanceTable("financeGpsTable");

                    // hide table if input value is changed
                    $('#priceEntryForm input').change(function () {
                        document.getElementById("financeGpsTable").style.display = "none";
                        $("#tabs").hide();
                    });

                    $('#mpgEntryForm input').change(function () {
                        document.getElementById("financeGpsTable").style.display = "none";
                        $("#tabs").hide();

                    });
                    $('#financeForm input').change(function () {
                        document.getElementById("financeGpsTable").style.display = "none";
                        $("#tabs").hide();
                    });
                }

                /* if heated seats feature selected only */
                if (document.getElementById("gpsCheckBox").checked === false && document.getElementById("heatedSeatsCheckBox").checked === true) {
                    document.getElementById("financeHeatedSeatsTable").style.display = "table";
                    document.getElementById("leaseHeatedSeatsTable").style.display = "none";
                    document.getElementById("financeTable").style.display = "table";
                    document.getElementById("leaseTable").style.display = "none";
                    $('[href="#noFeatureTab"]').closest('li').show();
                    $('[href="#gpsFeatureTab"]').closest('li').hide();
                    $('[href="#heatedSeatsFeatureTab"]').closest('li').show();
                    $('[href="#bothFeaturesTab"]').closest('li').hide();

                    /* 
                    F3 heat only 
                    */
                    /* F1 */
                    /* call function to calculate cost/month and cost/mile and inflate table */
                    inflateFinanceTable("financeTable");
                    inflateFinanceTable("financeHeatedSeatsTable");

                    // hide table if input value is changed
                    $('#priceEntryForm input').change(function () {
                        document.getElementById("financeHeatedSeatsTable").style.display = "none";
                    });

                    $('#mpgEntryForm input').change(function () {
                        document.getElementById("financeHeatedSeatsTable").style.display = "none";

                    });
                    $('#financeForm input').change(function () {
                        document.getElementById("financeHeatedSeatsTable").style.display = "none";

                    });
                }

                /* if both GPS and heated seats feature selected  */
                if (document.getElementById("gpsCheckBox").checked === true && document.getElementById("heatedSeatsCheckBox").checked === true) {
                    document.getElementById("financeBothTable").style.display = "table";
                    document.getElementById("leaseBothTable").style.display = "none";
                    document.getElementById("financeTable").style.display = "table";
                    document.getElementById("leaseTable").style.display = "none";
                    document.getElementById("financeGpsTable").style.display = "table";
                    document.getElementById("leaseGpsTable").style.display = "none";
                    document.getElementById("financeHeatedSeatsTable").style.display = "table";
                    document.getElementById("leaseHeatedSeatsTable").style.display = "none";
                    $('[href="#noFeatureTab"]').closest('li').show();
                    $('[href="#gpsFeatureTab"]').closest('li').show();
                    $('[href="#heatedSeatsFeatureTab"]').closest('li').show();
                    $('[href="#bothFeaturesTab"]').closest('li').show();

                    /*
                    F4 GPS and heated seats calls F1?, F2?, and F3?
                    */
                    /* F1 */
                    inflateFinanceTable("financeTable");
                    inflateFinanceTable("financeGpsTable");
                    inflateFinanceTable("financeHeatedSeatsTable");
                    inflateFinanceTable("financeBothTable");

                    // hide table if input value is changed
                    $('#priceEntryForm input').change(function () {
                        document.getElementById("financeBothTable").style.display = "none";
                        $("#tabs").hide();

                    });

                    $('#mpgEntryForm input').change(function () {
                        document.getElementById("financeBothTable").style.display = "none";
                        $("#tabs").hide();
                    });
                    $('#financeForm input').change(function () {
                        document.getElementById("financeBothTable").style.display = "none";
                        $("#tabs").hide();

                    });
                }

                function inflateFinanceTable(tableName) {

                    /* store table header html in a string */
                    htmlToAdd = "<tr><th>Price/Fuel Consumption</th>";

                    $("#" + tableName).html(htmlToAdd);

                    /* store column headers html in string */
                    columns = document.getElementById("numberOfColumns").value;
                    for (var i = 1; i < parseInt(columns) + 1; i++) {
                        htmlToAdd += "<td>Price" + i + "</td>";
                    }
                    htmlToAdd += "</tr>";
                    /* insert table headers in table html */
                    $("#" + tableName).html(htmlToAdd);

                    rows = document.getElementById("numberOfRows").value;

                    /* store row headers and body cells html in string */
                    for (var i = 1; i < parseInt(rows) + 1; i++) {

                        htmlToAdd += "<tr>";
                        $("#" + tableName).html(htmlToAdd);

                        for (var j = 1; j < parseInt(columns) + 1; j++) {
                            if (parseInt(j) === 1) {
                                htmlToAdd += "<td>MPG" + i + "</td>";
                            }
                            htmlToAdd += "<td></td>";
                        }
                        htmlToAdd += "</tr>";
                        console.log("Table: " + htmlToAdd);
                        /* add table row headers and body html into table html */
                        $("#" + tableName).html(htmlToAdd);
                    }
                    /*
                    variables that will be used to calculate cost per month and cost per mile
                    */

                    var interestPaid = 0;
                    var totalGasCost = 0;
                    var totalPayment = 0;
                    var costPerMile = 0;
                    var gasCostPerMonth = 0;
                    var output = "";
                    var mpgInput = "";
                    var priceInput = 0;
                    var featuresCost = 0;
                    var interestRate = ((document.getElementById("interestRate1").value) / 100);
                    var estimatedMilesDriven = document.getElementById("estimatedMilesDriven1").value;
                    var costPerGallon = document.getElementById("costPerGallon1").value;
                    var monthsOfPayment = document.getElementById("monthsOfPayment1").value;
                    var interestPaid = 0;

                    /* 
                    nested for loop that calulates cost per month and cost per mile for each combination of price and miles per gallon and insert them into the table cells.
                    */
                    for (var i = 1; i < parseInt(rows) + 1; i++) {
                        for (var j = 1; j < parseInt(columns) + 1; j++) {
                            mpgInput = document.getElementById(("mpg" + i)).value;
                            priceInput = document.getElementById(("price" + j)).value;

                            /* add to price paid depending on features selected */
                            switch (tableName) {
                                case "financeTable":
                                    break;
                                case "financeGpsTable":
                                    priceInput = parseInt(priceInput, 10) + 500;
                                    break;
                                case "financeHeatedSeatsTable":
                                    priceInput = parseInt(priceInput, 10) + 200;
                                    break;
                                case "financeBothTable":
                                    priceInput = parseInt(priceInput, 10) + 500;
                                    priceInput = parseInt(priceInput, 10) + 200;
                                    break;
                            }
                            interestPaid = (priceInput * interestRate * monthsOfPayment);
                            gasCostPerMonth = ((estimatedMilesDriven / 12) / mpgInput) * costPerGallon;
                            totalGasCost = ((estimatedMilesDriven / mpgInput) * costPerGallon).toFixed(2);
                            totalPayment = parseInt(priceInput) + interestPaid + gasCostPerMonth;
                            costPerMonth = (totalPayment / monthsOfPayment).toFixed(2);
                            costPerMile = (totalGasCost / estimatedMilesDriven).toFixed(2);
                            output = "Cost Per Month: " + costPerMonth + "<br>Cost Per Mile: " + costPerMile;

                            /* insert results into proper table cell*/
                            $("#" + tableName + " tr:nth-child(" + (parseInt(i) + 1) + ") td:nth-child(" + (parseInt(j) + 1) + ")").html(output);

                        }
                    }
                }
            });

        }
        /* if lease option selected then show finance form to user */
        if (leaseCheck === true) {
            document.getElementById("leaseForm").style.display = "table";
            document.getElementById("financeForm").style.display = "none";
            document.getElementById("financeTable").style.display = "none";

            $("#leaseForm").submit(function (event) {
                event.preventDefault();
                document.getElementById("leaseTable").style.display = "table";
                document.getElementById("financeForm").style.display = "none;"
                document.getElementById("financeTable").style.display = "none";
                $("#tabs").show();
                $("#tabs ul li").css('visibility' , 'visible');



                // validate entries for prices, mpgs, and purchasing details
                $("#priceEntryForm").parsley().validate();
                $('#mpgEntryForm').parsley().validate();

                if (($("#priceEntryForm").parsley().isValid()) === false || ($('#mpgEntryForm').parsley().isValid()) === false) {
                    return false;
                }

                /* no features selected */
                if (document.getElementById("gpsCheckBox").checked === false && document.getElementById("heatedSeatsCheckBox").checked === false) {

                    document.getElementById("financeTable").style.display = "none";
                    document.getElementById("leaseTable").style.display = "show";
                    $('[href="#noFeatureTab"]').closest('li').show();
                    $('[href="#gpsFeatureTab"]').closest('li').hide();
                    $('[href="#heatedSeatsFeatureTab"]').closest('li').hide();
                    $('[href="#bothFeaturesTab"]').closest('li').hide();

                    inflateLeaseTable("leaseTable");

                    // hide table if input value is changed
                    $('#priceEntryForm input').change(function () {
                        document.getElementById("leaseTable").style.display = "none";
                        $("#tabs").hide();
                    });
                    $('#mpgEntryForm input').change(function () {
                        document.getElementById("leaseTable").style.display = "none";
                        $("#tabs").hide();
                    });
                    $('#leaseForm input').change(function () {
                        document.getElementById("leaseTable").style.display = "none";
                        $("#tabs").hide();
                    });

                }
                /* Gps selected only */
                if (document.getElementById("gpsCheckBox").checked === true && document.getElementById("heatedSeatsCheckBox").checked === false) {
                    document.getElementById("financeGpsTable").style.display = "none";
                    document.getElementById("leaseGpsTable").style.display = "show";
                    document.getElementById("financeTable").style.display = "none";
                    document.getElementById("leaseTable").style.display = "show";
                    $('[href="#noFeatureTab"]').closest('li').show();
                    $('[href="#gpsFeatureTab"]').closest('li').show();
                    $('[href="#heatedSeatsFeatureTab"]').closest('li').hide();
                    $('[href="#bothFeaturesTab"]').closest('li').hide();

                    // caclculate cost per month and cost per mile and inflate tables
                    inflateLeaseTable("leaseTable");
                    inflateLeaseTable("leaseGpsTable");

                    // hide table if input value is changed
                    $('#priceEntryForm input').change(function () {
                        document.getElementById("leaseGpsTable").style.display = "none";
                        $("#tabs").hide();
                    });
                    $('#mpgEntryForm input').change(function () {
                        document.getElementById("leaseGpsTable").style.display = "none";
                        $("#tabs").hide();
                    });
                    $('#leaseForm input').change(function () {
                        document.getElementById("leaseGpsTable").style.display = "none";
                        $("#tabs").hide();
                    });

                }
                /* heated seats feature selected only */
                if (document.getElementById("gpsCheckBox").checked === false && document.getElementById("heatedSeatsCheckBox").checked === true) {
                    document.getElementById("financeHeatedSeatsTable").style.display = "none";
                    document.getElementById("leaseHeatedSeatsTable").style.display = "show";
                    document.getElementById("financeTable").style.display = "none";
                    document.getElementById("leaseTable").style.display = "show";
                    $('[href="#noFeatureTab"]').closest('li').show();
                    $('[href="#gpsFeatureTab"]').closest('li').hide();
                    $('[href="#heatedSeatsFeatureTab"]').closest('li').show();
                    $('[href="#bothFeaturesTab"]').closest('li').hide();

                    // calculate cost per month and cost per mile and 
                    inflateLeaseTable("leaseTable");
                    inflateLeaseTable("leaseHeatedSeatsTable");

                    // hide table if input value is changed
                    $('#priceEntryForm input').change(function () {
                        document.getElementById("leaseHeatedSeatsTable").style.display = "none";

                    });
                    $('#mpgEntryForm input').change(function () {
                        document.getElementById("leaseHeatedSeatsTable").style.display = "none";

                    });
                    $('#leaseForm input').change(function () {
                        document.getElementById("leaseHeatedSeatsTable").style.display = "none";

                    });
                }

                /* if both GPS and heated seats are selected */
                if (document.getElementById("gpsCheckBox").checked === true && document.getElementById("heatedSeatsCheckBox").checked === true) {
                    document.getElementById("financeBothTable").style.display = "none";
                    document.getElementById("leaseBothTable").style.display = "show";
                    document.getElementById("financeTable").style.display = "none";
                    document.getElementById("leaseTable").style.display = "show";
                    document.getElementById("financeGpsTable").style.display = "none";
                    document.getElementById("leaseGpsTable").style.display = "show";
                    document.getElementById("financeHeatedSeatsTable").style.display = "none";
                    document.getElementById("leaseHeatedSeatsTable").style.display = "show";
                    $('[href="#noFeatureTab"]').closest('li').show();
                    $('[href="#gpsFeatureTab"]').closest('li').show();
                    $('[href="#heatedSeatsFeatureTab"]').closest('li').show();
                    $('[href="#bothFeaturesTab"]').closest('li').show();

                    // calculate cost and inflate table
                    inflateLeaseTable("leaseTable");
                    inflateLeaseTable("leaseGpsTable");
                    inflateLeaseTable("leaseHeatedSeatsTable");
                    inflateLeaseTable("leaseBothTable");


                    // hide table if input value is changed
                    $('#priceEntryForm input').change(function () {
                        document.getElementById("leaseBothTable").style.display = "none";
                        $("#tabs").hide();
                    });
                    $('#mpgEntryForm input').change(function () {
                        document.getElementById("leaseBothTable").style.display = "none";
                        $("#tabs").hide();
                    });
                    $('#leaseForm input').change(function () {
                        document.getElementById("leaseBothTable").style.display = "none";
                        $("#tabs").hide();
                    });
                }

                function inflateLeaseTable(leaseTableName) {
                    /* store table header html in a string */
                    htmlToAdd = "<tr><th>Price/Fuel Consumption</th>";
                    /* insert table headers in table html */
                    $("#" + leaseTableName).html(htmlToAdd);

                    /* store column headers html in string */
                    columns = document.getElementById("numberOfColumns").value;

                    for (var i = 1; i < parseInt(columns) + 1; i++) {
                        htmlToAdd += "<td>Price" + i + "</td>";

                    }
                    htmlToAdd += "</tr>";
                    /* insert table headers in table html */
                    $("#" + leaseTableName).html(htmlToAdd);

                    rows = document.getElementById("numberOfRows").value;

                    /* store row headers and body cells html in string */
                    for (var i = 1; i < parseInt(rows) + 1; i++) {

                        htmlToAdd += "<tr>";

                        $("#" + leaseTableName).html(htmlToAdd);

                        for (var j = 1; j < parseInt(columns) + 1; j++) {
                            if (parseInt(j) === 1) {
                                htmlToAdd += "<td>MPG" + i + "</td>";
                            }
                            htmlToAdd += "<td></td>";
                        }
                        htmlToAdd += "</tr>";
                        /* add table row headers and body html into table html */
                        $("#" + leaseTableName).html(htmlToAdd);

                    }
                    /*
                    variables that will be used to calculate cost per month and cost per mile
                    */

                    var milesAllowedPerYear = document.getElementById("milesDrivenAllowed").value;
                    var estimatedMilesDriven = document.getElementById("estimatedMilesDriven2").value;
                    var leaseCostPerMonth = document.getElementById("leaseMonthlyCost").value;

                    /* add to least cost per month depending on features selected */
                    switch (leaseTableName) {
                        case "leaseTable":
                            break;
                        case "leaseGpsTable":
                            leaseCostPerMonth = parseInt(leaseCostPerMonth, 10) + 25;
                            break;
                        case "leaseHeatedSeatsTable":
                            leaseCostPerMonth = parseInt(leaseCostPerMonth, 10) + 5;
                            break;
                        case "leaseBothTable":
                            leaseCostPerMonth = parseInt(leaseCostPerMonth, 10) + 25;
                            leaseCostPerMonth = parseInt(leaseCostPerMonth, 10) + 5;
                            break;
                    }

                    if (document.getElementById("gpsCheckBox").checked) {
                        leaseCostPerMonth = parseInt(leaseCostPerMonth, 10) + 25;
                    }
                    if (document.getElementById("heatedSeatsCheckBox").checked) {
                        leaseCostPerMonth = parseInt(leaseCostPerMonth, 10) + 5;
                    }
                    var costPerAdditionalMile = document.getElementById("costPerAdditionalMile").value;
                    var costPerGallon = document.getElementById("costPerGallon2").value;
                    var monthsOfPayment = document.getElementById("monthsOfPayment2").value;
                    var excessMiles = parseInt(estimatedMilesDriven) - milesAllowedPerYear;
                    if (parseInt(excessMiles) < 0) {
                        excessMiles = 0;
                    }
                    var excessMilesTotalCost = parseInt(excessMiles) * costPerAdditionalMile;
                    var totalLeasingCost = leaseCostPerMonth * monthsOfPayment;
                    var totalPayment = 0;
                    var totalGasCost = 0;
                    if (excessMiles < 0) {
                        excessMiles = 0;
                    }
                    var costPerMonth2 = 0;
                    var costPerMile2 = 0;
                    /* 
                    nested for loop that calulates cost per month and cost per mile for each combination of price and miles per gallon and insert them into the table cells.
                    */
                    for (var i = 1; i < parseInt(rows) + 1; i++) {
                        for (var j = 1; j < parseInt(columns) + 1; j++) {
                            mpgInput = document.getElementById(("mpg" + i)).value;
                            priceInput = document.getElementById(("price" + j)).value;
                            totalGasCost = ((estimatedMilesDriven / mpgInput) * costPerGallon).toFixed(2);
                            console.log("totalGasCost: " + totalGasCost);

                            totalPayment = parseInt(totalLeasingCost) + parseInt(excessMilesTotalCost) + parseInt(totalGasCost);
                            console.log("totalPayment: " + totalPayment);

                            costPerMonth2 = (totalPayment / monthsOfPayment).toFixed(2);
                            costPerMile2 = (totalPayment / estimatedMilesDriven).toFixed(2);
                            output = "Cost Per Month: " + costPerMonth2 + "<br>Cost Per Mile: " + costPerMile2;

                            /* insert results into proper table cell*/
                            $("#" + leaseTableName + " tr:nth-child(" + (parseInt(i) + 1) + ") td:nth-child(" + (parseInt(j) + 1) + ")").html(output);


                        }
                    }

                }
            });
        }

    });
    // hide table and purchase option forms if input is changed
    $('#rowColumnsForm input').change(function () {
        document.getElementById("financeTable").style.display = "none";
        document.getElementById("leaseTable").style.display = "none";
        document.getElementById("priceEntryForm").style.display = "none";
        document.getElementById("mpgEntryForm").style.display = "none";
        $("#tabs").hide();
        $('#financeForm input').val('');
        $('#leaseForm input').val('');
        document.getElementById("financeForm").style.display = "none";
        document.getElementById("leaseForm").style.display = "none";
        $('#featuresForm input:checkbox').prop('checked', false);
        document.getElementById("featuresForm").style.display = "none";

    });


    // close tab handler
    $(".ui-closable-tab").on("click", function () {
        $(this).closest('li').css('visibility', 'hidden');
        var tabContent = $(this).closest('li').attr('aria-controls');
        $("#" + tabContent + " table > tr").remove();
        var hiddenTabCount = $("li").filter(function () {
            return $(this).css('visibility') !== 'visible';
        }).length;
        
        // hide tab-container if all tabs are hidden
        if (hiddenTabCount === 4) {
            $("#tabs").hide();
        }
    });
});
