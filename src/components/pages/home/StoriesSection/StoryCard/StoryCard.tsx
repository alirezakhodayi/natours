import { Paragraph, TertiaryHeading } from "@/components/UI";
import styles from "./StoryCard.module.scss";
import type { IStory } from "@/types";

interface IProps {
  storyData: IStory;
}

function StoryCard({ storyData }: IProps) {
  const { personName, avatar, title, story } = storyData;
  return (
    <div className={styles.storyCard}>
      <figure className={styles.storyCardShape}>
        <img src={avatar} alt={personName} className={styles.storyCardAvatar} />
        <figcaption className={styles.storyCardCaption}>
          {personName}
        </figcaption>
      </figure>
      <div className={styles.storyCardText}>
        <TertiaryHeading className="u-margin-b-small">{title}</TertiaryHeading>
        <Paragraph>{story}</Paragraph>
      </div>
    </div>
  );
}

export { StoryCard };
