﻿using MeadCo.ScriptX.Print.Messaging.Models;
using MeadCo.ScriptX.Print.Messaging.Requests;
using MeadCo.ScriptX.Print.Messaging.Responses;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ScriptX.Services_Client.Controllers
{
    [Route("api/v1/printhtml")]
    [ApiController]
    public class PrintHtmlv1Controller : ControllerBase
    {
        private ILogger _logger;

        public PrintHtmlv1Controller(ILogger<PrintHtmlv1Controller> logger)
        {
            _logger = logger;
        }

        /// <summary>
        /// Return the default settings for printing HTML content (headers, foooters, margins etc.)
        /// </summary>
        /// <remarks>
        ///  - requires basic license
        /// </remarks>
        /// <returns></returns>
        // GET api/v1/printHtml/settings
        [Route("settings")]
        [Produces("application/json")]
        public ActionResult<HtmlPrintSettings> GetSettings()
        {
            var settings = new HtmlPrintSettings();

            _logger.LogInformation("GET api/v1/printHtml/settings");

            return settings;
        }

        /// <summary>
        /// Return the settings for a print device the HTML will be printed to (paper size, source etc.)
        /// </summary>
        /// <remarks>
        /// - requires advanced license
        /// - deviceName must be the name of the device on the server or 'default' for the service default printer.
        /// </remarks>
        /// <param name="deviceName"></param>
        /// <param name="units"></param>
        /// <returns></returns>
        // get api/v1/printhtml/deviceinfo/{devicename}
        [Route("deviceinfo/{deviceName}/{units?}")]
        [Produces("application/json")]

        public ActionResult<DeviceSettings> GetDeviceInfo(string deviceName, PageSettings.PageMarginUnits units = PageSettings.PageMarginUnits.Default)
        {
            // we have had to replace \ with || to get past cors checking, so reinstate \ (NB: we are assuming || is rare in a printer name!)
            deviceName = deviceName.Replace("||", "\\");
            _logger.LogInformation("GET api/v1/printhtml/deviceinfo/{deviceName}/{units}", deviceName, units);
            return new DeviceSettings();
        }

        /// <summary>
        /// Obtain the default settings for printing html, default device info and list of available device names
        /// </summary>
        /// <remarks>
        /// - requires basic license
        /// - units parameter will always be interpreted as 'Default' unless license is advanced 
        /// </remarks>
        /// <param name="units"></param>
        /// <returns></returns>
        /// GET api/v1/printhtml/htmlPrintDefaults
        [Route("htmlPrintDefaults/{units?}")]
        [Produces("application/json")]
        public ActionResult<PrintHtmlDefaultSettings> GetHtmlPrintDefaults(PageSettings.PageMarginUnits units = PageSettings.PageMarginUnits.Default)
        {
            _logger.LogInformation("GET api/v1/printhtml/htmlPrintDefaults/{units}", units);

            return new PrintHtmlDefaultSettings();
        }

        /// <summary>
        /// Print html content with given html and device settings
        /// </summary>
        /// <remarks>
        /// Use of some features may require a license which will be checked 
        /// - requires basic license for InnerHTML content type
        /// - requires advanced license for URL content type, specified page margin units, specified background setting, print scale, page range
        /// </remarks>
        /// <param name="requestMessage"></param>
        /// <returns></returns>
        // POST api/v1/printHtml/print
        [Route("print")]
        [Produces("application/json")]
        public ActionResult<Print> PostPrint([FromBody] PrintHtmlDescription requestMessage)
        {
            _logger.LogInformation("POST api/v1/printHtml");

            if (requestMessage == null)
            {
                throw new ArgumentNullException(nameof(requestMessage));
            }

            if (requestMessage.Settings == null)
            {
                //throw new ArgumentNullException(nameof(requestMessage), "Html options are required.");
                requestMessage.Settings = new HtmlPrintSettings();
            }
            // in the basic use case, client may not send any device settings. 
            if (requestMessage.Device == null)
            {
                requestMessage.Device = new DevicePrintSettings();
            }

            var printer = requestMessage.Device.PrinterName;

            if (printer == null)
            {
                throw new ArgumentException("Printer not available", nameof(requestMessage.Device.PrinterName));
            }

            Print printResponse = new Print();

            _logger.LogInformation("Returning {status} [{message}], jobToken: {token}", printResponse.Status, printResponse.Message, printResponse.JobIdentifier);

            return printResponse;
        }

        // Get api/v1/printHtml/status/{jobIdentifier}
        /// <summary>
        /// Get the status of the job with the given id
        /// </summary>
        /// <remarks>
        /// This is advanced info so requires an advanced license, 
        /// without it responses will be throttled to 'real' value once per n seconds 
        /// (see call Job definition for value)
        /// </remarks>
        /// <param name="jobIdentifier"></param>
        /// <returns></returns>
        [Route("status/{jobToken}")]
        [Produces("application/json")]
        public ActionResult<JobStatus> GetStatus(string jobToken)
        {
            JobStatus js = new JobStatus(jobToken);
            _logger.LogInformation("Status of job {jobToken} is {status} [{message}]", jobToken, js.Status, js.Message);
            return js;
        }

        /// <summary>
        /// Deliver the pdf output for the job.
        /// </summary>
        /// <remarks>
        /// - requires basic license
        /// </remarks>
        /// TODO: Should check that the jobId was for the caller otherwise we 
        /// risk leaking confidential info - someone can grab the print output 
        /// intended for someone else if they know the jobId (an approach here is
        /// to obfusticate the jobId).
        /// 
        /// Note that this is called by the client side frame work with a window.open call
        /// so we have no referer and no ajax origin so we have to disable all checks.
        /// <param name="jobIdentifier"></param>
        /// <returns></returns>
        [Route("download/{jobToken}")]
        [ProducesResponseType(200, Type = typeof(PhysicalFileResult))]
        public IActionResult GetDownloadPrint(string jobToken) // Dont attempt to update to ActionResult<PhysicalFileResult> - it wont work
        {
            return NotFound();
        }
    }
}
