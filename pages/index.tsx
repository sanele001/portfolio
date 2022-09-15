import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftHolder}>
        <h4 className={styles.logo}>SANELE SIBIYA</h4>
        <h3 className={styles.hello}>
          HELLO<span>.</span>
        </h3>
        <div className={styles.navsection}>
          <ul className={styles.navlist}>
            <li>
              <Link href="/work">
                <a>MY WORK</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>ABOUT ME</a>
              </Link>
            </li>
            <li>
              <a
                href="https://asset.cloudinary.com/dgrmjcqon/0881c2e65535fc189bf795eb60699b60"
                target="_blank"
                rel="noreferrer"
              >
                MY CV
              </a>
            </li>
          </ul>
          <h4 className={styles.intro}>
            I<span> AM A</span> <br />
            FRONT-END<span> ENGINEER</span>
          </h4>
        </div>
      </div>
      <div className={styles.rightHolder}> </div>
    </div>
  );
};

export default Home;
