import { useMemo } from "react";
import styles from "./GroupComponent1.module.css";

const GroupComponent1 = ({ azure, vector, propWidth, propRight }) => {
  const vectorIcon1Style = useMemo(() => {
    return {
      width: propWidth,
      right: propRight,
    };
  }, [propWidth, propRight]);

  return (
    <div className={styles.groupParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <b className={styles.azure}>{azure}</b>
      </div>
      <img
        className={styles.vectorIcon}
        alt=""
        src={vector}
        style={vectorIcon1Style}
      />
    </div>
  );
};

export default GroupComponent1;
