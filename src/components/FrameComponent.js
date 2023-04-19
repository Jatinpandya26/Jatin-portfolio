import { useMemo } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent = ({
  bitmap,
  design,
  outsourceYourDigit,
  propHeight,
  propTop,
  onBitmapImage1Click,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const outsourceYourDigitStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div className={styles.bitmapParent} style={frameDivStyle}>
      <img
        className={styles.bitmapIcon}
        alt=""
        src={bitmap}
        onClick={onBitmapImage1Click}
      />
      <div className={styles.design}>{design}</div>
      <b className={styles.outsourceYourDigit} style={outsourceYourDigitStyle}>
        {outsourceYourDigit}
      </b>
    </div>
  );
};

export default FrameComponent;
