import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { Button } from 'antd';
import Link from 'next/link';
import { RollbackOutlined } from '@ant-design/icons';

export default function User() {
  //useState
  const [users, setUsers] = useState([]);

  //useEffect
  useEffect(() => {
    getUsersData();
  }, []);

  //get user data
  const getUsersData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  return (
    <div className={styles.mainPage}>
      <div>
        <Button type="primary" shape="round" icon={<RollbackOutlined />}>
          <Link href="/"> Back </Link>
        </Button>
        <br />
        <br />
        <strong>GET API</strong>
        {users.map((item, i) => {
          return (
            <ul>
              <p key={i}>{item.name}</p>
            </ul>
          );
        })}
      </div>
    </div>
  );
}
