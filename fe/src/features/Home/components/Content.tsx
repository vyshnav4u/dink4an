import { ImageConverter } from "../../ImageConverter";

export const Content = () => {
  const renderContent = () => {
    return <ImageConverter />;
  };

  return <main>{renderContent()}</main>;
};
