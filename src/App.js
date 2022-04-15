import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "unistore/react";

import AppRouter from "./router/AppRouter";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div class="App">
        <Provider store={store}>
          <BrowserRouter>
            <AppRouter/>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
