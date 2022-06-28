//Bar chart time frame- Custom range
describe('User shall be able to view the bar chart of all the speeches and metrics done for the selected time frame - Custom range', function () {
    it('Bar chart time frame- Custom range.', function () {
        //login as a valid user.
        let url = Cypress.config().signinUrl; //accesing baseUrl
        cy.visit(url);
        // cy.visit("https://dev02.speechpundit.com/signin");
        cy.get('#email').type('sowbhagya3696+18@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        //Analytics page
        cy.get('[routerlink="/activity/analytics"]').click()
        //Action
        cy.get('.form-select-sm').eq(0).select('Custom Range').should('have.value', 'custom');
        cy.get('.p-button').click()
        cy.get('.p-datepicker-prev-icon').click()
        cy.get('.p-datepicker-calendar').first().click()
        cy.get('.p-datepicker-today').click()
        cy.get('.p-button').click()
        cy.contains('Weekly Performance')
       //-- VALIDATION-- //
        cy.contains('4')
    })
})