import Card from "./Card";
import styles from "./Top1.module.css";

const Top1 = () => {
  return (
    <div className={styles.top}>
      <b className={styles.experience} data-scroll-to="experienceText">
        Experience
      </b>
      <div className={styles.productSection}>
        <div className={styles.productTitle}>
          <img className={styles.productTitleChild} alt="" src="/line.svg" />
          <div className={styles.productWrapper}>
            <div className={styles.product}>PRODUCT</div>
          </div>
        </div>
        <div className={styles.productCards}>
          <Card
            developerRelationsManager="Developer Relations Manager"
            zeeve="Zeeve"
            removebgPreview1="/1575058375299removebgpreview-1@2x.png"
          />
          <div className={styles.card}>
            <div className={styles.cardChild} />
            <b className={styles.productManagerAndContainer}>
              <p className={styles.productManager}>{`Product Manager `}</p>
              <p className={styles.productManager}>and DevRel(India)</p>
            </b>
            <div className={styles.atsign}>Atsign</div>
            <img
              className={styles.atsignLogoPrimaryStacked4cIcon}
              alt=""
              src="/atsignlogoprimarystacked4clr2022-1@2x.png"
            />
          </div>
          <div className={styles.card1}>
            <div className={styles.cardItem} />
            <b className={styles.uxDesignAnd}>UX Design and Research Intern</b>
            <div className={styles.konfhub}>KonfHub</div>
            <img
              className={styles.download1Icon}
              alt=""
              src="/download-1.svg"
            />
          </div>
          <Card
            developerRelationsManager="Product Manager Internship"
            zeeve="Xspertto"
            removebgPreview1="/1575058375299removebgpreview-11@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Top1;
