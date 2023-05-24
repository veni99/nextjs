import React from 'react';
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

  const filteredItems = items.filter((item) => item.name === 'Piring');

  return (
    <div className={styles.mainPage}>
      <div>
        <Button type="primary" shape="round" icon={<RollbackOutlined />}>
          <Link href="/"> Back </Link>
        </Button>
        <ul>
          <strong>SELECT 1 ITEM</strong>
        </ul>
        {filteredItems.map((item, index) => (
          <div key={index} style={{ marginTop: '20px' }}>
            <ul>
              <p>Name : {item.name}</p>
              <p>Category : {item.category}</p>
              <p>Value : {item.value}</p>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
