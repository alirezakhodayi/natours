import { LinkButton, SecondaryHeading, VideoBackground } from "@/components/UI";
import styles from "./StoriesSection.module.scss";
import { StoryCard } from "./StoryCard";
import { storiesData } from "./data";

function StoriesSection() {
  return (
    <section className={styles.storiesSection}>
      <VideoBackground mp4Src="/video.mp4" webmSrc="/video.webm" />
      <div className="u-center-text u-margin-b-large">
        <SecondaryHeading>We make people genuinely happy</SecondaryHeading>
      </div>
      <div className="row">
        {storiesData.map((story) => (
          <StoryCard key={story.id} storyData={story} />
        ))}
      </div>
      <div className="u-center-text u-margin-t-large">
        <LinkButton href="#">Read all stories &rarr;</LinkButton>
      </div>
    </section>
  );
}

export { StoriesSection };
