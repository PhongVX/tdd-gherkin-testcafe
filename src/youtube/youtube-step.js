import { Given, When, Then, Before } from 'cucumber';

import YoutubePage from './youtube-page';
import YoutubeData from './youtube-data';

const p = new  YoutubePage();
const d = new YoutubeData();

Before('@youtubeHook', async () => {
  p.saySomeThing("Running Youtube e2e test.");
});

Given("I open Youtube page", async (t) => {
  await t.navigateTo(d.url);
});

When(/^I type "(.+)" on Youtube's search field$/, async (t, [searchString]) => {
  await t.typeText(p.searchInput, searchString);
});

Then(/^I should see the list of videos$/, async (t) => {
  await t.expect(p.videoTitle.count).gte(2);
});
