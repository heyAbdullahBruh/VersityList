import { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import styles from "./versity.module.css";

const PrivateUni = () => {
  const [versities, setVersities] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPrivateVerstyData = async () => {
    setLoading(true);
    try {
      const respons = await fetch("/data/privateUni.json");
      const data = await respons.json();
      setVersities(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrivateVerstyData();
  }, []);

  return (
    <section className={styles.versity}>
      <h1 id={styles.headV}>Private University</h1>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.uniCont}>
          {versities?.map((uni) => {
            const { id, name, type, rank, location } = uni;
            return (
              <article key={id} id={styles.uniCard}>
                <h2>{name}</h2>
                <p>{type}</p>
                <h3>
                  QS Rank {"->"} {rank}
                </h3>
                <h4>
                  Location{"-->"} {location}
                </h4>
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default PrivateUni;
