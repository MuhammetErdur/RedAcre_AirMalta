class homePage{

    

    elements ={
        
        tripTypeInput : ()=> cy.xpath('//input[@title="Round trip"]'),

        oneWayOption : ()=> cy.xpath('//div[contains(text(),"One way")]'),

        departingFromInput : ()=> cy.get('.route-selection-origin > .input-holder > .form-control > .ellipsis'),

        flyingToInput : ()=> cy.get('.route-selection-destination > .input-holder > .form-control > .ellipsis'),

        airportOption : (airport)=> cy.xpath(`//div[contains(text(),'${airport}')]`),

        departureDateInput : ()=> cy.xpath('//input[@name="DepartureDate1"]'),

        

        datePickerDiv : (date)=> cy.xpath(`//div[@aria-label='${date}']`),

        findFlightsButton : ()=> cy.xpath('//button[contains(text(),"Find flights")]')
    }

    //Getting today's date and cleaning it to be in the format accepted by the web element
    getTodayDate(){

        let todayDate = new Date().toString().slice(0,15)

        return todayDate
    }

    navigate(){

        cy.visit('https://airmalta.com/')

    }

    selectOneWayTrip(){

        this.elements.tripTypeInput().click()

        this.elements.oneWayOption().click()

    }

    selectDepartingFromAirport(airport){
       
        this.elements.departingFromInput().type(airport)

        this.elements.airportOption(airport).click()

    }

    selectFlyingToAirport(airport){
       
        this.elements.flyingToInput().type(airport)

        this.elements.airportOption(airport).click()

    }

    selectDepartureDate(date){

        this.elements.departureDateInput().click()

        cy.wait(2000)

        this.elements.datePickerDiv(date).click()
    }

    clickFindFlights(){

        this.elements.findFlightsButton().click()
    }

    rejectCookies(){
        cy.get('#onetrust-reject-all-handler').click()
    }

}

module.exports = new homePage();
