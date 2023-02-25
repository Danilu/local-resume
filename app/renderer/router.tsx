import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import Resume from "@src/container/resume";
import Root from "@src/container/root";
import { ROUTER } from "./common/router";

function Router() {
    return (
        <HashRouter>
            <Switch>
                <Route path={ROUTER.root} exact>
                    <Root />
                </Route>
                <Route path={ROUTER.resume} exact>
                    <Resume />
                </Route>
            </Switch>
            {/* 重定向到首页 */}
            <Redirect to={ROUTER.root}></Redirect>
        </HashRouter>
    )
}

export default Router