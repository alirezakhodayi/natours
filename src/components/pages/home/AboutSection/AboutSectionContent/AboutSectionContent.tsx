import { LinkButton, Paragraph, TertiaryHeading } from "@/components/UI";

function AboutSectionContent() {
  return (
    <div className="col-1-of-2">
      <TertiaryHeading className="u-margin-b-small">
        You're going to fall in love with nature
      </TertiaryHeading>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit facere
        ipsam nostrum delectus ab? Beatae, exercitationem. Quam eum architecto
        ut quia illo, aliquid inventore aut quas sequi? Et, cum officiis!
      </Paragraph>

      <TertiaryHeading className="u-margin-b-small">
        Live adventures like you never have before
      </TertiaryHeading>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit facere
        ipsam nostrum delectus ab? Beatae, exercitationem. Quam eum architecto
        ut quia illo, aliquid inventore aut quas sequi? Et, cum officiis!
      </Paragraph>

      <LinkButton href="#">Learn more &rarr;</LinkButton>
    </div>
  );
}

export { AboutSectionContent };
