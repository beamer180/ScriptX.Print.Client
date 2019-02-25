﻿QUnit.test("Namespace basics", function (assert) {

    assert.ok(MeadCo.ScriptX.Print.PDF, "MeadCo.ScriptX.Print.PDF namespace exists");
    var api = MeadCo.ScriptX.Print.PDF;

    assert.equal(api.version, "1.5.2.0", "Correct version");

    assert.equal(MeadCo.ScriptX.Print.MeasurementUnits.MM, 1, "MeasurementUnits enum is OK");
    assert.equal(MeadCo.ScriptX.Print.MeasurementUnits.XX, undefined, "MeasuremmentUnits enum is OK");

 });

QUnit.test("Connecting to service", function (assert) {

    var done = assert.async(4);

    var api = MeadCo.ScriptX.Print.PDF;

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

    assert.strictEqual(MeadCo.ScriptX.Print.printerName, "", "Default printer name has not yet been set");

    api.connectAsync(url, licenseGuid, function (data) {
        assert.equal(MeadCo.ScriptX.Print.printerName, "Test printer", "Default printer name has been set");
        done();
    }, function (errorText) {
        assert.ok(false, "Should have connected to: " + url + " error: " + errorText);
        done();
    });
});

QUnit.test("Printing content", function (assert) {

    var done = assert.async(1);

    var api = MeadCo.ScriptX.Print.PDF;

    api.connectAsync(serverUrl, licenseGuid, function (data) {

        assert.equal(MeadCo.ScriptX.Print.printerName, "Test printer", "Default printer name has been set");
        done();

        var done2 = assert.async(5);

        // immediate completion
        api.print("",function (errorText) {
            assert.equal(errorText, "Request to print no content", "Correct done call on immediate completion");
            done2();
        }, function (status, sInformation, data) {
            assert.equal(data, "ProgressData1", "On progress1 function receives data: " + status);
        },
            "ProgressData1");

        // ok job at server 
        // error in job from server
        api.print("http://flipflip.com/?f=pdf0", function (errorText) {
            assert.strictEqual(errorText,null,"Immediate print correct done call (no error)");
            done2();
        }, function (status, sInformation, data) {
            assert.equal(data, "ProgressData2", "On progress2 function receives data: " + status);
        },
            "ProgressData2");

 
        // error in job from server
        api.print("http://flipflip.com/?f=pdf1", function (errorText) {
            assert.equal(errorText, "Server error", "Correct done call (mocked abandoned)");
            assert.equal($("#qunit-fixture").text(), "The print failed with the error: Mocked abandon", "Correct error dialog raised");
            done2();
        }, function (status, sInformation, data) {
            assert.equal(data, "ProgressData3", "On progress3 function receives data: " + status);
        },
            "ProgressData3");

        api.print("http://flipflip.com/?f=pdf2", function (errorText) {
            assert.strictEqual(null, errorText,"Loger job correct done call (no error)");
            done2();
        }, function (status, sInformation, data) {
            assert.equal(data, "ProgressData4", "On progress4 function receives data: " + status);
        },
            "ProgressData4");

        MeadCo.ScriptX.Print.waitForSpoolingComplete(10000, function (bComplete) {
            assert.ok(bComplete, "WaitForSpoolingComplete ok - all jobs done.");
            done2();
        });

    }, function (errorText) {
        assert.ok(false, "Should have connected to: " + url + " error: " + errorText);
        done();
    });

});