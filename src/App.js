import React, { Component } from "react";
import { Provider } from "mobx-react";
import ExampleStore from "./stores/ExampleStore";
import Example from "./Example";

class App extends Component {
  render() {
    return (
      <Provider ExampleStore={ExampleStore}>
        <Example />
      </Provider>
    );
  }
}

export default App;
