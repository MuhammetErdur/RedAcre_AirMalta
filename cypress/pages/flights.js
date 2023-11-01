class flights{

    elements ={
      
      flexibleDatesLink : ()=> cy.get('.LinkUI__Link-cgZPLA'),
      outBoundFlightHeader : ()=> cy.xpath('//h4[contains(text(),"Outbound Flight")]')

    }

    clickFlexibleDates(){

        cy.url().then((url) => {
        if(url === 'https://book.airmalta.com/flights/oneway'){
            // if URL is correct, find flexibleDatesLink element and click
            this.elements.flexibleDatesLink().click()
            // wait for calendar to be visible
            cy.wait(2000)
        }
    });
    }
}
module.exports = new flights();