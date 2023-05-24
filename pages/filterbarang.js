import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import { Input, Button } from 'antd';
import Link from 'next/link';
import { SearchOutlined, RollbackOutlined } from '@ant-design/icons';

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

  //useState
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState('');

  //handle search value
  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== '') {
      const filteredData = items.filter((data) => {
        return Object.values(data)
          .join('')
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(items);
    }
  };

  return (
    <div className={styles.mainPage}>
      <div>
        <Input
          icon={<SearchOutlined />}
          placeholder="Filter"
          onChange={(e) => searchItems(e.target.value)}
        />
        <Button type="primary" shape="round" icon={<RollbackOutlined />}>
          <Link href="/"> Back </Link>
        </Button>

        {searchInput.length > 1 ? <p>CATEGORY : {searchInput}</p> : <p>ALL</p>}

        {searchInput.length > 1
          ? filteredResults.map((item, i) => {
              return (
                <ul>
                  <li key={i}>
                    {item.name} <br />
                    {item.category} <br />
                    {item.value}
                  </li>
                </ul>
              );
            })
          : items.map((item, i) => {
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
