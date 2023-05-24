import { Button } from 'antd';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.mainPage}>
      <Head>
        <title>Next App</title>
      </Head>
      <div>
        <Button type="primary" shape="round">
          <Link href="/counter-app"> 1 </Link>
        </Button>
        &ensp;
        <Button type="primary" shape="round">
          <Link href="/list-barang"> 2 </Link>
        </Button>
        &ensp;
        <Button type="primary" shape="round">
          <Link href="/filter-barang"> 3 </Link>
        </Button>
        &ensp;
        <Button type="primary" shape="round">
          <Link href="/select-barang"> 4 </Link>
        </Button>
        &ensp;
        <Button type="primary" shape="round">
          <Link href="/sort-barang"> 5 </Link>
        </Button>
        &ensp;
        <Button type="primary" shape="round">
          <Link href="/user"> 6 </Link>
        </Button>
        &ensp;
        <Button type="primary" shape="round">
          <Link href="/user-button"> 7 </Link>
        </Button>
      </div>
    </div>
  );
}
