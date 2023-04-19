import { useMemo } from "react";
import styles from "./GroupComponent.module.css";

const GroupComponent = ({
  productManagement,
  vector,
  propTop,
  propWidth,
  propRight,
}) => {
  const productManagementStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const vectorIconStyle = useMemo(() => {
    return {
      width: propWidth,
      right: propRight,
    };
  }, [propWidth, propRight]);

  return (
    <div className={styles.groupParent}>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <b className={styles.productManagement} style={productManagementStyle}>
          {productManagement}
        </b>
      </div>
      <img
        className={styles.vectorIcon}
        alt=""
        src={vector}
        style={vectorIconStyle}
      />
    </div>
  );
};

export default GroupComponent;
