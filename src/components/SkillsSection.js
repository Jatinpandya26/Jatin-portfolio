import GroupComponent from "./GroupComponent";
import GroupComponent1 from "./GroupComponent1";
import GroupComponent2 from "./GroupComponent2";
import styles from "./SkillsSection.module.css";

const SkillsSection = () => {
  return (
    <div className={styles.skillsSection} data-scroll-to="skillsSection">
      <b className={styles.skills}>Skills</b>
      <div className={styles.skillsCards}>
        <div className={styles.row1}>
          <GroupComponent
            productManagement="Product Management"
            vector="/vector1.svg"
            propTop="75px"
            propWidth="37.72%"
            propRight="31.74%"
          />
          <div className={styles.groupParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <b className={styles.uiuxDesign}>UI/UX Design</b>
            </div>
            <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
          </div>
          <GroupComponent
            productManagement="Product Strategy"
            vector="/vector3.svg"
            propTop="83px"
            propWidth="38.18%"
            propRight="31.29%"
          />
          <div className={styles.groupParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <b className={styles.projectManagement}>
                <p className={styles.project}>Project</p>
                <p className={styles.project}>Management</p>
              </b>
            </div>
            <img className={styles.vectorIcon1} alt="" src="/vector4.svg" />
          </div>
          <GroupComponent
            productManagement="Power Automate"
            vector="/group.svg"
            propTop="83px"
            propWidth="38.12%"
            propRight="31.34%"
          />
          <div className={styles.groupParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <b className={styles.uiuxDesign}>Power Apps</b>
            </div>
            <img className={styles.groupIcon} alt="" src="/group1.svg" />
          </div>
        </div>
        <div className={styles.row2}>
          <div className={styles.groupParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <b className={styles.uiuxDesign}>Figma</b>
            </div>
            <img className={styles.vectorIcon2} alt="" src="/vector5.svg" />
          </div>
          <div className={styles.groupParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <b className={styles.uiuxDesign}>AdobeXD</b>
            </div>
            <img className={styles.vectorIcon3} alt="" src="/vector6.svg" />
          </div>
          <div className={styles.groupParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <b className={styles.uiuxDesign}>Framer</b>
            </div>
            <img className={styles.vectorIcon4} alt="" src="/vector7.svg" />
          </div>
          <GroupComponent1 azure="Azure" vector="/vector8.svg" />
          <GroupComponent1
            azure="Github"
            vector="/vector9.svg"
            propWidth="37.64%"
            propRight="31.83%"
          />
          <GroupComponent2 git="Git" vector="/vector10.svg" />
        </div>
        <div className={styles.row3}>
          <div className={styles.groupParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <b className={styles.uiuxDesign}>Google Actions</b>
            </div>
            <img className={styles.vectorIcon5} alt="" src="/vector11.svg" />
          </div>
          <GroupComponent2
            git="Alexa Skills "
            vector="/vector12.svg"
            propWidth="36.64%"
            propRight="32.06%"
          />
          <GroupComponent2
            git="Python"
            vector="/group-248.svg"
            propWidth="36.84%"
            propRight="31.87%"
          />
          <div className={styles.groupParent}>
            <div className={styles.rectangleParent}>
              <div className={styles.groupChild} />
              <b className={styles.uiuxDesign}>C++</b>
            </div>
            <img className={styles.vectorIcon6} alt="" src="/vector13.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
