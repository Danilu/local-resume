import React from "react";
import ReactDOM from 'react-dom';
import { Route, Switch } from "react-router";

function App() {
    return (
        <Route>
            <Switch>
                <Route path="/">
                    <div>Electron + React</div>
                </Route>
            </Switch>
        </Route>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));