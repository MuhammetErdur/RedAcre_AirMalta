import homePage from "../pages/homePage";
import flights, { clickFlexibleDates } from "../pages/flights";
import calendar, { getFirstAvailableFlightPrice } from "../pages/calender";
import 'cypress-xpath';



describe('Getting first available flight price', () => {
  beforeEach(() => {
    homePage.navigate('/home');
    homePage.rejectCookies();
  });

  it('should book a flight and return its price', () => {
    let todayDate = homePage.getTodayDate();
    homePage.selectOneWayTrip();
    homePage.selectDepartingFromAirport("Vienna International");
    homePage.selectFlyingToAirport("Malta International Airport");
    homePage.selectDepartureDate(todayDate);
    homePage.clickFindFlights();
   
    flights.clickFlexibleDates();
    calendar.getFirstAvailableFlightPrice();
  });
});
