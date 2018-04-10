import React, { Component } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import J2C from "json2csv-cli";

class App extends Component {
  state = {
    jsonEntry: "",
    finalCsv: "",
    isNotPossibleCleaning: true,
    isNotPossibleCompile: true,
    jsonEntryClean: ""
  };

  onJsonEntry = (e, data) => {
    this.setState(
      prevState => ({
        jsonEntry: data.value,
        isNotPossibleCleaning: false,
        isNotPossibleCompile: false
      }),
      () => {
        if (!this.state.jsonEntry) {
          this.setState({
            isNotPossibleCleaning: true,
            isNotPossibleCompile: true
          });
        }
      }
    );
  };

  onClean = () => {
    this.setState({
      jsonEntry: "",
      jsonEntryClean: "",
      finalCsv: "",
      isNotPossibleCleaning: true,
      isNotPossibleCompile: true,
      errorJSON: false
    });
  };

  onCompile = () => {
    try {
      const jsonEntryClean = JSON.parse(this.state.jsonEntry);
      const jsonTocsv = new J2C();
      jsonTocsv.convert(jsonEntryClean);
      const finalCsv = jsonTocsv.onceFilled();
      this.setState({
        finalCsv
      });
    } catch (e) {
      if (e)
        this.setState({
          errorJSON: true
        });
    }
  };

  render() {
    return (
      <div className="App">
        <Header
          error={this.state.errorJSON}
          clean={this.onClean}
          compile={this.onCompile}
          disabledclean={this.state.isNotPossibleCleaning}
          disabledcompile={this.state.isNotPossibleCompile}
        />
        <Body
          jsonentry={this.onJsonEntry}
          value={this.state.jsonEntry}
          csvresult={this.state.finalCsv}
        />
      </div>
    );
  }
}

export default App;
