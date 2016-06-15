import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {createStore} from "redux";
import APP from "./components/app";
import reducers from "./reducers/index";

ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <APP />
    </Provider>, document.querySelector('.container')
);