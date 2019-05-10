
const submitCommands = {
  submit() {
    this.waitForElementVisible('@continueButton', 1000)
      .click('@continueButton')
      .api.pause(1000);

    return this; // Return page object for chaining
  }
};

module.exports = {
  commands: [submitCommands],
  elements: {

    departureTime: {selector: 'nav.departureTime li:nth-child(2)'},
    arrivalTime: {selector: 'nav.arrivalTime li:nth-child(3)'},
    bookButton: {selector: '#ResultContainer_1_1 button.booking.fRight'},

    acceptButton: {selector: '#insurance_confirm'},

    itenaryButton: {selector: 'input#itineraryBtn'},

    username: {selector: '#username'},
    loginContinueButton: {selector: '#LoginContinueBtn_1'},

    firstName: {selector: '#intADDAD1 #AdultFname1'},
    lastName: {selector: '#intADDAD1 #AdultLname1'},
    title: {selector: '#intADDAD1 #AdultTitle1 option:nth-child(2)'},

    dobDay: {selector: '#intADDAD1 #AdultDobDay1 option:nth-child(2)'},
    dobMonth: {selector: '#intADDAD1 #AdultDobMonth1 option:nth-child(2)'},
    dobYear: {selector: '#intADDAD1 #AdultDobYear1 option:nth-child(2)'},
    nationality: {selector: '#intADDAD1 input[data-name="nationality"]'},
    nationalityList: {selector: '#ui-id-1 li a'},
    mobile: {selector: '#travellerDetails #mobileNumber'},
    continueButton: {selector: '#travellerDetails #travellerBtn'}


  }
};
