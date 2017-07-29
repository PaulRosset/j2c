# jsonTocsv
CLI that transform a JSON to CSV with Key,Value format. Usefull to list all keys from a json object.

# Installation

```
npm install jsontocsv -g
```

# Usage 

```
jsontocsv --json [file.json] --csv [file.csv]
```

```
Options:

    -V, --version       output the version number
    --json [file.json]  Your entry file, must be a json file.
    --csv [file.csv]    The csv file that will be saved. (If not existing , will create it)
    -f, --first         Specify the name of the object at the first position (default = obj)
    -h, --help          output usage information
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