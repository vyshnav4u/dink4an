import { ImageConverter } from "../../ImageConverter";
import styles from "./Content.module.css";

export const Content = () => {
  const renderContent = () => {
    return <ImageConverter />;
  };

  return <main className={styles.contentWrap}>{renderContent()}</main>;
};
