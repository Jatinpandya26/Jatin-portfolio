import { useCallback } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const onExperienceText1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='experienceText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSkillsTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='skillsSection']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onBlogsTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='latestBlogArticles']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onCTAClick = useCallback(() => {
    window.open("https://calendly.com/jay26/30-min?month=2022-07");
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.profil}>
          <img className={styles.profilChild} alt="" src="/ellipse-1.svg" />
          <div className={styles.j}>J</div>
        </div>
        <div className={styles.jatin}>Jatin</div>
      </div>
      <div className={styles.navigation}>
        <div className={styles.navigationMenu}>
          <div className={styles.about}>About</div>
          <div className={styles.experience} onClick={onExperienceText1Click}>
            Experience
          </div>
          <div className={styles.experience} onClick={onSkillsTextClick}>
            Skills
          </div>
          <div className={styles.experience} onClick={onBlogsTextClick}>
            Blogs
          </div>
        </div>
        <div className={styles.callout}>
          <img className={styles.menuIcon} alt="" src="/vector.svg" />
          <button className={styles.cta} onClick={onCTAClick}>
            <div className={styles.letsTalk}>Let’s Talk</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
