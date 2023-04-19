import styles from "./CommunitiesSection.module.css";

const CommunitiesSection = () => {
  return (
    <div className={styles.communitiesSection}>
      <div className={styles.communitiesTitle}>
        <div className={styles.vectorParent}>
          <img className={styles.frameChild} alt="" src="/line.svg" />
          <div className={styles.communitiesWrapper}>
            <div className={styles.communities}>Communities</div>
          </div>
        </div>
      </div>
      <div className={styles.communityBlurbs}>
        <div className={styles.microsoftLearnStudentAmbassWrapper}>
          <img
            className={styles.microsoftLearnStudentAmbass}
            alt=""
            src="/microsoft-learn-student-ambassadors--ju@2x.png"
          />
        </div>
        <div className={styles.theAmazonStudentCommunityWrapper}>
          <img
            className={styles.theAmazonStudentCommunity}
            alt=""
            src="/the-amazon-student-community@2x.png"
          />
        </div>
        <div className={styles.hackTheLeagueTransperentWrapper}>
          <img
            className={styles.hackTheLeagueTransperent}
            alt=""
            src="/hack-the-league-transperent@2x.png"
          />
        </div>
      </div>
      <div className={styles.communityBadges}>
        <div className={styles.card}>
          <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
        </div>
        <div className={styles.card1}>
          <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default CommunitiesSection;
