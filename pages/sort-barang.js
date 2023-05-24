import React, { useState } from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { Input, Button } from 'antd';
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
  const [sortBy, setSortBy] = useState('');
  const defaultSelectValue = items[0];
  const [selected, setSelected] = useState(defaultSelectValue);

  // sort ASCENDING
  const sortAscending = () => {
    const valueAscending = [...items].sort((a, b) => a.value - b.value);
    console.log(valueAscending);
    setSortBy('ASC');
    // console.log("sortBy ASC ", sortBy)
    setFilteredResults(valueAscending);
  };

  const sortDescending = () => {
    // sort DESCENDING
    const valueDescending = [...items].sort((a, b) => b.value - a.value);
    console.log(valueDescending);
    setSortBy('DESC');
    // console.log("sortBy  DESC", sortBy)
    setFilteredResults(valueDescending);
  };

  const resetAll = () => {
    setSortBy('');
    setFilteredResults([]);
    setSearchInput('');
  };

  return (
    <div className={styles.mainPage}>
      <div>
        <Button type="primary" shape="round" onClick={sortAscending}>
          {'ASC'}
        </Button>
        <Button type="primary" shape="round" onClick={sortDescending}>
          {'DESC'}
        </Button>
        <Button type="primary" shape="round" onClick={resetAll}>
          {'RESET'}
        </Button>
        <Button type="primary" shape="round" icon={<RollbackOutlined />}>
          <Link href="/"> Back </Link>
        </Button>

        {sortBy === 'ASC' ? (
          <p> MIN TO MAX VALUE </p>
        ) : sortBy === 'DESC' ? (
          <p> MAX TO MIN VALUE </p>
        ) : (
          <p>ALL</p>
        )}

        {sortBy !== ''
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
