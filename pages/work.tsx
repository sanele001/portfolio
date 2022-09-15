import styles from "../styles/work.module.css";
import Link from "next/link";
import Image from "next/image";
import ngubane from "../public/ss.png";
import sibu from "../public/mock.png";
import app from "../public/app.png";

function Work() {
  return (
    <>
      <div className={styles.main}>
        <Link href="/">
          <h4 className={styles.home}>HOME</h4>
        </Link>
        <div>
          <div className={styles.listItem}>
            <div>
              <a href="#">
                <Image
                  src={ngubane}
                  alt="Picture of the author"
                  width={500}
                  height={500}
                />
              </a>
            </div>
            <div className={styles.desc}>
              <p>
                Pregnancy App. I built this app using Java and android studio,
                the app calculates delivery date for pregnant women, it also
                shares educational content and tracks baby health. You can check
                it out on google play.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.listItem}>
            <div>
              <Image
                src={sibu}
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </div>
            <div className={styles.desc}>
              <p>
                Doctor booking app. I build this app using react native, fire
                store, third party API and other react libraries. The app allows
                uses to book specialists and cancel appointments. You can check
                it out on the app store
              </p>
            </div>
          </div>
          <div className={styles.listItem}>
            <div>
              <Image
                src={app}
                alt="Picture of the author"
                width={500}
                height={500}
              />
            </div>
            <div className={styles.desc}>
              <p>
                Women health app built on react native , javascript and third
                party API. The app allows women to track mentrual cycle and
                create accounts ,recieves notifications etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
