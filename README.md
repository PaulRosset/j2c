# jsonTocsv (j2c)

[![Travis CI Build Status](https://travis-ci.org/PaulRosset/j2c.svg?branch=master)](https://travis-ci.org/PaulRosset/j2c)

CLI that transform a JSON to CSV with Key,Value format. Usefull to list all keys from a json object.

A web app also available -->
[Web App jsonToCsv](https://jsontocsv.paulrossethings.com/)

# Installation

## Install CLI :

```shell
npm install json2csv-cli -g
```

## Install Api

```shell
npm install --save json2csv-cli
```

# Usage CLI

```shell
j2c --json [file.json] --csv [file.csv]
```

```shell
Options:

    -V, --version       output the version number
    --json [file.json]  Your entry file, must be a json file.
    --csv [file.csv]    The csv file that will be saved. (If not existing , will create it)
    -f, --first         Specify the name of the object at the first position (default = obj)
    -h, --help          output usage information
```

# Usage Api

The Api is available for <strong>Browser and nodejs.</strong>

```javascript
import J2C from "json2csv-cli";
```

or

```javascript
const J2C = require("json2csv-cli");
```

```javascript
const parsedJson = JSON.parse(jsonUnParsed); // transform the JSON in JS object
const jsonTocsv = new J2C(); // Instanciate
jsonTocsv.convert(parsedJson); // Use convert() method to transform the JS object in csv format.
const csv = jsonTocsv.onceFilled(); // Once the array is filled , use this method to apply correct format.
```

# Output

file.csv :

```
Key,Values
obj.test.path,value1
obj.other.path.test,value2
obj.again.path,value3
```

# License

MIT
