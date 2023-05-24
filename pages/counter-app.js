import React, { useState } from 'react';
import styles from '../styles/counter-app.module.css';
import { Button, Row } from 'antd';
import Link from 'next/link';
import {
  PlusOutlined,
  MinusOutlined,
  RollbackOutlined,
} from '@ant-design/icons';

export default function CounterApp() {
  //useState
  let [countNum, setCount] = useState(0);

  //to increase the value
  let increaseValue = () => {
    setCount((countNum += 1));
  };

  //to decrease the value
  let decreaseValue = () => {
    setCount((countNum -= 1));
  };

  return (
    <div className={styles.flexContainer}>
      <Row>
        <div>
          <Button type="primary" shape="round" icon={<RollbackOutlined />}>
            <Link href="/"> Back </Link>
          </Button>
        </div>
        <br />
        <br />
        <div>
          <Button
            type="primary"
            shape="round"
            icon={<MinusOutlined />}
            onClick={decreaseValue}
          />
          &emsp;
          {countNum}&emsp;
          <Button
            type="primary"
            shape="round"
            icon={<PlusOutlined />}
            onClick={increaseValue}
          />
        </div>
      </Row>
    </div>
  );
}
