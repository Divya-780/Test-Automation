//Analytics page access
describe('Analytics page access', function () {
    it(' User shall be able to access the analytics page to see the different charts and metrics.', function () {
        //login as a valid user.
        let url = Cypress.config().signinUrl; //accesing baseUrl
        cy.visit(url);
        cy.get('#email').type('sowbhagya3696+18@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        cy.get('[routerlink="/activity/analytics"]').click();
        //Different charts and metrics
        cy.get('.form-select-sm').eq(0).select('Last 5 Speeches').should('have.value', 'last5');
        cy.contains('Weekly Performance').click();
        cy.contains('Areas Of Improvemen').click();
        cy.get('.chartjs-render-monitor').first().click();
        //-- VALIDATION-- //
        cy.url().should("contain", 'analytics');
    })
})
