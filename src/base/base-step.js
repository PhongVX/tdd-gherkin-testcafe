import { When } from 'cucumber';

When(/^I press "([a-z]+)" key$/, async (t, [key]) => {
    await t.pressKey(key)
});
