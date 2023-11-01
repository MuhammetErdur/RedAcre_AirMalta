class calendar{
    elements ={
        
        flexibileDatesHeader : ()=> cy.get('.sc-cspYLC'),
  
        todayFlightButton : (date)=> cy.xpath(`//div[contains(text(),'${date}')]`, {timeout:3000}),
  
        continueToFlightButton : ()=> cy.xpath('//button[contains(text(),"Continue to flights")]'),
  
        nextThreeWeeksButton : ()=> cy.xpath('//span[contains(text(),"next 3 weeks")]')
  }
  
  getFirstAvailableFlightPrice() {

    for (let i = 1; i <= 21; i++) {
      const locator = '.jZzptN > :nth-child(${i}) > .sc-iLLODe';
      const dayCell = cy.get(locator);
      
      dayCell.invoke('text').then(text => {
        if (text.includes('.')) {
          const day = text;
          const price = text;
          
          if (day && price) {
            cy.log(day, price); // Print the date and price.
            return; // Terminate the loop after finding the first suitable value.
          }
        }
      });
    }
  }
  
}
  
  
module.exports = new calendar();
  
