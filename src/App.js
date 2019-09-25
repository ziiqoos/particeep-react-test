import React, {Component} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import List from "./components/List/List";
import Filter from "./components/Filter/Filter";

class App extends Component {


    render() {
        return (
            <Provider store={store}>
                <Filter/>
                <List movies={store.getState().movies}/>
            </Provider>
        );
    }
}


export default App;
