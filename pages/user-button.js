import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import { Button } from 'antd';
import Link from 'next/link';
import { CloseOutlined, RollbackOutlined } from '@ant-design/icons';

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
        <strong>GET API</strong>
        <table style={{ marginLeft: '20px', marginTop: '30px' }}>
          <tbody>
            {users.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  <td>
                    <Button
                      type="primary"
                      shape="round"
                      icon={<CloseOutlined />}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>
        <Button type="primary" shape="round" icon={<RollbackOutlined />}>
          <Link href="/"> Back </Link>
        </Button>
      </div>
    </div>
  );
}
