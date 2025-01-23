//views/Home/component/new-sale/sale-button/index.tsx
import { Button,Flex } from 'antd';
import React from 'react';
import './style.scss';

    const Salebtn: React.FC = () => 

    <Flex gap="small" wrap="wrap">
        <Button className="ant-sale-btn">珠寶</Button>
        <Button className="ant-sale-btn">首飾</Button>
        <Button className="ant-sale-btn">擺件</Button>
    </Flex>


export default Salebtn;
