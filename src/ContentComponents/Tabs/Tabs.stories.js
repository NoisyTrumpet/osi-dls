/* eslint-disable import/no-unresolved */
import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "../../components/Button";
import { Typography } from "../../components/Typography";
import { Tabs } from ".";

// Page 1
import { ContentCard } from "../../components/ContentCard";
import { Grid } from "../../components/Grid";
import * as mockContentCardData from "../../components/ContentCard/mockData/mockContentCardData.json";

storiesOf("Content Components/Tabs", module)
  .add("2 Tabs", () => (
    <div className="sb-no-padding">
      <Tabs ariaLabel="example tabs">
        <Tabs.Item label="Tab One" id="tab1-id">
          <Grid grid={4}>
            {mockContentCardData.cards.map(card => (
              <ContentCard
                type="media"
                theme="vertical"
                cardData={card}
                key={card.image.size.mobile}
              />
            ))}
          </Grid>
        </Tabs.Item>
        <Tabs.Item label="Tab Two" id="tab2-id">
          <Typography variant="body">This is the content for Tab 2</Typography>
        </Tabs.Item>
      </Tabs>
    </div>
  ))
  .add("5 Tabs", () => (
    <div className="sb-no-padding">
      <Tabs ariaLabel="example tabs">
        <Tabs.Item label="Tab One" id="tab1-id">
          <Grid grid={4}>
            {mockContentCardData.cards.map(card => (
              <ContentCard
                type="media"
                theme="vertical"
                cardData={card}
                key={card.image.size.mobile}
              />
            ))}
          </Grid>
        </Tabs.Item>
        <Tabs.Item label="Tab Two" id="tab2-id">
          <Button>First button within Tab 2</Button>
          <br />
          <Button>Second button within Tab 2</Button>
        </Tabs.Item>
        <Tabs.Item label="Tab Three" id="tab3-id">
          <Typography variant="body">This is the content for Tab 3</Typography>
        </Tabs.Item>
        <Tabs.Item label="Tab Four" id="tab4-id">
          <Typography variant="body">This is the content for Tab 4</Typography>
        </Tabs.Item>
        <Tabs.Item label="Tab Five" id="tab5-id">
          <Typography variant="body">This is the content for Tab 5</Typography>
        </Tabs.Item>
      </Tabs>
    </div>
  ));
