import { Given, When, Then, Before } from 'cucumber';

import GooglePage from './google-page';
import GoogleData from './google-data';

const p = new  GooglePage();
const d = new GoogleData();

Before('@googleHook', async () => {
  p.saySomeThing("Running Google e2e test.");
});

Given("I open Google's search page", async (t) => {
  await t.navigateTo(d.url);
});

When(/^I am typing my search request "(.+)" on Google$/, async (t, [searchRequest]) => {
  await t.typeText(p.searchInput, searchRequest);
});

When(/^I am pressing "(.+)" key on Google$/, async (t, [key]) => {
  await t.pressKey(key);
});

Then(/^I should see that the first Google's result is "(.+)"$/, async (t, [expectedSearchResult]) => {
  await t.expect(p.firstLink.innerText).contains(expectedSearchResult);
});
