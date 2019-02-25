/**
 * MeadCo.ScriptX.Print.PDF
 *
 * A static class providing printing of PDF files.
 * 
 * Requires: meadco-core.js, meadco-scriptxprint.js
 *
 * The purpose of these libraries is to assist those with a body of client javascript code targetting use of the ScriptX Add-On for Internet Explorer. These libraries assist with continuing with a large part of the code
 * intact when transitioning to using ScriptX.Services instead/as well.
 * 
 * Includes processing of calls to the print api that return "printing to file" including collecting the
 * file output.
 *
 * @namespace MeadCoScriptXPrintPDF
 *
 */

; (function (name, definition) {
    extendMeadCoNamespace(name, definition);
})('MeadCo.ScriptX.Print.PDF', function () {

    var moduleversion = "1.5.2.0";

    /**
     * Enum to describe the orientation of the paper
     *
     * @memberof MeadCoScriptXPrintPDF
     * @typedef {number} PageOrientation
     * @enum {PageOrientation}
     * @readonly
     * @property {number} DEFAULT 0 use the default at the print server
     * @property {number} LANDSCAPE 1 
     * @property {number} PORTRAIT 2 
     */
    var mPageOrientation = {
        DEFAULT: 0,
        LANDSCAPE: 1,
        PORTRAIT: 2
    };

    /**
     * Enum to describe a boolean value or use the default 
     *
     * @memberof MeadCoScriptXPrintPDF
     * @typedef {number} BooleanOption
     * @enum {BooleanOption}
     * @readonly
     * @property {number} DEFAULT 0 use the default at the print server
     * @property {number} TRUE 1 
     * @property {number} FALSE 2 
     */
    var mBooleanOption = {
        DEFAULT: 0,
        TRUE: 1,
        FALSE: 2
    };

    /**
     * Enum to describe the page scaling to perfor, 
     *
     * @memberof MeadCoScriptXPrintPDF
     * @typedef {number} PdfPageScaling
     * @enum {PdfPageScaling}
     * @readonly
     * @property {number} UNDEFINED Not specified (ShrinkToFit is used instead)
     * @property {number} NONE No scaling 
     * @property {number} FITTOPAPER Scale to fit to paper
     * @property {number} SHRINKLARGEPAGESOnly scale oversized pages 
     */
    var mPdfPageScaling = {
        UNDEFINED: -1,
        NONE: 0,
        FITTOPAPER: 1,
        SHRINKLARGEPAGES: 2
    };

    var PdfPrintSettings =
    {
        pageRage: "",
        ShrinkToFit: true,
        PageScaling: mPdfPageScaling.UNDEFINED,
        autoRotateCenter: mBooleanOption.DEFAULT,
        orientation: mPageOrientation.DEFAULT,
        monochrome: false,
        normalise: false
    };

    function printPdfAtServer(document, fnDone, fnCallback, data) {
        return MeadCo.ScriptX.Print.printPdf(document, PdfPrintSettings, fnDone, fnCallback, data);
    }

    MeadCo.log("MeadCo.ScriptX.Print.PDF " + moduleversion + " loaded.");

    if (!this.jQuery) {
        MeadCo.log("**** warning :: no jQuery");
    }

    // public API
    return {
        PageOrientation: mPageOrientation,
        BooleanOption: mBooleanOption,
        PdfPageScaling: mPdfPageScaling,

        /**
         * The soft settings to use when printing html content - headers, footers and margins
         * (Device settings such as papersize, printer are described with MeadCo.ScriptX.Print.deviceSettings)
         *  
         * @memberof MeadCoScriptXPrintPDF
         * @typedef Settings
         * @property {string} pageRange The rage of pages to print. Empty means all, or from-to or comma delimited sets of from-to
         * @property {BooleanOption} shrinkToFit Shrink the PDF page to fit the paper, optional true by default
         * @property {PdfPageScaling} pageScaling If given then shrinkToFit is ignored and this scaling is used.
         * @property {BooleanOption} autoRotateCenter Indicates whether pages should be rotated to fit on the paper and centered. If this parameter is not given then it will be set to true if shrinkToFit is true or pageScaling is FITTOPAPER.
         * @property {PageOrientation} orientation Required oritentation on the printed paper
         * @property {boolean} monochrome Specifies if monochrome printing should be used. This option is known not to work with some HP printers due to issues in HP print drivers. 
         * @property {boolean} normalise  Indicates whether or not the pages should be processed to ensure drawing operations are at the expected positions. This option may assist if documents do not print as required.
         */
        settings: PdfPrintSettings,

        /**
         * Print the document obtained by downloading the given url.
         *
         * @memberof MeadCoScriptXPrintPDF
         * @function print
         * @param {string} sUrl the fully qualified url to the PDF document to be printed.
         * @param {function({string})} fnCallOnDone function to call when printing complete (and output returned), arg is null on no error, else error message.
         * @param {function(status,sInformation,data)} fnCallback function to call when job status is updated
         * @param {any} data object to give pass to fnCallback
         * @return {boolean} - true if a print was started (otherwise an error will be thrown)
         */
        print: function (sUrl,fnCallOnDone, fnCallback, data) {
            return printPdfAtServer(sUrl, fnCallOnDone, fnCallback, data);
        },

        /**
         * Specify the server and the subscription/license id to use on AJAX calls. No call is made in this function
         * 
         * @function connectLite
         * @memberof MeadCoScriptXPrintPDF
         * @param {string} serverUrl the 'root' url to the server (the api path will be added by the library)
         * @param {string} licenseGuid the license/subscription identifier
         */
        connectLite: function (serverUrl, licenseGuid) {
            MeadCo.ScriptX.Print.connectLite(serverUrl, licenseGuid);
        },

        /**
         * Specify the server to use and the subscription/license id. 
         * 
         * Attempt to connect to the defined ScriptX.Services server and obtain
         * default soft html and device settings for the default device as well as the list
         * of available printers. 
         * This call is synchronous and therefore not recommended. Use connectAsync()
         * 
         * @function connect
         * @memberof MeadCoScriptXPrintPDF
         * @param {string} serverUrl the 'root' url to the server (the api path will be added by the library)
         * @param {string} licenseGuid the license/subscription identifier
         */
        connect: function (serverUrl, licenseGuid) {
            MeadCo.warn("Print.PDF SYNC connection request");
            MeadCo.ScriptX.Print.connectLite(serverUrl, licenseGuid);
            MeadCo.ScriptX.Print.getFromServer("/htmlPrintDefaults/?units=" + settingsCache.page.units, false,
                function (data) {
                    MeadCo.log("got default html settings");
                    if (data.device !== null) {
                        MeadCo.ScriptX.Print.connectDeviceAndPrinters(data.device, data.availablePrinters);
                    }
                });

        },

        /**
         * Specify the server to use and the subscription/license id. 
         * 
         * Attempt to connect to the defined ScriptX.Services server and obtain
         * default soft html and device settings for the default device as wll as the list
         * of available printers. 
         * 
         * @function connectAsync
         * @memberof MeadCoScriptXPrintHTML
         * @param {string} serverUrl the 'root' url to the server (the api path will be added by the library)
         * @param {string} licenseGuid the license/subscription identifier
         * @param {function} resolve function to call on success
         * @param {function} reject function to call on failure
         */
        connectAsync: function (serverUrl, licenseGuid, resolve, reject) {
            MeadCo.log("Print.PDF ASYNC connection request");
            MeadCo.ScriptX.Print.connectLite(serverUrl, licenseGuid);
            MeadCo.ScriptX.Print.getFromServer("/htmlPrintDefaults", true,
                function (data) {
                    MeadCo.log("got default html settings");
                    if (data.device !== null) {
                        MeadCo.ScriptX.Print.connectDeviceAndPrinters(data.device, data.availablePrinters);
                        resolve();
                    }
                    else {
                        reject("Server did not respond with valid settings");
                    }
                }, reject);
        },

        /**
         * Get the version of this module as a string major.minor.hotfix.build
         * @property {string} version
         * @memberof MeadCoScriptXPrintHTML
         */
        get version() { return moduleversion; }

    };

});
