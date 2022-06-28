//Bar chart time frame -Last Week
describe('Bar chart time frame -Last Week', function () {
    it('User shall be able to view the bar chart of all the speeches and metrics done for the selected time frame -Last week. ', function () {
     //login as a valid user.
     let url = Cypress.config().signinUrl; //accesing baseUrl
     cy.visit(url);
    //  cy.visit("https://dev02.speechpundit.com/signin");
     cy.get('#email').type('sowbhagya3696+18@gmail.com');
     cy.get('#password').type('Sathwik@1719');
     cy.get('form').submit();
      //Analytics page
     cy.get('[routerlink="/activity/analytics"]').click()
     //Action
     cy.get('.form-select-sm').eq(0).select('Last Week').should('have.value', 'lastWeek');
     //-- VALIDATION-- //
     cy.contains('Weekly Performance')
    })
   })
 