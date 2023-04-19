import styles from "./Card.module.css";

const Card = ({ developerRelationsManager, zeeve, removebgPreview1 }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardChild} />
      <b className={styles.developerRelationsManager}>
        {developerRelationsManager}
      </b>
      <div className={styles.zeeve}>{zeeve}</div>
      <img
        className={styles.removebgPreview1Icon}
        alt=""
        src={removebgPreview1}
      />
    </div>
  );
};

export default Card;
