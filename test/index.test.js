import J2C from "../lib/main";
import Papa from "papaparse";
const fs = require("fs");

let jsonAPI;
let jsonParse;
let csvPretty;

describe("Testing Api", () => {
  beforeAll(() => {
    const jsonFromFile = fs.readFileSync(`${__dirname}/test.json`);
    jsonAPI = new J2C();
    jsonParse = JSON.parse(jsonFromFile);
  });

  test("Test normal functionality", () => {
    const csv = jsonAPI.convert(jsonParse);
    csvPretty = jsonAPI.onceFilled();
    expect(csvPretty).toMatchSnapshot();
  });

  test("Testing linter csv", done => {
    Papa.parse("file.csv", {
      complete: results => {
        expect(results).toMatchSnapshot();
        done();
      }
    });
  });

  describe("Further tests", () => {
    test("Length of both JSON-CSV should be equal", () => {
      const sizeJson = jsonParse.length;
      expect(sizeJson).toEqual(100);
      const sizeCsv = csvPretty.split(".").filter((item, pos, self) => {
        return !isNaN(item) && self.indexOf(item) === pos;
      });
      expect(sizeCsv.length).toEqual(sizeJson);
    });

    test("Verify length of both", () => {
      const sizeObject = jsonParse
        .map(polo => Object.keys(polo).length)
        .filter((item, pos, self) => self.indexOf(item) === pos);
      expect(sizeObject.length).toEqual(1);
      expect(sizeObject[0]).toEqual(4);
      const sizeCsvObject = csvPretty
        .split(".")
        .filter(item => !isNaN(item))
        .reduce((acc, currentValue) => {
          if (typeof acc[currentValue] == "undefined") {
            acc[currentValue] = 1;
          } else {
            acc[currentValue] += 1;
          }
          return acc;
        }, [])
        .filter((item, pos, self) => self.indexOf(item) === pos);
      expect(sizeCsvObject.length).toEqual(sizeObject.length);
      expect(sizeCsvObject[0]).toEqual(sizeObject[0]);
    });
  });
});
