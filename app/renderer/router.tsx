import exp from "constants";
import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Root from "./container/root";

function Router(){
    return(
        <HashRouter>
            <Switch>
                <Route path={'/'} exact>
                    <Root />
                </Route>
            </Switch>
            {/* 重定向到首页 */}
            <Redirect to={'/'}></Redirect>
        </HashRouter>
    )
}

export default Router