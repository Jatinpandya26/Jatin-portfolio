import { useCallback } from "react";
import FrameComponent from "./FrameComponent";
import styles from "./BlogSection.module.css";

const BlogSection = () => {
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

  const onLightButtonSecondaryTextContainerClick = useCallback(() => {
    window.open("https://twitter.com/Jpandya26");
  }, []);

  const onBitmapImageClick = useCallback(() => {
    window.open(
      "https://techcommunity.microsoft.com/t5/educator-developer-blog/empowering-lives-by-power-platform-low-code-technology-league/ba-p/2637494"
    );
  }, []);

  return (
    <div className={styles.blogSection}>
      <div className={styles.blogArticles}>
        <div className={styles.blogHeaders}>
          <div className={styles.blogSectionTitle}>
            <div className={styles.ourBlog}>my Blog</div>
            <h2
              className={styles.latestBlogArticlesContainer}
              data-scroll-to="latestBlogArticles"
            >
              <p className={styles.latestArticles}>Latest Articles</p>
              <p className={styles.latestArticles}>On Blog</p>
            </h2>
          </div>
          <div
            className={styles.lightbuttonsecondarytext}
            onClick={onLightButtonSecondaryTextContainerClick}
          >
            <div className={styles.button}>Discover All</div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.bitmapParent}>
            <img
              className={styles.bitmapIcon}
              alt=""
              src="/bitmap@2x.png"
              onClick={onBitmapImageClick}
            />
            <div className={styles.stories}>Stories</div>
            <div className={styles.agencyIsA}>
              Empowering lives by Power Platform!
            </div>
          </div>
          <div className={styles.frameGroup}>
            <FrameComponent
              bitmap="/bitmap1@2x.png"
              design="Article"
              outsourceYourDigit="Product Managers: The CEOs of the Product"
              onBitmapImage1Click={onBitmapImage1Click}
            />
            <FrameComponent
              bitmap="/bitmap2@2x.png"
              design="Experiences"
              outsourceYourDigit="Journey to the Amazon ASI 2.0 and How to Stand Out!"
              propHeight="329px"
              propTop="233px"
              onBitmapImage1Click={onBitmapImage2Click}
            />
          </div>
        </div>
      </div>
      <div className={styles.rectangle} />
    </div>
  );
};

export default BlogSection;
