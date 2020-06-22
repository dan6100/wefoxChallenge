let login = require('../pages/LoginPage');
let dashboard = require('../pages/DashboardPage');

let EC = protractor.ExpectedConditions;

describe('wefox login page end-to-end test', function() {

  it('should load wefox login page', async function() {
    await login.goToLoginPage('https://my.wefox.de/login');

    let title = await browser.getTitle();
    expect(title).toEqual('Anmeldung - wefox', 'Error - Page loaded is not the expected one');

  });

  it('should load agent image after login', async function() {
    let username = 'aqawefox+testtecnico@wefoxgroup.com';
    let password = 'qwertyasdf';
    await login.login(username, password);
    await browser.wait(EC.titleIs('Dashboard - wefox'), 10000);

    image = await dashboard.findAgentImage();
    expect(image.isPresent()).toBeTruthy();
    // await browser.wait(EC.visibilityOf(element(by.css('[t-selector="sidebar-contracts-link"]'))), 10000, "Dashboard never loaded");

  });

  it('should click on contracts and check labe', async function() {
    await dashboard.goToContracts();
    expect(image.isPresent()).toBeTruthy();

  });
});
