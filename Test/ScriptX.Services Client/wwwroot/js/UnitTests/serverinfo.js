﻿var badServerUrl = "http://localhost:12";

var serverUrl = window.location.protocol + "//" + window.location.host;
//var serverUrl = "https://scriptxservices.meadroid.com";
//var serverUrl = "http://127.0.0.1:41191/";

var licenseGuid = "{666140C4-DFC8-435E-9243-E8A54042F918}";

var badLicenseGuid = "123";

MeadCo.ScriptX.Print.reportServerError = function (txt) {
    $("#qunit-fixture").text(txt);
};