module.exports = {

  'Demo Cleartrip round trip': function (client){
    var homePage = client.page.TripHome();
     homePage.navigate();

     homePage.expect.element('@flightLink').to.be.enabled;
     homePage.waitForElementVisible('@roundTripRadioButton', 1000)
     homePage.click('@roundTripRadioButton');
     homePage.waitForElementVisible('@fromInput', 2000)
     homePage.setValue('@fromInput', 'Bangalore');
     homePage.waitForElementVisible('@autocompleteFrom', 5000)
     homePage.click('@autocompleteFrom');
     homePage.waitForElementVisible('@toInput', 2000)
     homePage.setValue('@toInput', 'Chennai');
     homePage.waitForElementVisible('@autocompleteTo', 5000)
     homePage.click('@autocompleteTo');
    // await pause(1000);
    homePage.waitForElementVisible('@departDate', 2000)
    homePage.click('@departDate');
    homePage.waitForElementVisible('@selectDay', 2000)
    homePage.click('@selectDay');
    homePage.waitForElementVisible('@returnDate', 2000)
    homePage.click('@returnDate');
    homePage.waitForElementVisible('@selectDay', 2000)
    homePage.click('@selectDay');

    homePage.waitForElementVisible('@searchButton', 2000)
    homePage.click('@searchButton');

  },

  'Demo Cleartrip Results page': function (client){
    var resultsPage = client.page.TripResultsPage();

    resultsPage.waitForElementVisible('@departureTime', 10000)
    resultsPage.click('@departureTime');

    resultsPage.waitForElementVisible('@arrivalTime', 1000)
    resultsPage.click('@arrivalTime');

    resultsPage.waitForElementVisible('@bookButton', 1000)
    resultsPage.click('@bookButton');
    resultsPage.waitForElementVisible('@acceptButton', 3000)
    resultsPage.click('@acceptButton');

    resultsPage.waitForElementVisible('@itenaryButton', 3000)
    resultsPage.click('@itenaryButton');
    resultsPage.waitForElementVisible('@username', 2000)
    resultsPage.setValue('@username', 'nareng9@gmail.com');
    resultsPage.waitForElementVisible('@loginContinueButton', 2000)
    resultsPage.click('@loginContinueButton');

    // const title = '#intADDAD1 #AdultTitle1'
    // const i = 2;
    // client.waitForElementVisible(title, 5000)
    // client.click(title+` option:nth-child${i}`)
    resultsPage.waitForElementVisible('@title', 5000)
    resultsPage.click('@title');

    resultsPage.waitForElementVisible('@firstName', 2000)
    resultsPage.setValue('@firstName', 'Narendra');

    resultsPage.waitForElementVisible('@lastName', 2000)
    resultsPage.setValue('@lastName', 'Guntaka');

    resultsPage.waitForElementVisible('@dobDay', 2000)
    resultsPage.click('@dobDay');

    resultsPage.waitForElementVisible('@dobMonth', 2000)
    resultsPage.click('@dobMonth');

    resultsPage.waitForElementVisible('@dobYear', 2000)
    resultsPage.click('@dobYear');

    resultsPage.waitForElementVisible('@nationality', 2000)
    resultsPage.setValue('@nationality', 'India');

    resultsPage.waitForElementVisible('@nationalityList', 5000)
    resultsPage.click('@nationalityList');

    resultsPage.waitForElementVisible('@mobile', 2000)
    resultsPage.setValue('@mobile', '7760999789');
    resultsPage.submit();

    // client.end();
  }

};
