import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, veritatis! Omnis temporibus magnam nobis adipisci delectus deleniti architecto aliquid eligendi asperiores corrupti. Ipsum cumque voluptate repellendus in sed! Recusandae, placeat.</p>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic, veritatis! Omnis temporibus magnam nobis adipisci delectus deleniti architecto aliquid eligendi asperiores corrupti. Ipsum cumque voluptate repellendus in sed! Recusandae, placeat.</p>
        <Link href='/ninjas'>
          <a className={styles.btn}>See ninja listing</a>
        </Link>
      </div>
    </>
  )
}
