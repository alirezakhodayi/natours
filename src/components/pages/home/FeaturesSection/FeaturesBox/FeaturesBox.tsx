import { Paragraph, TertiaryHeading } from "@/components/UI";
import styles from "./FeaturesBox.module.scss";

interface IProps {
  title: string;
  description: string;
  iconClassName: string;
}
function FeaturesBox({ title, description, iconClassName }: IProps) {
  return (
    <div className="col-1-of-4">
      <div className={styles.featuresBox}>
        <i className={`${styles.featuresBoxIcon} ${iconClassName}`}></i>
        <TertiaryHeading className="u-margin-b-small">{title}</TertiaryHeading>
        <Paragraph>{description}</Paragraph>
      </div>
    </div>
  );
}

export { FeaturesBox };
