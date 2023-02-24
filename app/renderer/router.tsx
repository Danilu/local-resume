import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Resume from "@src/container/resume";
import Root from "@src/container/root";

function Router(){
    return(
        <HashRouter>
            <Switch>
                <Route path={'/'} exact>
                    <Root />
                </Route>
                <Route path={'/resume'} exact>
                    <Resume />
                </Route>
            </Switch>
            {/* 重定向到首页 */}
            <Redirect to={'/'}></Redirect>
        </HashRouter>
    )
}

export default Router