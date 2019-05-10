module.exports = {
  'Demo Google search test using page objects': async (client)=> {
    var homePage = client.page.home();
    await homePage.navigate();
    await homePage.expect.element('@searchBar').to.be.enabled;

    await homePage.setValue('@searchBar', 'Nightwatch.js');
    await homePage.submit();

    var resultsPage = client.page.searchResults();
    await resultsPage.expect.element('@results').to.be.present.after(2000);
    await resultsPage.expect.element('@results').to.contain.text('Nightwatch.js');
    await resultsPage.expect.section('@menu').to.be.visible;

    var menuSection = resultsPage.section.menu;
    await menuSection.expect.element('@web').to.be.visible;
    await menuSection.expect.element('@video').to.be.visible;
    await menuSection.expect.element('@images').to.be.visible;
    await menuSection.expect.element('@shopping').to.be.visible;

    await menuSection.productIsSelected('@web', function(result) {
      this.assert.ok(result, 'Web results are shown by default on search results page');
    });

    client.end();
  }
};
