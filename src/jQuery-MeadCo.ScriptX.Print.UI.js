// MeadCo.ScriptX.Print.UI
//
// Depends on MeadCo.ScriptX.Print.HTML
//
// A lightweight plug-in not implemented as a plug-in as it will only be used once or twice on a document
// so polluting jQuery is unneccessary.
//
// Dependency: bootstrap-select.js : Bootstrap-select v1.10.0 (http://silviomoreto.github.io/bootstrap-select)
// The above dependency is completely optional - the code looks for the enabling class.
//
// Dependency: meadco-scriptxfactory.js

(function (topLevelNs, $, undefined) {
    "use strict";

    var sClass = "";

    // check for presence of bootstrap-select.js
    if ($.fn.selectpicker) {
        sClass = "selectpicker";
    }

    var ui = MeadCo.createNS("MeadCo.ScriptX.Print.UI");

    ui.version = "1.6.2.1";

    if ( !$.fn.modal ) {
        console.error("MeadCo.ScriptX.Print.UI requires bootstrap Modal");
        return;
    }

    // MeadCo.ScriptX.Print.UI.PageSetup()
    ui.PageSetup = function (fnCallBack) {
        var bAccepted = false;

        // page setup modal to attach to the page
        //
        // Simple override is to include the dialog in the page with id="dlg-printoptions"
        //
        if (!$('#dlg-printoptions').length) {
            console.log("UI.PageSetup bootstrap modal version: " + $.fn.modal.Constructor.VERSION);
            var dlg3 = '<style>' +
                '.modal-dialog legend { font-size: 1.2em; font-weight: bold; margin-bottom: 10px; } ' +
                '.modal-dialog fieldset { padding-bottom: 0px; } ' +
                '.modal-dialog .options-modal-body { padding-bottom: 0px !important; } ' +
                '.modal-dialog .checkbox2 {  padding-top: 0px !important; min-height: 0px !important; } ' +
                '.modal-dialog .radio2 { padding-top: 0px !important; min-height: 0px !important; } ' +
                '</style>' +
                '<div class="modal fade" id="dlg-printoptions">' +
                '<div class="modal-dialog">' +
                '<div class="modal-content">' +
                '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
                '<h4 class="modal-title">Page setup</h4>' +
                '</div>' +
                '<div class="modal-body form-horizontal options-modal-body">' +
                '<fieldset>' +
                '<legend>Paper</legend>' +
                '<div class="form-group">' +
                '<label class="col-md-4 control-label" for="fld-papersize">Size</label>' +
                '<select class="' + sClass + ' col-md-8 show-tick show-menu-arrow" id="fld-papersize">' +
                '</select>' +
                '</div>' +
                '<div class="form-group">' +
                '<div class="col-md-offset-4 col-md-8">' +
                '<div class="radio2">' +
                '<label class="radio-inline">' +
                '<input type="radio" value="2" id="fld-portrait" name="fld-orientation">' +
                ' Portrait' +
                '</label>' +
                '<label class="radio-inline">' +
                '<input type="radio" value="1" id="fld-landscape" name="fld-orientation">' +
                ' Landscape' +
                '</label>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="form-group">' +
                '<div class="col-md-offset-4 col-md-8">' +
                '<div class="checkbox2">' +
                '<label class="checkbox-inline">' +
                '<input type="checkbox" name="fld-shrinktofit" id="fld-shrinktofit">' +
                ' Shrink to fit' +
                '</label>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="form-group">' +
                '<div class="col-md-offset-4 col-md-8">' +
                '<div class="checkbox2">' +
                '<label class="checkbox-inline">' +
                '<input type="checkbox" name="fld-printbackground" id="fld-printbackground">' +
                ' Print background colour and images' +
                '</label>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</fieldset>' +
                '<fieldset>' +
                '<legend>Margins</legend>' +
                '<div class="form-group">' +
                '<div class="col-md-offset-4 col-md-8">' +
                '<div class="radio2">' +
                '<label class="radio-inline">' +
                '<input type="radio" value="2" id="fld-millimetres" name="fld-measure">' +
                ' Millimetres' +
                '</label>' +
                '<label class="radio-inline">' +
                '<input type="radio" value="1" id="fld-inches" name="fld-measure">' +
                ' Inches' +
                '</label>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '<div class="form-group">' +
                '<label class="control-label col-md-4">Left</label>' +
                '<div class="col-md-3">' +
                '<input name="fld-marginL" id="fld-marginL" type="text" class="form-control text-right" data-rule="measure" value="1" />' +
                '</div>' +
                '<label class="control-label col-md-2">Top</label>' +
                '<div class="col-md-3">' +
                '<input name="fld-marginT" id="fld-marginT" type="text" class="form-control text-right" data-rule="measure" value="1" />' +
                '</div>' +
                '</div>' +
                '<div class="form-group">' +
                '<label class="control-label col-md-4">Right</label>' +
                '<div class="col-md-3">' +
                '<input name="fld-marginR" id="fld-marginR" type="text" class="form-control text-right" data-rule="measure" value="1" />' +
                '</div>' +
                '<label class="control-label col-md-2">Bottom</label>' +
                '<div class="col-md-3">' +
                '<input name="fld-marginB" id="fld-marginB" type="text" class="form-control text-right" data-rule="measure" value="1" />' +
                '</div>' +
                '</div>' +
                '</fieldset>' +
                '<fieldset>' +
                '<legend>Headers and footers</legend>' +
                '<div class="form-group">' +
                '<label class="control-label col-md-4">Header</label>' +
                '<div class="col-md-8">' +
                '<input type="text" name="fld-header" id="fld-header" class="form-control" style="max-width: none !important;" />' +
                '</div>' +
                '</div>' +
                '<div class="form-group">' +
                '<label class="control-label col-md-4">Footer</label>' +
                '<div class="col-md-8">' +
                '<input type="text" name="fld-footer" id="fld-footer" class="form-control" style="max-width: none !important;" />' +
                '</div>' +
                '</div>' +
                '</fieldset>' +
                '</div>' +
                '<div class="modal-footer">' +
                '<button type="button" class="btn btn-primary" id="btn-saveoptions">OK</button>' +
                '<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>' +
                '</div>' +
                '</div>' +
                '<!-- /.modal-content -->' +
                '</div>' +
                '<!-- /.modal-dialog -->' +
                '</div>' +
                '<!-- /.modal -->';

            var dlg = dlg3;

            $('body').append(dlg);
        }

        $('[name="fld-measure"]')
            .off('change')
            .on('change', function () {
                switch ($(this).val()) {
                    case '2': // mm from inches
                        $('#dlg-printoptions input[type=text][data-rule=measure]').each(function () {
                            convertAndDisplayinchesToMM($(this));
                        });
                        break;

                    case '1': // inches from mm
                        $('#dlg-printoptions input[type=text][data-rule=measure]').each(function () {
                            convertAndDisplayMMtoInches($(this));
                        });
                        break;
                }
            });

        // reattach click handler as callback function scoped variables may (probably will) have changed
        $('#btn-saveoptions')
            .off("click")
            .on("click", function (ev) {
                ev.preventDefault();
                savePageSetup();
                bAccepted = true;
                $('#dlg-printoptions').modal('hide');
            });

        $("#dlg-printoptions")
            .off('hidden.bs.modal')
            .on('hidden.bs.modal', function () {
                if (typeof fnCallBack === "function") {
                    fnCallBack(bAccepted);
                }
            });

        var $dlg = $('#dlg-printoptions');
        var settings = MeadCo.ScriptX.Print.HTML.settings;

        $dlg.find('[name="fld-orientation"]').val([settings.page.orientation]);
        $dlg.find('#fld-printbackground').prop('checked', settings.printBackgroundColorsAndImages);
        $dlg.find('#fld-shrinktofit').prop('checked', settings.viewScale == -1);
        $dlg.find('[name="fld-measure"]').val([settings.page.units]);
        $dlg.find('#fld-marginL').val(settings.page.margins.left);
        $dlg.find('#fld-marginT').val(settings.page.margins.top);
        $dlg.find('#fld-marginR').val(settings.page.margins.right);
        $dlg.find('#fld-marginB').val(settings.page.margins.bottom);
        $dlg.find('#fld-header').val(settings.header);
        $dlg.find('#fld-footer').val(settings.footer);

        // grab the paper size options from printerControl
        var $paperselect = $('#fld-papersize');
        var printerControl = factory.printing.printerControl(factory.printing.currentPrinter);
        $('#fld-papersize > option').remove();
        for (var i in printerControl.Forms) {
            $paperselect.append("<option>" + printerControl.Forms[i] + "</option>");
        }

        if ($paperselect.hasClass("selectpicker")) {
            $paperselect.selectpicker('refresh');
        }

        $paperselect.val(factory.printing.paperSize);

        $dlg.modal('show');

        if ($paperselect.hasClass("selectpicker")) {
            $paperselect.selectpicker('refresh');
        }

    };

    // MeadCo.ScriptX.Print.UI.PrinterSettings()
    ui.PrinterSettings = function (fnCallBack) {
        var bAccepted = false;
        // printer settings modal to attach to the page
        if (!$('#dlg-printersettings').length) {
            var dlg = '<style>' +
                '.modal-dialog legend { font-size: 1.2em; font-weight: bold; margin-bottom: 10px; } ' +
                '.modal-dialog fieldset { padding-bottom: 0px; } ' +
                '.modal-dialog .options-modal-body { padding-bottom: 0px !important; } ' +
                '.modal-dialog .checkbox2 {  padding-top: 0px !important; min-height: 0px !important; } ' +
                '.modal-dialog .radio2 { padding-top: 0px !important; min-height: 0px !important; } ' +
                '</style>' +
                '<div class="modal fade" id="dlg-printersettings">' +
                '<div class="modal-dialog">' +
                '<div class="modal-content">' +
                '<div class="modal-header">' +
                '<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>' +
                '<h4 class="modal-title">Print</h4>' +
                '</div>' +
                '<div class="modal-body form-horizontal options-modal-body">' +
                //'<fieldset>' +
                //    '<legend>Printer</legend>' +
                '<div class="form-group">' +
                '<label class="col-md-4 control-label" for="fld-printerselect">Printer</label>' +
                '<select class="' + sClass + ' col-md-8 show-tick show-menu-arrow" id="fld-printerselect">' +
                '</select>' +
                '</div>' +
                '<div class="form-group">' +
                '<label class="col-md-4 control-label" for="fld-papersource">Paper source</label>' +
                '<select class="' + sClass + ' col-md-8 show-tick show-menu-arrow" id="fld-papersource">' +
                '</select>' +
                '</div>' +
                '<div class="form-group">' +
                '<label class="control-label col-md-4">Copies</label>' +
                '<div class="col-md-3">' +
                '<input name="fld-copies" id="fld-copies" type="text" class="form-control text-right" data-rule="quantity" value="1" />' +
                '</div>' +
                '<div class="col-md-5">' +
                '<div class="checkbox2">' +
                '<label class="checkbox-inline">' +
                '<input type="checkbox" name="fld-collate" id="fld-collate">' +
                ' Collate' +
                '</label>' +
                '</div>' +
                '</div>' +
                '</div>' +
                //'</fieldset>' +
                '</div>' +
                '<div class="modal-footer">' +
                '<button type="button" class="btn btn-primary" id="btn-savesettings">Print</button>' +
                '<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>' +
                '</div>' +
                '</div>' +
                '<!-- /.modal-content -->' +
                '</div>' +
                '<!-- /.modal-dialog -->' +
                '</div>' +
                '<!-- /.modal -->';
            $('body').append(dlg);

            $('[name="fld-measure"]').on('change', function () {
                switch ($(this).val()) {
                    case '2': // mm from inches
                        $('#dlg-printersettings input[type=text][data-rule=currency]').each(function () {
                            convertAndDisplayinchesToMM($(this));
                        });
                        break;

                    case '1': // inches from mm
                        $('#dlg-printersettings input[type=text][data-rule=currency]').each(function () {
                            convertAndDisplayMMtoInches($(this));
                        });
                        break;
                }
            });

            $('#dlg-printersettings #fld-printerselect').change(function (ev) {
                onSelectPrinter($(this).val());
            });
        }

        // reattach click handler as callback function scoped variables may (probably will) have changed
        $('#btn-savesettings')
            .off("click")
            .on("click", function (ev) {
                ev.preventDefault();
                savePrinterSettings();
                bAccepted = true;
                $('#dlg-printersettings').modal('hide');
            });

        $("#dlg-printersettings")
            .off('hidden.bs.modal')
            .on('hidden.bs.modal', function () {
                if (typeof fnCallBack === "function") {
                    fnCallBack(bAccepted);
                }
            });


        fillPrintersList();
        showPrinterSettings();
        $('#dlg-printersettings').modal('show');

        if (sClass === "selectpicker") {
            $('#dlg-printersettings .selectpicker').selectpicker('refresh');
        }
    };

    // show available sources and options 
    function showPrinterSettings() {

        fillAndSetBinsList();

        var $dlg = $('#dlg-printersettings');
        var printer = factory.printing;
        $dlg.find('#fld-collate').prop('checked', printer.collate);
        $dlg.find('#fld-copies').val(printer.copies);

    }

    function savePageSetup() {
        var $dlg = $('#dlg-printoptions');
        var settings = MeadCo.ScriptX.Print.HTML.settings;

        if ($dlg.length) {
            settings.page.orientation = $dlg.find('[name="fld-orientation"]:checked').val();
            settings.printBackgroundColorsAndImages = $dlg.find('#fld-printbackground').prop('checked');
            settings.viewScale = $dlg.find('#fld-shrinktofit').prop('checked') ? -1 : 100;
            settings.page.units = parseInt($dlg.find('[name="fld-measure"]:checked').val());
            settings.page.margins.left = $dlg.find('#fld-marginL').val();
            settings.page.margins.top = $dlg.find('#fld-marginT').val();
            settings.page.margins.right = $dlg.find('#fld-marginR').val();
            settings.page.margins.bottom = $dlg.find('#fld-marginB').val();
            settings.header = $dlg.find('#fld-header').val();
            settings.footer = $dlg.find('#fld-footer').val();

            factory.printing.paperSize = $('#fld-papersize').val();
        }
    }

    function savePrinterSettings() {
        var $dlg = $('#dlg-printersettings');
        var printHtml = MeadCo.ScriptX.Print.HTML;
        var printer = factory.printing;
        var settings = MeadCo.ScriptX.Print.HTML.settings;

        if ($dlg.length) {
            // set printer first as this triggers a getDeviceSettings call to the server
            // which would overwrite any settings previously assigned from the dialog
            // printer.currentPrinter = $('#fld-printerselect').selectpicker('val');
            // printer.paperSource = $('#fld-papersource').selectpicker('val');

            printer.currentPrinter = $('#fld-printerselect').val();
            printer.paperSource = $('#fld-papersource').val();

            printer.collate = $dlg.find('#fld-collate').prop('checked');
            printer.copies = $dlg.find('#fld-copies').val();
        }
    }

    // fill printers dropdown with those available
    function fillPrintersList() {
        var printer = factory.printing;
        var $printers = $('#fld-printerselect');

        $('#fld-printerselect > option').remove();

        var name;
        for (var i = 0; (name = printer.EnumPrinters(i)).length > 0; i++) {
            $printers.append("<option>" + name);
        }

        $printers.val(printer.currentPrinter);
        if ($printers.hasClass("selectpicker")) {
            $printers.selectpicker('refresh');
        }
    }

    function onSelectPrinter(printerName) {
        var printer = factory.printing;
        var currentPrinterName = printer.currentPrinter;
        var currentSource = printer.paperSource;

        try {
            // select the printer to get its default source and size.
            printer.currentPrinter = printerName;
            fillAndSetBinsList();
        } catch (e) {
            alert("Sorry, an error has occurred:\n\n" + e.message);
        }

        // revert the current printer in ScriptX
        try {
            printer.currentPrinter = currentPrinterName;
            printer.paperSource = currentSource;
        } catch (e) {
            alert("Sorry, an error has occurred restoring current printer settings:\n\n" + e.message);
        }

    }

    function fillAndSetBinsList() {
        var printer = factory.printing;
        var binsArray = printer.printerControl(printer.CurrentPrinter).Bins;
        var $bins = $('#fld-papersource');

        $('#fld-papersource > option').remove();
        for (var i = 0; i < binsArray.length; i++) {
            $bins.append("<option>" + binsArray[i]);
        }

        $bins.val(printer.paperSource);

        if ($bins.hasClass("selectpicker")) {
            $bins.selectpicker('refresh');
        }
    }

    // convert the current inches value in the control to MM
    function convertAndDisplayinchesToMM($el) {
        $el.val(((parseFloat($el.val()) * 2540) / 100).toFixed(2));
    }

    // convert the current mm value in the control to inches
    function convertAndDisplayMMtoInches($el) {
        $el.val(((parseFloat($el.val()) * 100) / 2540).toFixed(2));
    }

}(window.MeadCo = window.MeadCo || {}, jQuery));
