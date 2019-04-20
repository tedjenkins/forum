import { Selector } from 'testcafe';

fixture('Home page').page('http://localhost:3000');

test('Search bar', async t => {
  await t
    .typeText(Selector('#posts-navigation-search'), 'hello world')
    .expect(Selector('#display-posts').textContent)
    .match(/hello world/g);
});
