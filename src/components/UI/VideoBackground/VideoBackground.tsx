import styles from "./VideoBackground.module.scss";

interface IProps {
  mp4Src: string;
  webmSrc: string;
}

function VideoBackground({ mp4Src, webmSrc }: IProps) {
  return (
    <div className={styles.backgroundVideo}>
      <video className={styles.backgroundVideoContent} autoPlay muted loop>
        <source src={mp4Src} type="video/mp4" />
        <source src={webmSrc} type="video/webm" />
        Your browser is not supported!
      </video>
    </div>
  );
}

export { VideoBackground };
