import { useEffect, useState } from "react";
import Loading from "../loading/Loading";
import styles from "./versity.module.css";
import UniVDetails from "./versityDetails";

const PublicUni = () => {
  const [versities, setVersities] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPublicVerstyData = async () => {
    setLoading(true);
    try {
      const respons = await fetch("/data/publicUni.json");
      const data = await respons.json();
      setVersities(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPublicVerstyData();
  }, []);

  const [univOpen, setUnivOpen] = useState(false);
  const [uniData, setUniData] = useState({});

  const detailsOpen = (id,data) => {
    if (id) {
      setUnivOpen(true);
      setUniData(data);
    }
  };

  return (
    <section className={styles.versity}>
      <h1 id={styles.headV}>Public University</h1>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.uniCont}>
          {versities?.map((uni) => {
            const { id, name, type, rank, location } = uni;
            return (
              <>
                <article key={id} id={styles.uniCard}>
                  <p id={styles.uniType}>{type}</p>
                  <h2>{name}</h2>
                  <h3>QS Rank — {rank}</h3>
                  <h4>Location — {location}</h4>
                  <div id={styles.detailBtn}>
                    <button onClick={() => detailsOpen(id,uni)}>See Details</button>
                  </div>
                </article>
                {univOpen && <UniVDetails setOpen={setUnivOpen} data={uniData} />}
              </>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default PublicUni;
