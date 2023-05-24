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

  const filteredItems = items.filter((item) => item.category === 'ATK');

  return (
    <div className={styles.mainPage}>
      <div>
        <Button type="primary" shape="round" icon={<RollbackOutlined />}>
          <Link href="/"> Back </Link>
        </Button>
        <br />
        <br />
        <strong>CATEGORY : ATK </strong>
        {filteredItems.map((item, i) => (
          <div key={i} style={{ marginTop: '20px' }}>
            <ul>
              <li key={i}>
                {item.name} <br />
                {item.category} <br />
                {item.value}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
