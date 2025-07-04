import styles from "./versity.module.css";

const UniVDetails = ({ data, setOpen }) => {
  return (
    <section className={styles.uniDetails} onClick={() => setOpen(false)}>
      <div className={styles.detailCont} onClick={(e) => e.stopPropagation()}>
        <div id={styles.closeBtn}>
          <button onClick={() => setOpen(false)}>❌</button>
        </div>
        <div className={styles.card}>
          <div className={styles.header}>
            <h2>{data?.name}</h2>
            <span className={styles.rank}>{data?.rank}</span>
          </div>
          <div className={styles.details}>
            <p>
              <strong>Type:</strong> {data?.type} University
            </p>
            <p>
              <strong>Location:</strong> {data?.location}
            </p>
            <p>
              <strong>Annual Tuition (CS):</strong>{" "}
              {data?.annual_tuition_cs_dept}
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a href={data?.website} target="_blank" rel="noopener noreferrer">
                {data?.website}
              </a>
            </p>
            <pre>
              <strong>Scholarship:</strong> {data?.scholarship_info}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniVDetails;
