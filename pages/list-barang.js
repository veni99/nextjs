import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import { Button } from 'antd';
import Link from 'next/link';
import { RollbackOutlined } from '@ant-design/icons';

export default function Barang() {
  const items = [
    {
      name: 'Kompor',
      category: 'Dapur',
      value: 3000000,
    },
    {
      name: 'Laptop',
      category: 'ATK',
      value: 5000000,
    },
    {
      name: 'Panci',
      category: 'Dapur',
      value: 1200000,
    },
    {
      name: 'Piring',
      category: 'Dapur',
      value: 45000,
    },
    {
      name: 'Monitor',
      category: 'ATK',
      value: 1400000,
    },
    {
      name: 'Keyboard',
      category: 'ATK',
      value: 130000,
    },
    {
      name: 'Charger',
      category: 'ATK',
      value: 600000,
    },
  ];

  return (
    <div className={styles.mainPage}>
      <div>
        <Button type="primary" shape="round" icon={<RollbackOutlined />}>
          <Link href="/"> Back </Link>
        </Button>
        <p>ALL</p>
        {items.map((item, i) => {
          return (
            <ul>
              <li key={i}>
                {item.name} <br />
                {item.category} <br />
                {item.value}
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
