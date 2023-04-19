import { useMemo } from "react";
import styles from "./GroupComponent2.module.css";

const GroupComponent2 = ({ git, vector, propWidth, propRight }) => {
  const vectorIcon2Style = useMemo(() => {
    return {
      width: propWidth,
      right: propRight,
    };
  }, [propWidth, propRight]);

  return (
    <div className={styles.groupParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <b className={styles.git}>{git}</b>
      </div>
      <img
        className={styles.vectorIcon}
        alt=""
        src={vector}
        style={vectorIcon2Style}
      />
    </div>
  );
};

export default GroupComponent2;
