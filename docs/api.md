<br/>
<a id="MeadCo"></a>
<h2 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo : object</h2>Static class for namespace creation and core utility functions for ScriptX.Services client libraries.


* [MeadCo](#MeadCo) : object
    * [.version](#MeadCo.version)
    * [.logEnabled](#MeadCo.logEnabled)
    * [.log(text)](#MeadCo.log)
    * [.warn(text)](#MeadCo.warn)
    * [.error(text)](#MeadCo.error)
    * [.createNS(namespace)](#MeadCo.createNS) ⇒ object
    * [.makeApiEndPoint(serverUrl, apiLocation)](#MeadCo.makeApiEndPoint) ⇒ string

<br/>
<a id="MeadCo.version"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.version</h3>Get the version of this module as a string major.minor.hotfix.build

**Properties**

| Name | Type |
| --- | --- |
| version | string | 

<br/>
<a id="MeadCo.logEnabled"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.logEnabled</h3>Get/set state of logging to console of informational messages. Default is off

**Properties**

| Name | Type |
| --- | --- |
| logEnabled | boolean | 

<br/>
<a id="MeadCo.log"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.log(text)</h3>Sends the content to the console (if informational logging is enabled)


| Param | Type | Description |
| --- | --- | --- |
| text | string | to send to console |

<br/>
<a id="MeadCo.warn"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.warn(text)</h3>Marks the content as a warning and sends to the console


| Param | Type | Description |
| --- | --- | --- |
| text | string | to send to console |

<br/>
<a id="MeadCo.error"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.error(text)</h3>Marks the content as an error and sends to the console


| Param | Type | Description |
| --- | --- | --- |
| text | string | to send to console |

<br/>
<a id="MeadCo.createNS"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.createNS(namespace) ⇒ object</h3>Create a namespace


| Param | Type | Description |
| --- | --- | --- |
| namespace | string | path of the namespace |

**Returns**: object - static object for the namespace  
**Example**  
```js
var ui = MeadCo.createNS("MeadCo.ScriptX.Print.UI");
```
<br/>
<a id="MeadCo.makeApiEndPoint"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.makeApiEndPoint(serverUrl, apiLocation) ⇒ string</h3>Get the url to a ScriptX.Services api endpoint. If an enpoint is already present, it is replaced.


| Param | Type | Description |
| --- | --- | --- |
| serverUrl | string | url to the server |
| apiLocation | string | the api, e.g. v1/printhtml |

**Returns**: string - url to the api  
<br/>
<a id="factory"></a>
<h2 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    factory : object</h2>MeadCo ScriptX 'window.factory' shim (support for modern browsers and IE 11) JS client library.<br/>

**Example**  
```js
MeadCo.ScriptX.Print.UI = {
```
<br/>
<a id="MeadCo.ScriptX.Print"></a>
<h2 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.Print : object</h2>MeadCo.ScriptX.Print


* [MeadCo.ScriptX.Print](#MeadCo.ScriptX.Print) : object
    * [.onErrorAction](#MeadCo.ScriptX.Print.onErrorAction)
    * [.printerName](#MeadCo.ScriptX.Print.printerName)
    * [.version](#MeadCo.ScriptX.Print.version)
    * [.deviceSettings](#MeadCo.ScriptX.Print.deviceSettings)
    * [.isConnected](#MeadCo.ScriptX.Print.isConnected)
    * [.availablePrinterNames](#MeadCo.ScriptX.Print.availablePrinterNames)
    * [.queue](#MeadCo.ScriptX.Print.queue)
    * [.activeJobs](#MeadCo.ScriptX.Print.activeJobs)
    * [.isSpooling](#MeadCo.ScriptX.Print.isSpooling)
    * [.MeasurementUnits](#MeadCo.ScriptX.Print.MeasurementUnits) : enum
    * [.ContentType](#MeadCo.ScriptX.Print.ContentType) : enum
    * [.ErrorAction](#MeadCo.ScriptX.Print.ErrorAction) : enum
    * [.PrintStatus](#MeadCo.ScriptX.Print.PrintStatus) : enum
    * [.CollateOptions](#MeadCo.ScriptX.Print.CollateOptions) : enum
    * [.DuplexOptions](#MeadCo.ScriptX.Print.DuplexOptions) : enum
    * [.deviceSettingsFor(sPrinterName)](#MeadCo.ScriptX.Print.deviceSettingsFor) ⇒ DeviceSettingsObject
    * [.useAttributes()](#MeadCo.ScriptX.Print.useAttributes)
    * [.connect(serverUrl, licenseGuid)](#MeadCo.ScriptX.Print.connect)
    * [.connectLite(serverUrl, licenseGuid)](#MeadCo.ScriptX.Print.connectLite)
    * [.connectAsync(serverUrl, licenseGuid, resolve, reject)](#MeadCo.ScriptX.Print.connectAsync)
    * [.connectTestAsync(serverUrl, resolve, reject)](#MeadCo.ScriptX.Print.connectTestAsync)
    * [.connectDeviceAndPrinters(deviceInfo, arPrinters)](#MeadCo.ScriptX.Print.connectDeviceAndPrinters)
    * [.getFromServer(sApi, async, onSuccess, onFail)](#MeadCo.ScriptX.Print.getFromServer)
    * [.printHtml(contentType, content, htmlPrintSettings, fnDone, fnProgress, data)](#MeadCo.ScriptX.Print.printHtml) ⇒ boolean
    * [.printPdf(document, pdfPrintSettings, fnDone, fnProgress, data)](#MeadCo.ScriptX.Print.printPdf) ⇒ boolean
    * [.parseAjaxError(logText, jqXhr, textStatus, errorThrown)](#MeadCo.ScriptX.Print.parseAjaxError) ⇒ string
    * [.reportError(errorTxt)](#MeadCo.ScriptX.Print.reportError)
    * [.reportServerError(errorTxt)](#MeadCo.ScriptX.Print.reportServerError)
    * [.reportFeatureNotImplemented(featureDescription)](#MeadCo.ScriptX.Print.reportFeatureNotImplemented)
    * [.ensureSpoolingStatus()](#MeadCo.ScriptX.Print.ensureSpoolingStatus) ⇒ object
    * [.freeSpoolStatus(lock)](#MeadCo.ScriptX.Print.freeSpoolStatus)
    * [.waitForSpoolingComplete(iTimeout, fnComplete)](#MeadCo.ScriptX.Print.waitForSpoolingComplete)
    * [.PageSize](#MeadCo.ScriptX.Print.PageSize)
    * [.Margins](#MeadCo.ScriptX.Print.Margins)
    * [.DeviceSettingsObject](#MeadCo.ScriptX.Print.DeviceSettingsObject)

<br/>
<a id="MeadCo.ScriptX.Print.onErrorAction"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.Print.onErrorAction</h3>Get/set the action to take when an error occurs

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| onErrorAction | ErrorAction | the action |

<br/>
<a id="MeadCo.ScriptX.Print.printerName"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.Print.printerName</h3>Get/set the currently active printer

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| printerName | string | The name of the current printer in use. |

<br/>
<a id="MeadCo.ScriptX.Print.version"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.Print.version</h3>Get the version of this module as a string major.minor.hotfix.build

**Properties**

| Name | Type |
| --- | --- |
| version | string | 

<br/>
<a id="MeadCo.ScriptX.Print.deviceSettings"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.Print.deviceSettings</h3>Get/set the cached device settings (papersize etc) for the currently active printer

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| deviceSettings | DeviceSettingsObject | (see API /api/vi/printhtml/deviceInfo/ ) |

<br/>
<a id="MeadCo.ScriptX.Print.isConnected"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.Print.isConnected</h3>true if the library has succesfully connected to a server.

**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| isConnected | bool | true if the library has succesfully connected to a server. |

<br/>
<a id="MeadCo.ScriptX.Print.availablePrinterNames"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.Print.availablePrinterNames</h3>Get the list of printers availablefrom the server.

**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| availablePrinterNames | Array.&lt;string&gt; | an array of strings of the names of the available printers |

<br/>
<a id="MeadCo.ScriptX.Print.queue"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.Print.queue</h3>The list of jobs currently active at the server for this client

**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| queue | Array.&lt;object&gt; | array of jobs |

<br/>
<a id="MeadCo.ScriptX.Print.activeJobs"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.Print.activeJobs</h3>The number of jobs there are actgive at the server for this client

**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| activeJobs | int | the number of jobs |

<br/>
<a id="MeadCo.ScriptX.Print.isSpooling"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.Print.isSpooling</h3>Get if print is still 'spooling'.still queued at the server

**Read only**: true  
**Properties**

| Name | Type |
| --- | --- |
| isSpooling | bool | 

<br/>
<a id="MeadCo.ScriptX.Print.MeasurementUnits"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.Print.MeasurementUnits : enum</h3>Enum to describe the units used on measurements

**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| DEFAULT | number | 0 use the default at the print server |
| MM | number | 1 millimeters |
| INCHES | number | 2 |

<br/>
<a id="MeadCo.ScriptX.Print.ContentType"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.Print.ContentType : enum</h3>Enum for type of content being posted to printHtml API

**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| URL | number | 1 the url will be downloaded and printed |
| HTML | number | 2 the passed string is assumed to be a complete html document .. <html>..</html> |
| INNERHTML | number | 4 the passed string is a complete html document but missing the html tags |

<br/>
<a id="MeadCo.ScriptX.Print.ErrorAction"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.Print.ErrorAction : enum</h3>Enum for type of content being posted to printHtml API

**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| REPORT | number | 1 Call MeadCo.ScriptX.Print.reportServerError(errMsg) |
| THROW | number | 2 throw an error : throw errMsg |

<br/>
<a id="MeadCo.ScriptX.Print.PrintStatus"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.Print.PrintStatus : enum</h3>Enum for status code returned to print progress callbacks

**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| NOTSTARTED | number | 0 |
| QUEUED | number | 1 |
| STARTING | number | 2 |
| DOWNLOADING | number | 3 |
| DOWNLOADED | number | 4 |
| PRINTING | number | 5 |
| COMPLETED | number | 6 |
| PAUSED | number | 7 |
| PRINTPDF | number | 8 |
| ERROR | number | 1 |
| ABANDONED | number | 2 |

<br/>
<a id="MeadCo.ScriptX.Print.CollateOptions"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.Print.CollateOptions : enum</h3>Enum to describe the collation option when printing

**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| DEFAULT | number | 0 use the default at the print server |
| TRUE | number | 1 collate pages when printing |
| FALSE | number | 2 do not collate pages |

<br/>
<a id="MeadCo.ScriptX.Print.DuplexOptions"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.Print.DuplexOptions : enum</h3>Enum to describe the duplex print option to use when printing

**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| DEFAULT | number | 0 use the default at the print server |
| SIMPLEX | number | 1 |
| VERTICAL | number | 2 |
| HORIZONTAL | number | 3 |

<br/>
<a id="MeadCo.ScriptX.Print.deviceSettingsFor"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.Print.deviceSettingsFor(sPrinterName) ⇒ DeviceSettingsObject</h3>Get the device settings (papersize etc) for the named printer. This call is synchronous 


| Param | Type | Description |
| --- | --- | --- |
| sPrinterName | string | the name of the printer device to return the settings for |

**Returns**: DeviceSettingsObject - object with properties  
<br/>
<a id="MeadCo.ScriptX.Print.useAttributes"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.Print.useAttributes()</h3>search for processing attibutes for connection and subscription/license and process

**Example**  
```js
<!-- an example connection to an On Premise server for ScriptX.Services -->
```
<br/>
<a id="MeadCo.ScriptX.Print.connect"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.Print.connect(serverUrl, licenseGuid)</h3>Specify the server to use and the subscription/license id. 


| Param | Type | Description |
| --- | --- | --- |
| serverUrl | string | the 'root' url to the server (the api path will be added by the library) |
| licenseGuid | string | the license/subscription identifier |

<br/>
<a id="MeadCo.ScriptX.Print.connectLite"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.Print.connectLite(serverUrl, licenseGuid)</h3>Specify the server and the subscription/license id to use on AJAX calls. No call is made in this function


| Param | Type | Description |
| --- | --- | --- |
| serverUrl | string | the 'root' url to the server (the api path will be added by the library) |
| licenseGuid | string | the license/subscription identifier |

<br/>
<a id="MeadCo.ScriptX.Print.connectAsync"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.Print.connectAsync(serverUrl, licenseGuid, resolve, reject)</h3>Specify the server to use and the subscription/license id.


| Param | Type | Description |
| --- | --- | --- |
| serverUrl | string | the 'root' url to the server (the api path will be added by the library) |
| licenseGuid | string | the license/subscription identifier |
| resolve | function | function to call on success, dataObject contains the device settings for the default device. |
| reject | function | function to call on failure |

<br/>
<a id="MeadCo.ScriptX.Print.connectTestAsync"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.Print.connectTestAsync(serverUrl, resolve, reject)</h3>Test if there is a MeadCo PrintHtml API server at the url


| Param | Type | Description |
| --- | --- | --- |
| serverUrl | string | the 'root' url to the server (the api path will be added by the library) |
| resolve | function | function to call on success |
| reject | function | function to call on failure |

<br/>
<a id="MeadCo.ScriptX.Print.connectDeviceAndPrinters"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.Print.connectDeviceAndPrinters(deviceInfo, arPrinters)</h3>Cache the given device info and available printers in this static class instance


| Param | Type | Description |
| --- | --- | --- |
| deviceInfo | object | the device name and settings (papersize etc) |
| arPrinters | array | the names of the available printers |

<br/>
<a id="MeadCo.ScriptX.Print.getFromServer"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.Print.getFromServer(sApi, async, onSuccess, onFail)</h3>Call a /printHtml API on the server with GET


| Param | Type | Description |
| --- | --- | --- |
| sApi | string | the api to call on the connected server |
| async | bool | true for asynchronous call, false for synchronous |
| onSuccess | function | function to call on success |
| onFail | function | function to call on failure |

<br/>
<a id="MeadCo.ScriptX.Print.printHtml"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.Print.printHtml(contentType, content, htmlPrintSettings, fnDone, fnProgress, data) ⇒ boolean</h3>Post a request to the server to print some html and monitor the print job 


| Param | Type | Description |
| --- | --- | --- |
| contentType | ContentType | enum type of content given (html snippet, url) |
| content | string | the content - a url, html snippet or complete html |
| htmlPrintSettings | object | the html settings to use such as headers and footers, device settings (printer to use, copies etc) are taken from this static |
| fnDone | function | function to call when printing complete (and output returned), arg is null on no error, else error message. |
| fnProgress | function | function to call when job status is updated |
| data | any | object to give pass to fnCallback |

**Returns**: boolean - - true if a print was started (otherwise an error will be thrown)  
<br/>
<a id="MeadCo.ScriptX.Print.printPdf"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.Print.printPdf(document, pdfPrintSettings, fnDone, fnProgress, data) ⇒ boolean</h3>Post a request to the server to print some html and monitor the print job 


| Param | Type | Description |
| --- | --- | --- |
| document | string | full url to the pdf document to be printed |
| pdfPrintSettings | object | the settings to use such as rotation, scaling. device settings (printer to use, copies etc) are taken from this static |
| fnDone | function | function to call when printing complete (and output returned), arg is null on no error, else error message. |
| fnProgress | function | function to call when job status is updated |
| data | any | object to give pass to fnCallback |

**Returns**: boolean - - true if a print was started (otherwise an error will be thrown)  
<br/>
<a id="MeadCo.ScriptX.Print.parseAjaxError"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.Print.parseAjaxError(logText, jqXhr, textStatus, errorThrown) ⇒ string</h3>Extract the error text from jQuery AJAX response


| Param | Type | Description |
| --- | --- | --- |
| logText | string | The lead-in text for a console.log entry |
| jqXhr | object | jQuery ajax header |
| textStatus | string | textStatus result determined by jQuery |
| errorThrown | string | The server exception dewtermined by jQuery |

**Returns**: string - The error text to display  
<br/>
<a id="MeadCo.ScriptX.Print.reportError"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.Print.reportError(errorTxt)</h3>'derived' classes call this function to report errors, will either throw or report depending on 


| Param | Type | Description |
| --- | --- | --- |
| errorTxt | string | the error text to display |

<br/>
<a id="MeadCo.ScriptX.Print.reportServerError"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.Print.reportServerError(errorTxt)</h3>overridable function for reporting an error. 'derived' classes call this


| Param | Type | Description |
| --- | --- | --- |
| errorTxt | string | the error text to display ```js // overload cloud print library report error MeadCo.ScriptX.Print.reportServerError = function (errorTxt) {    app.Messages.PrintErrorBox(errorTxt); } ``` |

<br/>
<a id="MeadCo.ScriptX.Print.reportFeatureNotImplemented"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.Print.reportFeatureNotImplemented(featureDescription)</h3>overridable function for reporting an implementation isnt available. 'derived' classes call this


| Param | Type | Description |
| --- | --- | --- |
| featureDescription | string | descriptn of the feature that isnt available ```js // overload cloud print library report error MeadCo.ScriptX.Print.reportFeatureNotImplemented = function (featureDescription) {   app.Messages.PrintErrorBox(featureDescription + " is not available yet with the ScriptX.Services.\n\nThis feature will be implemented soon."); } ``` |

<br/>
<a id="MeadCo.ScriptX.Print.ensureSpoolingStatus"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.Print.ensureSpoolingStatus() ⇒ object</h3>Make sure that spooling status is locked active while asynchronous UI that may start

**Returns**: object - a fake job to lock the spooling status on  
**Example**  
```js
var lock = MeadCo.ScriptX.Print.ensureSpoolingStatus
```
<br/>
<a id="MeadCo.ScriptX.Print.freeSpoolStatus"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.Print.freeSpoolStatus(lock)</h3>Remove a lock on the queue that was created by a call to ensureSpoolingStatus().


| Param | Type | Description |
| --- | --- | --- |
| lock | object | the lock object returned by ensureSpoolingStatus() |

<br/>
<a id="MeadCo.ScriptX.Print.waitForSpoolingComplete"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.Print.waitForSpoolingComplete(iTimeout, fnComplete)</h3>Start (asynchronous) monitor to observe until no more job spooling/waiting at the server


| Param | Type | Description |
| --- | --- | --- |
| iTimeout | int | wait until complete or timeout (in ms) -1 => infinite |
| fnComplete | function | callback function, arg is true if all jobs complete |

<br/>
<a id="MeadCo.ScriptX.Print.PageSize"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.Print.PageSize</h3>Describe the size of a page by its width and height.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| width | number | width of paper in requested units |
| height | number | height of paper in requested units |

<br/>
<a id="MeadCo.ScriptX.Print.Margins"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.Print.Margins</h3>Describe the margins within which to print.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| left | number | left margin in requested units |
| top | number | top margin in requested units |
| right | number | right margin in requested units |
| bottom | number | bottom margin in requested units |

<br/>
<a id="MeadCo.ScriptX.Print.DeviceSettingsObject"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.Print.DeviceSettingsObject</h3>Information about and the settings to use with an output printing device

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| printerName | string | The name of the printer |
| paperSizeName | string | The descriptive name of the papersize, e.g. "A4" |
| paperSourceName | string | The descriptive name of the paper source, e.g. "Upper tray" |
| collate | CollateOptions | The collation to use when printing |
| copies | number | The number of copies to print |
| duplex | DuplexOptions | The dulex printing option |
| units | MeasurementUnits | Measurement units for papersize and margins |
| paperPageSize | PageSize | The size of the paper (in requested units) |
| unprintableMargins | Margins | The margin that cannot be printed in (in requested units) |
| status | number | Status code for the status of the device |
| port | string | Printer connection port name/description |
| attributes | number | Printer attributes |
| serverName | string | Name of the server to which the printer is connected |
| shareName | string | Name of the share |
| location | string | description of the location of the printer |
| isLocal | boolean | true if the printer is local to the server |
| isNetwork | boolean | true if the server is on the network |
| isShared | boolean | true if the printer is shared |
| isDefault | boolean | true if this is the default printer on the service |
| bins | Array.&lt;string&gt; | Array of the names of the available paper sources |
| forms | Array.&lt;string&gt; | Array of the names of the avbailable paper sizes |

<br/>
<a id="MeadCo.ScriptX.PrintHTML"></a>
<h2 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintHTML : object</h2>MeadCo.ScriptX.Print.HTML


* [MeadCo.ScriptX.PrintHTML](#MeadCo.ScriptX.PrintHTML) : object
    * [.documentContentToPrint](#MeadCo.ScriptX.PrintHTML.documentContentToPrint)
    * [.version](#MeadCo.ScriptX.PrintHTML.version)
    * [.version](#MeadCo.ScriptX.PrintHTML.version)
    * ~~[.PageMarginUnits](#MeadCo.ScriptX.PrintHTML.PageMarginUnits) : enum~~
    * [.PageOrientation](#MeadCo.ScriptX.PrintHTML.PageOrientation) : enum
    * [.PrintingPass](#MeadCo.ScriptX.PrintHTML.PrintingPass) : enum
    * [.BooleanOption](#MeadCo.ScriptX.PrintHTML.BooleanOption) : enum
    * [.frameContentToPrint(sFrame)](#MeadCo.ScriptX.PrintHTML.frameContentToPrint) ⇒ string
    * [.printDocument(fnCallOnDone, fnCallback, data)](#MeadCo.ScriptX.PrintHTML.printDocument) ⇒ boolean
    * [.printFrame(sFrame, fnCallOnDone, fnCallback, data)](#MeadCo.ScriptX.PrintHTML.printFrame) ⇒ boolean
    * [.printFromUrl(sUrl, fnCallOnDone, fnCallback, data)](#MeadCo.ScriptX.PrintHTML.printFromUrl) ⇒ boolean
    * [.printHtml(sHtml, fnCallOnDone, fnCallback, data)](#MeadCo.ScriptX.PrintHTML.printHtml) ⇒ boolean
    * [.connectLite(serverUrl, licenseGuid)](#MeadCo.ScriptX.PrintHTML.connectLite)
    * [.connect(serverUrl, licenseGuid)](#MeadCo.ScriptX.PrintHTML.connect)
    * [.connectAsync(serverUrl, licenseGuid, resolve, reject)](#MeadCo.ScriptX.PrintHTML.connectAsync)
    * [.connectAsync(serverUrl, licenseGuid, resolve, reject)](#MeadCo.ScriptX.PrintHTML.connectAsync)
    * [.Margins](#MeadCo.ScriptX.PrintHTML.Margins)
    * [.PageSettings](#MeadCo.ScriptX.PrintHTML.PageSettings)
    * [.ExtraHeaderAndFooterSettings](#MeadCo.ScriptX.PrintHTML.ExtraHeaderAndFooterSettings)
    * [.Settings](#MeadCo.ScriptX.PrintHTML.Settings)

<br/>
<a id="MeadCo.ScriptX.PrintHTML.documentContentToPrint"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintHTML.documentContentToPrint</h3>Get the complete currently displayed document as string of HTML.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| documentContentToPrint | string | the current content in the window document as html |

<br/>
<a id="MeadCo.ScriptX.PrintHTML.version"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintHTML.version</h3>Get the version of this module as a string major.minor.hotfix.build

**Properties**

| Name | Type |
| --- | --- |
| version | string | 

<br/>
<a id="MeadCo.ScriptX.PrintHTML.version"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintHTML.version</h3>Get the version of this module as a string major.minor.hotfix.build

**Properties**

| Name | Type |
| --- | --- |
| version | string | 

<br/>
<a id="MeadCo.ScriptX.PrintHTML.PageMarginUnits"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    ~~MeadCo.ScriptX.PrintHTML.PageMarginUnits : enum~~</h3>***Deprecated***

Enum to describe the units used on measurements - please use MeadCo.ScriptX.Print.MeasurementUnits instead

**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| DEFAULT | number | 0 use the default at the print server |
| MM | number | 1 millimeters |
| INCHES | number | 2 |

<br/>
<a id="MeadCo.ScriptX.PrintHTML.PageOrientation"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintHTML.PageOrientation : enum</h3>Enum to describe the orientation of the paper

**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| DEFAULT | number | 0 use the default at the print server |
| LANDSCAPE | number | 1 |
| PORTRAIT | number | 2 |

<br/>
<a id="MeadCo.ScriptX.PrintHTML.PrintingPass"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintHTML.PrintingPass : enum</h3>Enum to describe the pages to be printed

**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| ALL | number | 1 print all pages |
| ODD | number | 2 print odd numbered pages only |
| EVEN | number | 3 print even numbered pages only |

<br/>
<a id="MeadCo.ScriptX.PrintHTML.BooleanOption"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintHTML.BooleanOption : enum</h3>Enum to describe a boolean value or use the default

**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| DEFAULT | number | 0 use the default at the print server |
| TRUE | number | 1 |
| FALSE | number | 2 |

<br/>
<a id="MeadCo.ScriptX.PrintHTML.frameContentToPrint"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintHTML.frameContentToPrint(sFrame) ⇒ string</h3>Get the complete currently displayed document in a frame as string of HTML.


| Param | Type | Description |
| --- | --- | --- |
| sFrame | string | the name of the frame |

**Returns**: string - the current content in the frame window document as html  
<br/>
<a id="MeadCo.ScriptX.PrintHTML.printDocument"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintHTML.printDocument(fnCallOnDone, fnCallback, data) ⇒ boolean</h3>Print the complete current document in the window using the settings made by property updates before this function is called.


| Param | Type | Description |
| --- | --- | --- |
| fnCallOnDone | function | function to call when printing complete (and output returned), arg is null on no error, else error message. |
| fnCallback | function | function to call when job status is updated |
| data | any | object to give pass to fnCallback |

**Returns**: boolean - - true if a print was started (otherwise an error will be thrown)  
<br/>
<a id="MeadCo.ScriptX.PrintHTML.printFrame"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintHTML.printFrame(sFrame, fnCallOnDone, fnCallback, data) ⇒ boolean</h3>Print the complete current document in the named iframe using the settings made by property updates before this function is called.


| Param | Type | Description |
| --- | --- | --- |
| sFrame | string | the name of the iframe whose content is to be printed. |
| fnCallOnDone | function | function to call when printing complete (and output returned), arg is null on no error, else error message. |
| fnCallback | function | function to call when job status is updated |
| data | any | object to give pass to fnCallback |

**Returns**: boolean - - true if a print was started (otherwise an error will be thrown)  
<br/>
<a id="MeadCo.ScriptX.PrintHTML.printFromUrl"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintHTML.printFromUrl(sUrl, fnCallOnDone, fnCallback, data) ⇒ boolean</h3>Print the document obtained by downloading the given url using the settings made by property updates before this function is called.


| Param | Type | Description |
| --- | --- | --- |
| sUrl | string | the fully qualified url to the document to be printed. |
| fnCallOnDone | function | function to call when printing complete (and output returned), arg is null on no error, else error message. |
| fnCallback | function | function to call when job status is updated |
| data | any | object to give pass to fnCallback |

**Returns**: boolean - - true if a print was started (otherwise an error will be thrown)  
<br/>
<a id="MeadCo.ScriptX.PrintHTML.printHtml"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintHTML.printHtml(sHtml, fnCallOnDone, fnCallback, data) ⇒ boolean</h3>Print the fragment of html using the settings made by property updates before this function is called.


| Param | Type | Description |
| --- | --- | --- |
| sHtml | string | fragment/snippet of html to print, must be complete HTML document. |
| fnCallOnDone | function | function to call when printing complete (and output returned), arg is null on no error, else error message. |
| fnCallback | function | function to call when job status is updated |
| data | any | object to give pass to fnCallback |

**Returns**: boolean - - true if a print was started (otherwise an error will be thrown)  
<br/>
<a id="MeadCo.ScriptX.PrintHTML.connectLite"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintHTML.connectLite(serverUrl, licenseGuid)</h3>Specify the server and the subscription/license id to use on AJAX calls. No call is made in this function


| Param | Type | Description |
| --- | --- | --- |
| serverUrl | string | the 'root' url to the server (the api path will be added by the library) |
| licenseGuid | string | the license/subscription identifier |

<br/>
<a id="MeadCo.ScriptX.PrintHTML.connect"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintHTML.connect(serverUrl, licenseGuid)</h3>Specify the server to use and the subscription/license id. 


| Param | Type | Description |
| --- | --- | --- |
| serverUrl | string | the 'root' url to the server (the api path will be added by the library) |
| licenseGuid | string | the license/subscription identifier |

<br/>
<a id="MeadCo.ScriptX.PrintHTML.connectAsync"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintHTML.connectAsync(serverUrl, licenseGuid, resolve, reject)</h3>Specify the server to use and the subscription/license id. 


| Param | Type | Description |
| --- | --- | --- |
| serverUrl | string | the 'root' url to the server (the api path will be added by the library) |
| licenseGuid | string | the license/subscription identifier |
| resolve | function | function to call on success |
| reject | function | function to call on failure |

<br/>
<a id="MeadCo.ScriptX.PrintHTML.connectAsync"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintHTML.connectAsync(serverUrl, licenseGuid, resolve, reject)</h3>Specify the server to use and the subscription/license id. 


| Param | Type | Description |
| --- | --- | --- |
| serverUrl | string | the 'root' url to the server (the api path will be added by the library) |
| licenseGuid | string | the license/subscription identifier |
| resolve | function | function to call on success |
| reject | function | function to call on failure |

<br/>
<a id="MeadCo.ScriptX.PrintHTML.Margins"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintHTML.Margins</h3>**Properties**

| Name | Type | Description |
| --- | --- | --- |
| left | number | left margin in requested units |
| top | number | top margin in requested units |
| right | number | right margin in requested units |
| bottom | number | bottom margin in requested units |

<br/>
<a id="MeadCo.ScriptX.PrintHTML.PageSettings"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintHTML.PageSettings</h3>**Properties**

| Name | Type | Description |
| --- | --- | --- |
| orientation | PageOrientation | orientation of the paper (size and source is a device setting) |
| units | MeasurementUnits | measurement units for margins |
| margins | Margins | margins to use |

<br/>
<a id="MeadCo.ScriptX.PrintHTML.ExtraHeaderAndFooterSettings"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintHTML.ExtraHeaderAndFooterSettings</h3>**Properties**

| Name | Type |
| --- | --- |
| allPagesHeader | string | 
| allPagesFooter | string | 
| firstPageHeader | string | 
| firstPageFooter | string | 
| extraFirstPageFooter | string | 
| allHeaderHeight | number | 
| allFooterHeight | number | 
| firstHeaderHeight | number | 
| firstFooterHeight | number | 
| extraFirstFooterHeight | number | 

<br/>
<a id="MeadCo.ScriptX.PrintHTML.Settings"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintHTML.Settings</h3>The soft settings to use when printing html content - headers, footers and margins

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| header | string | Page header for all pages. |
| footer | string | Page footer for all pages. |
| headerFooterFont | string | description of font to use for header/footer |
| viewScale | number | the scaling to use when printing expressed as a percentage. -1 => scale to fit |
| locale | string | language/locale - used for formatting date/time values in header/footer. defaults to client browser setting |
| timezoneOffset | number | client browser timezone offset so server will print correct time |
| shortDateFormat | string | formating string for short dates, if not provided then uses the locale default, or the server default |
| longDateFormat | string | formating string for long dates, if not provided then uses the locale default, or the server default |
| printBackgroundColorsAndImages | BooleanOption | True if background colours and images are to be printed. |
| page | PageSettings | orientation and margins to use on the paper |
| extraHeadersAndFooters | ExtraHeaderAndFooterSettings | enhanced headers and footers |
| pageRange | string | the (set of) page ranges to print, if empty, print all. |
| printingPass | PrintingPass | print all, or odd or even only? |
| jobTitle | string | description to use on the job in the print queue |
| documentUrl | string | the document url to use in headers and footers |

<br/>
<a id="MeadCo.ScriptX.PrintLicensing"></a>
<h2 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintLicensing : object</h2>MeadCo.ScriptX.Print.Licensing


* [MeadCo.ScriptX.PrintLicensing](#MeadCo.ScriptX.PrintLicensing) : object
    * [.version](#MeadCo.ScriptX.PrintLicensing.version)
    * [.result](#MeadCo.ScriptX.PrintLicensing.result)
    * [.validLicense](#MeadCo.ScriptX.PrintLicensing.validLicense)
    * [.License](#MeadCo.ScriptX.PrintLicensing.License)
    * [.connect(serverUrl, slicenseGuid)](#MeadCo.ScriptX.PrintLicensing.connect)
    * [.connectLite(serverUrl, slicenseGuid, revision, path)](#MeadCo.ScriptX.PrintLicensing.connectLite)
    * [.apply(licenseGuid, revision, path)](#MeadCo.ScriptX.PrintLicensing.apply) ⇒ license
    * [.applyAsync(licenseGuid, revision, path, resolve, reject)](#MeadCo.ScriptX.PrintLicensing.applyAsync)
    * [.GetLicenseAsync(resolve, reject)](#MeadCo.ScriptX.PrintLicensing.GetLicenseAsync)
    * [.LicenseOptions](#MeadCo.ScriptX.PrintLicensing.LicenseOptions)
    * [.license](#MeadCo.ScriptX.PrintLicensing.license)

<br/>
<a id="MeadCo.ScriptX.PrintLicensing.version"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintLicensing.version</h3>Get the version of this module as a string major.minor.hotfix.build

**Properties**

| Name | Type |
| --- | --- |
| version | string | 

<br/>
<a id="MeadCo.ScriptX.PrintLicensing.result"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintLicensing.result</h3>Get the result code for the last attempt to apply a license.

**Properties**

| Name | Type |
| --- | --- |
| result | number | 

<br/>
<a id="MeadCo.ScriptX.PrintLicensing.validLicense"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintLicensing.validLicense</h3>Get whether a license has been applied successfully

**Properties**

| Name | Type |
| --- | --- |
| validLicense | boolean | 

<br/>
<a id="MeadCo.ScriptX.PrintLicensing.License"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintLicensing.License</h3>Get the details on the connected license. If it hasnt been applied yet, then query

**Properties**

| Name | Type |
| --- | --- |
| License | license | 

<br/>
<a id="MeadCo.ScriptX.PrintLicensing.connect"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintLicensing.connect(serverUrl, slicenseGuid)</h3>Specify the server to use and the license Guid.


| Param | Type | Description |
| --- | --- | --- |
| serverUrl | string | the 'root' url to the server (the api path will be added by the library) |
| slicenseGuid | string | the license GUID as provided by MeadCo. Optional unless will call GetLicenseAsync() without calling apply |

<br/>
<a id="MeadCo.ScriptX.PrintLicensing.connectLite"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintLicensing.connectLite(serverUrl, slicenseGuid, revision, path)</h3>Specify the server to use and the license Guid in order to get details on the license via the License property


| Param | Type | Description |
| --- | --- | --- |
| serverUrl | string | the 'root' url to the server (the api path will be added by the library) |
| slicenseGuid | string | the license GUID as provided by MeadCo. Optional unless will call GetLicenseAsync() without calling apply |
| revision | number | the revision number of the licsnse as provided by MeadCo. |
| path | string | fully qualified path to the license file (.mlf file). Use the value 'warehouse' to download from the public MeadCo License warehouse |

<br/>
<a id="MeadCo.ScriptX.PrintLicensing.apply"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintLicensing.apply(licenseGuid, revision, path) ⇒ license</h3>Apply (make usable) the MeadCo ScriptX Client license for use with this content. If the license is not already cached it will be downloaded and cached. 


| Param | Type | Description |
| --- | --- | --- |
| licenseGuid | string | the license GUID as provided by MeadCo. |
| revision | number | the revision number of the licsnse as provided by MeadCo. |
| path | string | fully qualified path to the license file (.mlf file). Use the value 'warehouse' to download from the public MeadCo License warehouse |

**Returns**: license - details the license that was sucessfully applied, null if none available  
<br/>
<a id="MeadCo.ScriptX.PrintLicensing.applyAsync"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintLicensing.applyAsync(licenseGuid, revision, path, resolve, reject)</h3>Apply (make usable) the MeadCo ScriptX Client license for use with this content. If the license is not already cached it will be downloaded and cached.


| Param | Type | Description |
| --- | --- | --- |
| licenseGuid | string | the license GUID as provided by MeadCo. |
| revision | number | the revision number of the licsnse as provided by MeadCo. |
| path | string | fully qualified path to the license file (.mlf file). Use the value 'warehouse' to download from the public MeadCo License warehouse |
| resolve | function | function to call on success |
| reject | function | function to call on failure with reason for failure |

<br/>
<a id="MeadCo.ScriptX.PrintLicensing.GetLicenseAsync"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintLicensing.GetLicenseAsync(resolve, reject)</h3>Get the details on the connected license. If it hasnt been applied yet, then query


| Param | Type | Description |
| --- | --- | --- |
| resolve | function | function to call on success |
| reject | function | function to call on failure with reason for failure |

<br/>
<a id="MeadCo.ScriptX.PrintLicensing.LicenseOptions"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintLicensing.LicenseOptions</h3>The capabilities that can be licensed.

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| basicHtmlPrinting | boolean | True if Add-on compatible basic html printing is available (always true) |
| advancedPrinting | boolean | True if Add-on compatible advanced html printing features are available |
| enhancedFormatting | boolean | True if Add-on compatible enhanced formatting is available |
| printPdf | boolean | True if printing PDF files is available |
| printRaw | boolean | True if Raw printing is available |

<br/>
<a id="MeadCo.ScriptX.PrintLicensing.license"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintLicensing.license</h3>License details

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| guid | string | The unique id of the license |
| company | string | The name of the license owner |
| companyHomePage | string | Url of company home page |
| from | Date | Date license is valid from |
| to | Date | Date license is vaid till |
| options | LicenseOptions | The options enabled by the license |
| domains | Array.string | the domains the license can be used from |

<br/>
<a id="MeadCo.ScriptX.PrintPDF"></a>
<h2 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintPDF : object</h2>MeadCo.ScriptX.Print.PDF


* [MeadCo.ScriptX.PrintPDF](#MeadCo.ScriptX.PrintPDF) : object
    * [.PageOrientation](#MeadCo.ScriptX.PrintPDF.PageOrientation) : enum
    * [.BooleanOption](#MeadCo.ScriptX.PrintPDF.BooleanOption) : enum
    * [.PdfPageScaling](#MeadCo.ScriptX.PrintPDF.PdfPageScaling) : enum
    * [.print(sUrl, fnCallOnDone, fnCallback, data)](#MeadCo.ScriptX.PrintPDF.print) ⇒ boolean
    * [.connectLite(serverUrl, licenseGuid)](#MeadCo.ScriptX.PrintPDF.connectLite)
    * [.connect(serverUrl, licenseGuid)](#MeadCo.ScriptX.PrintPDF.connect)
    * [.Settings](#MeadCo.ScriptX.PrintPDF.Settings)

<br/>
<a id="MeadCo.ScriptX.PrintPDF.PageOrientation"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintPDF.PageOrientation : enum</h3>Enum to describe the orientation of the paper

**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| DEFAULT | number | 0 use the default at the print server |
| LANDSCAPE | number | 1 |
| PORTRAIT | number | 2 |

<br/>
<a id="MeadCo.ScriptX.PrintPDF.BooleanOption"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintPDF.BooleanOption : enum</h3>Enum to describe a boolean value or use the default

**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| DEFAULT | number | 0 use the default at the print server |
| TRUE | number | 1 |
| FALSE | number | 2 |

<br/>
<a id="MeadCo.ScriptX.PrintPDF.PdfPageScaling"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintPDF.PdfPageScaling : enum</h3>Enum to describe the page scaling to perfor,

**Read only**: true  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| UNDEFINED | number | Not specified (ShrinkToFit is used instead) |
| NONE | number | No scaling |
| FITTOPAPER | number | Scale to fit to paper |
| SHRINKLARGEPAGESOnly | number | scale oversized pages |

<br/>
<a id="MeadCo.ScriptX.PrintPDF.print"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintPDF.print(sUrl, fnCallOnDone, fnCallback, data) ⇒ boolean</h3>Print the document obtained by downloading the given url.


| Param | Type | Description |
| --- | --- | --- |
| sUrl | string | the fully qualified url to the PDF document to be printed. |
| fnCallOnDone | function | function to call when printing complete (and output returned), arg is null on no error, else error message. |
| fnCallback | function | function to call when job status is updated |
| data | any | object to give pass to fnCallback |

**Returns**: boolean - - true if a print was started (otherwise an error will be thrown)  
<br/>
<a id="MeadCo.ScriptX.PrintPDF.connectLite"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintPDF.connectLite(serverUrl, licenseGuid)</h3>Specify the server and the subscription/license id to use on AJAX calls. No call is made in this function


| Param | Type | Description |
| --- | --- | --- |
| serverUrl | string | the 'root' url to the server (the api path will be added by the library) |
| licenseGuid | string | the license/subscription identifier |

<br/>
<a id="MeadCo.ScriptX.PrintPDF.connect"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintPDF.connect(serverUrl, licenseGuid)</h3>Specify the server to use and the subscription/license id. 


| Param | Type | Description |
| --- | --- | --- |
| serverUrl | string | the 'root' url to the server (the api path will be added by the library) |
| licenseGuid | string | the license/subscription identifier |

<br/>
<a id="MeadCo.ScriptX.PrintPDF.Settings"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    MeadCo.ScriptX.PrintPDF.Settings</h3>The soft settings to use when printing html content - headers, footers and margins

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| pageRange | string | The rage of pages to print. Empty means all, or from-to or comma delimited sets of from-to |
| shrinkToFit | BooleanOption | Shrink the PDF page to fit the paper, optional true by default |
| pageScaling | PdfPageScaling | If given then shrinkToFit is ignored and this scaling is used. |
| autoRotateCenter | BooleanOption | Indicates whether pages should be rotated to fit on the paper and centered. If this parameter is not given then it will be set to true if shrinkToFit is true or pageScaling is FITTOPAPER. |
| orientation | PageOrientation | Required oritentation on the printed paper |
| monochrome | boolean | Specifies if monochrome printing should be used. This option is known not to work with some HP printers due to issues in HP print drivers. |
| normalise | boolean | Indicates whether or not the pages should be processed to ensure drawing operations are at the expected positions. This option may assist if documents do not print as required. |

<br/>
<a id="secmgr"></a>
<h2 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    secmgr : object</h2>MeadCo ScriptX 'window.secmgr' shim (support for modern browsers and IE 11) JS client library


* [secmgr](#secmgr) : object
    * [.version](#secmgr.version)
    * [.GetLicenseAsync(resolve, reject)](#secmgr.GetLicenseAsync)

<br/>
<a id="secmgr.version"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    secmgr.version</h3>Get the version of this module as a string major.minor.hotfix.build

**Properties**

| Name | Type |
| --- | --- |
| version | string | 

<br/>
<a id="secmgr.GetLicenseAsync"></a>
<h3 style="margin: 10px 0px; border-width: 0 0 2px 0; border-style: solid; border-color: #ede9e9">
    secmgr.GetLicenseAsync(resolve, reject)</h3>Get the details of the license using Asynchronous calls to the server.


| Param | Type | Description |
| --- | --- | --- |
| resolve | function | function to call on successfulk completion |
| reject | function | function to call on failure with reason for failure |
