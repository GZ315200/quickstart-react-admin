

import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';


export default function NotFound() {
    let navigate = useNavigate();

    return (
        <div>
            <Result
                status="404"
                title="页面不存在"
                extra={<Button type="primary" onClick={() => { navigate("/")}}>返回主页</Button>}
            />
        </div>
    )
}