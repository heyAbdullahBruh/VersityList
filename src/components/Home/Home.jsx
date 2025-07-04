import { useState } from "react";
import styles from "./home.module.css";
import PublicUni from "../versityList/public";
import PrivateUni from "../versityList/private";

function Home() {
  const [isPublic, setIsPublic] = useState(false);
  return (
    <>
      <main className={styles.home}>
        <header>
          <h1>US Universities</h1>
          <p>[QS (300-1000)]</p>
        </header>
        <aside className={styles.controller}>
          <button
            className={isPublic && `${styles.active}`}
            onClick={() => setIsPublic(true)}
          >
            Public Uni
          </button>

          <button
            className={isPublic || `${styles.active}`}
            onClick={() => setIsPublic(false)}
          >
            Private Uni
          </button>
        </aside>

        {isPublic ? (
          <aside id={styles.publicUni}>
            <PublicUni />
          </aside>
        ) : (
          <aside id={styles.privateUni}>
            <PrivateUni />
          </aside>
        )}
      </main>
    </>
  );
}

export default Home;
