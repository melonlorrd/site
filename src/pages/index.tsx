import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function ProfileHeader() {
  return (
    <div className={clsx(styles.profileContainer)}>
      <p className={styles.profileDescription}>
        Hello! I'm <span className={styles.profileHighlight}>Mahaprasad</span>, passionate about <span className={styles.profileHighlight}>Infrastructure</span> and <span className={styles.profileHighlight}>Systems Engineering</span>.
        I currently work at <span className={styles.profileHighlight}>RTDS</span> as a <span className={styles.profileHighlight}>Cloud-DevOps Engineer</span>. Outside work, I enjoy <span className={styles.profileHighlight}>sketching</span>.
      </p>
      <div className={styles.socials}>
        <Link to="https://github.com/melonlorrd">GitHub</Link><br />
        <Link to="https://www.linkedin.com/in/mprasadme">LinkedIn</Link>
      </div>
    </div >
  );
}

export default function Home(): ReactNode {
  return (
    <Layout description="Personal website.">
      <main className={styles.main}>
        <ProfileHeader />
      </main>
    </Layout>
  );
}
