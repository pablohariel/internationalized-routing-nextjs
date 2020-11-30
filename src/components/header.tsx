import styles from '../styles/components/Header.module.css';
import Link from 'next/link';
import Head from 'next/head';
import React, { useState } from "react";

interface Props {
  pageTitle: string,
  pageDescription: string
}

const Header: React.FC<Props> = ({ pageTitle = '', pageDescription = '' }) => {
  const [showLngMenu, setShowLngMenu] = useState(false);

  return (
    <>
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
    </Head>
    <header className={styles.header}>
      <div className={styles.menu_button} onClick={() => setShowLngMenu(!showLngMenu)}>
        <h3>Change Language</h3>
      </div>
      <ul className={showLngMenu ? styles.menu_lng : styles.menu_lng_hidden}>
        <li className={styles.menu_lng_item}><Link href="/pt" locale="pt"><a className={styles.link}>pt-br</a></Link></li>
        <li className={styles.menu_lng_item}><Link href="/" locale="en"><a className={styles.link}>en-us</a></Link></li>
      </ul>
    </header>
    </>
  )
}

export default Header;