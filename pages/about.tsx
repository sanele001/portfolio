import styles from "../styles/about.module.css";
import Link from "next/link";

import Image from "next/image";

function About() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.picholder}>
          <h3 className={styles.name}>
            SANELE<span>.</span>
          </h3>
          <div>
            <Image
              src="https://img.icons8.com/color/48/000000/javascript--v1.png"
              alt="javascript icon"
              width={50}
              height={50}
            />
            <Image
              src="https://img.icons8.com/fluency/48/000000/typescript.png"
              alt="javascript icon"
              width={50}
              height={50}
            />
            <Image
              src="https://img.icons8.com/officel/80/000000/react.png"
              alt="javascript icon"
              width={50}
              height={50}
            />
            <Image
              src="https://img.icons8.com/color/96/ffff/nextjs.png"
              alt="javascript icon"
              width={50}
              height={50}
            />
            <Image
              src="https://img.icons8.com/color/96/000000/mysql-logo.png"
              alt="javascript icon"
              width={50}
              height={50}
            />
          </div>
          <h3 className={styles.qoute}>UTHANDO LOBUCIKO NOBU CHWEPHESHE</h3>
        </div>
        <div className={styles.textholder}>
          <Link href="/">
            <h3>HOME</h3>
          </Link>
          <p>
            As an adept web developer, I have a well-rounded skill set in web
            development and honed talents in programming and project management,
            making me an ideal fit for the Front End Engineer role. Further, I
            am a recognized expert in problem-solving and a communicative
            collaborator. My previous roles have strengthened my capabilities in
            critical thinking and collaboration, including a keen attention to
            detail and accuracy. I am excited at the prospect of bringing my
            talents to with your team.
          </p>
          <a
            href="https://www.linkedin.com/in/sanele-sibiya-05708b95/"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="https://img.icons8.com/color/144/000000/linkedin-circled--v2.png"
              alt="linked in"
              width={50}
              height={50}
            />
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
