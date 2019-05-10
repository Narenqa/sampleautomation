const submitCommands = {
  submit() {
    this.waitForElementVisible('@searchButton', 1000)
      .click('@searchButton')
      .api.pause(1000);

    return this; // Return page object for chaining
  }
};

// const pickupCommand = {
//   pickup(){
//     this.waitForElementVisible('pickupLocation', 1000)
//     .setValue
//   }
// }


module.exports = {
  url: 'https://www.cleartrip.com/',
  commands: [submitCommands],
  elements: {

    roundTripRadioButton: {selector: 'input#RoundTrip'},
    flightLink: {selector: 'ul.productLinks li.flightApp a'},
    fromInput: {selector: 'input#FromTag'},
    toInput: {selector: 'input#ToTag'},
    autocompleteFrom: {selector: 'ul#ui-id-1 li'},
    autocompleteTo: {selector: 'ul#ui-id-2 li'},

    departDate: {selector: 'input#DepartDate'},
    returnDate: {selector: 'input#ReturnDate'},

    selectDay: {selector: 'td.ui-datepicker-days-cell-over'},

    searchButton: {selector: 'input#SearchBtn'},


    bookingField: {selector: 'div.ibe-location-section div#sx-js-ibe-location-pickup div'},
    pickupLocation: {selector: '#sx-js-ibe-location-pickup input.sx-res-booking-entry.sx-res-ibe-location'},
    resultPuList: {selector: '#sx-js-res-pu-list li ul li.ddlist-selected'},
    //ul[@id="sx-js-res-pu-list"]//ul/li[contains(.,"Berlin Central Train Station (DE)")]},
    returnLocation: {selector: '#sx-js-ibe-location-return input.sx-res-ibe-location'},

    dateTimePick: {selector: '#sx-js-res-pu-date'},
    currentDay: {selector: '#ui-datepicker-div td.ui-datepicker-current-period-end'},

    dateTimeReturn: {selector: '#sx-js-res-ret-date'},
    // currentDay: {selector: '#ui-datepicker-div td.ui-datepicker-current-period-end'},

    pickupTimePicker: {selector: '#sx-js-res-pu-time'},
    timeValueList: {selector: 'ul#sx-js-res-pu-time-list'},

    returnTimePicker: {selector: '#sx-js-res-ret-time'},
    // timeValue: {selector: 'ul#sx-js-res-pu-time-list'},

    searchBar: {selector: 'input[name=q]'},
    submitButton: {selector: 'input[value="Google Search"]'}
  }
};
