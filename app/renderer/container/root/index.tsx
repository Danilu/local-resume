import { ROUTER, ROUTER_ENTRY } from '@src/common/router';
import { isHttpOrHttpsUrl } from '@src/common/utils/route';
import { shell } from 'electron';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import './index.less';

function Root() {
    const dispatch = useDispatch();
    const appName = useSelector((state: any) => state.globalModel.appName)

    useEffect(() => {
        setTimeout(() => {
          console.log('3s 后修改...');
          dispatch({
            type: 'globalModel/setStore',
            payload: {
              key: 'appName',
              values: 'visResumeMook',
            },
          });
        }, 3000);
      }, []);
      
    // 通过history.push（）进行跳转
    const history = useHistory();

    const onRouterToLink = (router: TSRouter.Item) => {
        if (isHttpOrHttpsUrl(router.url)) {
            shell.openExternal(router.url)
        } else {
            history.push(router.url)
        }
    }

    return (
        <div styleName='root'>
            <div styleName='container'>
                <div styleName='title'>简历</div>
                <div styleName='tips'>简历模板制作平台</div>
                <div styleName='action'>
                    {ROUTER_ENTRY.map((route: TSRouter.Item) => {
                        return (
                            <div key={route.key} styleName='item' onClick={() => onRouterToLink(route)}>{route.text}</div>
                        )
                    })}
                </div>
                <div styleName='copyright'>
                    <div styleName='footer'>
                        <p styleName='copyright'>
                            Copyright © 2018-{new Date().getFullYear()} All Rights Reserved. Copyright By LuDani
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Root;