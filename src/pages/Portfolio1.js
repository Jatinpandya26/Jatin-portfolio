import { useCallback } from "react";
import Header from "../components/Header";
import SkillsSection from "../components/SkillsSection";
import Top1 from "../components/Top1";
import CommunitiesSection from "../components/CommunitiesSection";
import BlogSection from "../components/BlogSection";
import styles from "./Portfolio1.module.css";

const Portfolio1 = () => {
  const onBitmapImage1Click = useCallback(() => {
    window.open(
      "https://www.linkedin.com/pulse/product-managers-ceos-jatin-pandya/"
    );
  }, []);

  const onBitmapImage2Click = useCallback(() => {
    window.open(
      "https://www.linkedin.com/pulse/journey-amazon-asi-20-how-stand-out-jatin-pandya/"
    );
  }, []);

  const onCallToActionClick = useCallback(() => {
    window.location.href = "mailto:jatinjpnd268@gmail.com";
  }, []);

  const onLinkedInIconClick = useCallback(() => {
    window.open("https://www.linkedin.com/in/jatinjpnd268/");
  }, []);

  return (
    <div className={styles.portfolio1}>
      <div className={styles.callToAction} onClick={onCallToActionClick}>
        <div className={styles.callToActionChild} />
        <b className={styles.hireMe}>Hire Me</b>
      </div>
      <div className={styles.headerSection}>
        <Header />
        <div className={styles.heroSection}>
          <div className={styles.background} />
          <img
            className={styles.jatinImageIcon}
            alt=""
            src="/jatin-image@2x.png"
          />
          <div className={styles.introPanel}>
            <div className={styles.hiImJatinContainer}>
              <p className={styles.hi}>
                <span>
                  <span>
                    <span>{`Hi, `}</span>
                  </span>
                </span>
              </p>
              <p className={styles.imJatin}>
                <span>
                  <span>
                    <span>I’m</span>
                    <span className={styles.span}>{` `}</span>
                  </span>
                  <b className={styles.jatin}>{`Jatin `}</b>
                </span>
              </p>
            </div>
            <div className={styles.productDesignContainer}>
              <p className={styles.hi}>{`Product, Design & Community`}</p>
              <p className={styles.hi}>Advocate for Compassion-in-tech</p>
            </div>
          </div>
        </div>
        <div className={styles.heroSection1}>
          <div className={styles.background1}>
            <img
              className={styles.jatinImageIcon1}
              alt=""
              src="/image-13@2x.png"
            />
          </div>
          <div className={styles.introduuction}>
            <div className={styles.introTitle}>
              <div className={styles.hi1}>{`Hi, `}</div>
              <div className={styles.imJatin1}>
                <span>
                  <span>I’m</span>
                  <span className={styles.span}>{` `}</span>
                </span>
                <b className={styles.jatin1}>{`Jatin `}</b>
              </div>
            </div>
            <div className={styles.introDescription}>
              <p className={styles.hi}>{`Product, Design & Community`}</p>
              <p className={styles.hi}>Advocate for Compassion-in-tech</p>
            </div>
          </div>
        </div>
        <div className={styles.socials}>
          <img className={styles.lineIcon} alt="" src="/line.svg" />
          <img className={styles.twitterIcon} alt="" src="/twitter.svg" />
          <img
            className={styles.linkedinIcon}
            alt=""
            src="/linkedin.svg"
            onClick={onLinkedInIconClick}
          />
        </div>
      </div>
      <section className={styles.aboutSection}>
        <h2 className={styles.aboutMe}>About Me.</h2>
        <p className={styles.imASeniorContainer}>
          <span
            className={styles.imASenior}
          >{`I'm a Senior Year Computer Science Engineering Undergrad aspire & passionate about Product Management and Impacting the lives of various users with the products I lead. I Believer in advocating compassion-in-technology.`}</span>
          <span className={styles.imASenior}>
            When I'm not doing something for enhancing my skills or exploring
            opportunities, I focus on skilling and learning for future steps of
            my career
          </span>
        </p>
      </section>
      <SkillsSection />
      <div className={styles.experienceSection}>
        <Top1 />
        <CommunitiesSection />
      </div>
      <BlogSection />
      <div className={styles.footerSection}>
        <div className={styles.letsConnectParent}>
          <b className={styles.letsConnect}>Lets Connect</b>
          <div className={styles.feelFreeToContactForCollaParent}>
            <div className={styles.letsConnect}>
              Feel free to contact for collaborations and working of Projects
            </div>
            <div className={styles.emailJatinjpnd268gmailcom}>
              email: Jatinjpnd268@gmail.com
            </div>
          </div>
        </div>
        <div className={styles.allRightsReservedWrapper}>
          <div className={styles.allRightsReserved}>All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio1;
