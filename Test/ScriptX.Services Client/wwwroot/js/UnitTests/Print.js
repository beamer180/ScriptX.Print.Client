﻿//QUnit.config.reorder = false;

QUnit.test("Namespace basics", function (assert) {

    assert.ok(MeadCo.ScriptX.Print, "MeadCo.ScriptX.Print namespace exists");
    var api = MeadCo.ScriptX.Print;

    assert.equal(api.version, "1.5.1.8", "Correct version");

    assert.equal(api.ContentType.URL, 1, "ContentType enum is OK");
    assert.equal(api.ContentType.XX, undefined, "Unknown ContentType enum is OK");

    assert.equal(api.PrintStatus.DOWNLOADING, 3, "PrintStatus enum is OK");
    assert.equal(api.PrintStatus.XX, undefined, "Unknown PrintStatus enum is OK");

    assert.equal(api.printerName, "", "Printer is empty string");
    assert.notEqual(api.deviceSettings, null, "Default device settings are not null");
    assert.deepEqual(api.deviceSettings, {}, "Default device settings are empty object");

    assert.equal(api.deviceSettingsFor("My printer"), undefined, "Device settings for bad printer name shows error dialog and returns undefined");
    assert.equal($("#qunit-fixture").text(), "Not Found", "Correct error message");

});

QUnit.test("Device settings basics", function (assert) {

    var api = MeadCo.ScriptX.Print;

    api.deviceSettings = {
        printerName: "My printer",
        isDefault: true,
        paperSize: "A4"
    };

    assert.notDeepEqual(api.deviceSettings, {}, "Set default device settings are not empty object");
    assert.equal(api.printerName, "My printer", "Default printer name has been set");
    assert.equal(api.deviceSettings.paperSize, "A4", "Default printer papersize is A4");

    api.deviceSettings = {
        printerName: "A3 printer",
        paperSize: "A3"
    };

    assert.equal(api.deviceSettingsFor("A3 printer").paperSize, "A3", "Device settings for another printer is A3");
    assert.equal(api.deviceSettings.paperSize, "A4", "Default printer papersize is A4");

    api.printerName = "A3 printer";
    assert.equal(api.deviceSettings.paperSize, "A3", "Change default printer and papersize is now A3");
    assert.equal(api.printerName, "A3 printer", "Correct default printer name");

    api.printerName = "Garbage";
    assert.equal($("#qunit-fixture").text(), "Not Found", "Correct error message on setting garbage printer");
    assert.equal(api.printerName, "A3 printer", "Default printer name stays correct.");

});

QUnit.test("Testing connection", function (assert) {

    // assert.expect(2);
    var done = assert.async(2);

    var api = MeadCo.ScriptX.Print;

    var url = serverUrl;

    api.connectTestAsync(badServerUrl, function () {
        assert.ok(false, "Should not have connected to: " + url);
        done();
    }, function (errorText) {
        assert.equal(errorText, "Server or network error", "connectTestAsync failed with correct error");
        done();
    });

    api.connectTestAsync(url, function (data) {
        assert.ok(true, "Test without license connected to: " + url);
        assert.notOk(data.AdvancedPrinting, "Advanced printing not enabled");
        assert.notOk(data.BasicPrinting, "BasicPrinting Printing not enabled");
        assert.notOk(data.EnhancedFormatting, "EnhancedFormatting Printing not enabled");
        assert.notOk(data.PrintPdf, "PrintPdf Printing not enabled");
        assert.notOk(data.PrintRaw, "RAW Printing not enabled");
        done();
    }, function (errorText) {
        assert.ok(false, "Should have connected to: " + url + " error: " + errorText);
        done();
    });
});

QUnit.test("Connecting", function (assert) {

    var done = assert.async(4);

    var api = MeadCo.ScriptX.Print;

    var url = serverUrl;

    api.connectAsync(url, "{}", function (data) {
        assert.ok(false, "Should not have connected to: " + url + " with bad license");
        done();
    }, function (errorText) {
        assert.ok(true, "Failed to connect to: " + url + " with bad license GUID, error: " + errorText);
        done();
    });

    api.connectAsync(url, null, function (data) {
        assert.ok(false, "Should not have connected to: " + url + " with bad license");
        done();
    }, function (errorText) {
        assert.ok(true, "Failed to connect to: " + url + " with null license GUID, error: " + errorText);
        done();
    });

    api.connectAsync(url, "", function (data) {
        assert.ok(false, "Should not have connected to: " + url + " with bad license");
        done();
    }, function (errorText) {
        assert.ok(true, "Failed to connect to: " + url + " with empty string license GUID, error: " + errorText);
        done();
    });

    api.connectAsync(url, licenseGuid, function (data) {
        assert.equal(data.printerName, "Test printer", "Connected async with correct device info");
        assert.ok(api.isConnected, "isConnected");
        done();
    }, function (errorText) {
        assert.ok(false, "Should have connected to: " + url + " error: " + errorText);
        done();
    });
});

QUnit.test("Device values and available printers", function (assert) {

    var api = MeadCo.ScriptX.Print;

    assert.equal(api.availablePrinterNames.length, 0, "Correct available (empty) printer names array");
    api.connectDeviceAndPrinters(
        [
            {
                printerName: "A3 printer",
                paperSize: "A3",
                isDefaut: true

            },
            {
                printerName: "A4 printer",
                paperSize: "A4"
            }
        ],
        ["A3 printer", "A4 printer"]);

    assert.notDeepEqual(api.deviceSettings, {}, "Set default device settings are not empty object");
    assert.equal(api.printerName, "A3 printer", "Default printer name has been set");
    assert.equal(api.deviceSettings.paperSize, "A3", "Default printer papersize is A3");
    assert.equal(api.availablePrinterNames.length, 2, "Correct available printer names array");
});

QUnit.test("call server api with GET", function (assert) {

    var done = assert.async(8);

    var api = MeadCo.ScriptX.Print;

    api.connectLite(badServerUrl, badLicenseGuid);

    api.getFromServer("/twaddle/?units=0", false,
        function (data) {
            assert.ok(false, "Call to bad server should not succeed");
            done();
        }, function (errorText) {
            assert.ok(true, "Call to bad server failed, error was: " + errorText);
            done();
        });

    api.connectLite(serverUrl, badLicenseGuid);

    api.getFromServer("/twaddle/?units=0", false,
        function (data) {
            assert.ok(false, "Call to bad api should not succeed");
            done();
        }, function (errorText) {
            assert.ok(true, "Call to bad api failed, error was: " + errorText);
            done();
        });

    api.getFromServer("/htmlPrintDefaults/?units=0", false,
        function (data) {
            assert.ok(false, "Call to api with bad license should not succeed");
            done();
        }, function (errorText) {
            assert.ok(true, "Call to api with bad license failed, error was: " + errorText);
            done();
        });

    api.connectLite(serverUrl, licenseGuid);
    api.getFromServer("/htmlPrintDefaults/?units=0", false,
        function (data) {
            assert.ok(true, "Call to api with good license succeeded");
            done();
        }, function (errorText) {
            assert.ok(false, "Call to api with good license failed, error was: " + errorText);
            done();
        });

    api.connectLite(serverUrl, null);
    api.getFromServer("/htmlPrintDefaults/?units=0", false,
        function (data) {
            assert.ok(true, "Call to api succeeded - null license ignored");
            done();
        }, function (errorText) {
            assert.ok(false, "Call to api with good license failed, error was: " + errorText);
            done();
        });

    api.connectLite(serverUrl, "");
    api.getFromServer("/htmlPrintDefaults/?units=0", false,
        function (data) {
            assert.ok(true, "Call to api succeeded - empty license ignored");
            done();
        }, function (errorText) {
            assert.ok(false, "Call to api with good license failed, error was: " + errorText);
            done();
        });

    api.connectLite(null, licenseGuid);
    api.getFromServer("/htmlPrintDefaults/?units=0", false,
        function (data) {
            assert.ok(true, "Call to api succeeded - null server ignored");
            done();
        }, function (errorText) {
            assert.ok(false, "Call to api with good license failed, error was: " + errorText);
            done();
        });

    api.connectLite("", licenseGuid);
    api.getFromServer("/htmlPrintDefaults/?units=0", false,
        function (data) {
            assert.ok(true, "Call to api succeeded - empty server ignored");
            done();
        }, function (errorText) {
            assert.ok(false, "Call to api with good license failed, error was: " + errorText);
            done();
        });
});

QUnit.test("queue management", function (assert) {

    var api = MeadCo.ScriptX.Print;

    assert.notEqual(api.queue, null, "Queue is not null");
    assert.equal(api.queue.length, 0, "Qeue is empty");
    assert.equal(api.activeJobs, 0, "There are no active jobs");
    assert.notOk(api.isSpooling, "Not spooling");

    var lock = api.ensureSpoolingStatus();

    assert.notEqual(api.activeJobs, 0, "with ensureSpoolingStatus() there are now active jobs");
    assert.ok(api.isSpooling, "Is spooling");

    api.freeSpoolStatus(lock);
    assert.equal(api.activeJobs, 0, "After freeSpoolStatus there are no active jobs again");
    assert.notOk(api.isSpooling, "Not spooling again ");

    var done = assert.async();

    api.waitForSpoolingComplete(-1, function (bComplete) {
        assert.ok(bComplete, "WaitForSpoolingComplete ok.");
        done();
    });

});

QUnit.test("WaitForSpoolingComplete time out", function (assert) {

    var done = assert.async();
    var api = MeadCo.ScriptX.Print;
    var lock = api.ensureSpoolingStatus();

    api.waitForSpoolingComplete(2000, function (bComplete) {
        assert.notOk(bComplete, "WaitForSpoolingComplete ok - still spooling after timeout.");
        api.freeSpoolStatus(lock);
        done();
    });
});

QUnit.test("Printing with no arguments", function (assert) {

    var done = assert.async(4);
    var api = MeadCo.ScriptX.Print;

    api.connectLite(serverUrl, licenseGuid);
    assert.ok(api.printHtml(), "No arguments succeeds");
    done();

    api.printHtml(0, null, null, function (jqXhr) {
        assert.equal($("#qunit-fixture").text(), "Bad Request", "No arguments no callback raises correct error dialog");
        done();
    });

    api.printHtml(0, null, null, function (errorText) {
        assert.equal($("#qunit-fixture").text(), "Bad Request", "No arguments but with callback raises correct error dialog");
        assert.equal(errorText, "Bad Request", "Correct error text");
        done();
    }, function (status, sInformation, data) {
        assert.equal(data, "ProgressData", "On progress function receives data");
        assert.equal(sInformation, "Bad Request", "progress callback gets correct error");
        assert.equal(status, api.PrintStatus.ERROR, "Correct progress status (ERROR)");
        done();
    },
    "ProgressData");
});

QUnit.test("Printing single piece of content", function (assert) {

    var done = assert.async(4);

    var api = MeadCo.ScriptX.Print;

    api.connectLite(serverUrl, licenseGuid);

    api.deviceSettings = {
        printerName: "My printer",
        isDefault: true,
        paperSize: "A4"
    };

    // immediate completion
    api.printHtml(api.ContentType.INNERHTML, "Hello world", {}, function (errorText) {
        assert.equal(errorText,null, "Correct done call oin immediate completion");
        done();
    }, function (status, sInformation, data) {
        assert.equal(data, "ProgressData", "On progress function receives data: " + status);
    },
    "ProgressData");

    // error in job from server
    api.printHtml(api.ContentType.URL, "Hello world", {}, function (errorText) {
        assert.equal(errorText, "Server error", "Correct done call (mocked abandoned)");
        assert.equal($("#qunit-fixture").text(), "The print failed with the error: Mocked abandon", "Correct error dialog raised");
        done();
    }, function (status, sInformation, data) {
        assert.equal(data, "ProgressData", "On progress function receives data: " + status);
    },
        "ProgressData");

    // requires monitor to run a few loops
    api.printHtml(api.ContentType.HTML, "Hello world", {}, function (errorText) {
        assert.equal(errorText, null, "Correct done call on long running job");
        done();
    }, function (status, sInformation, data) {
        assert.equal(data, "ProgressData", "On progress function receives data: " + status);
    },
        "ProgressData");

    api.waitForSpoolingComplete(10000, function (bComplete) {
        assert.ok(bComplete, "WaitForSpoolingComplete ok - all jobs done.");
        done();
    });
});