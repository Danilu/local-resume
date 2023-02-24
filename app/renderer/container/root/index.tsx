import React from 'react';
import { useHistory } from 'react-router';
import './index.less';

function Root() {
    // 通过history.push（）进行跳转
    const history = useHistory();

    const onRouterToLink = (text: string) => {
        if (text === '简历') {
            history.push('/resume')
        } else {
            console.log("访问gitHub");
        }
    }

    return (
        <div styleName='root'>
            <div styleName='container'>
                <div styleName='title'>简历</div>
                <div styleName='tips'>简历模板制作平台</div>
                <div styleName='action'>
                    {['介绍', '简历', '源码'].map((text, index) => {
                        return (
                            <div key={index} styleName='item' onClick={() => onRouterToLink(text)}>{text}</div>
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