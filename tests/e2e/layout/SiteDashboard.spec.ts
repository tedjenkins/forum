// tslint:disable:no-any
import { Selector } from 'testcafe';

fixture('SiteDashboard component').page('http://localhost:3000');

test('Login form', async t => {
  await t
    .click(Selector('login-form-btn'))
    .expect((Selector('#login-form-username') as any).checkValidity())
    .eql(false);
});
