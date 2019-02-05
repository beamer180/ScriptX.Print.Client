<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [MeadCo][1]
    -   [log][2]
        -   [Parameters][3]
    -   [warn][4]
        -   [Parameters][5]
    -   [error][6]
        -   [Parameters][7]
    -   [version][8]
    -   [createNS][9]
        -   [Parameters][10]
        -   [Examples][11]
    -   [makeApiEndPoint][12]
        -   [Parameters][13]

## MeadCo

Static class of core functions and namespace creation for ScriptX.Services client library.

**Meta**

-   **author**: Pete Cole &lt;pcole@meadroid.com>
-   **license**: MIT license

### log

Sends the content to the console

#### Parameters

-   `text` **[string][14]** to send to console

### warn

Marks the content as a warning and sends to the console

#### Parameters

-   `text` **[string][14]** to send to console

### error

Marks the content as an error and sends to the console

#### Parameters

-   `text` **[string][14]** to send to console

### version

Get the version as a string major.minor.hotfix.build

Returns **[string][14]** the version

### createNS

Create a namespace

#### Parameters

-   `namespace` **[string][14]** path of the namespace

#### Examples

```javascript
var ui = MeadCo.createNS("MeadCo.ScriptX.Print.UI");
 ui.Show = function() { alert("hello"); }
```

Returns **[object][15]** static object for the namespace

### makeApiEndPoint

Get the url to a SccriptX.Services api endpoimt

#### Parameters

-   `serverUrl` **any** url to the server
-   `apiLocation` **any** the api, e.g. v1/printhtml

Returns **[string][14]** url to the api

[1]: #meadco

[2]: #log

[3]: #parameters

[4]: #warn

[5]: #parameters-1

[6]: #error

[7]: #parameters-2

[8]: #version

[9]: #createns

[10]: #parameters-3

[11]: #examples

[12]: #makeapiendpoint

[13]: #parameters-4

[14]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[15]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object