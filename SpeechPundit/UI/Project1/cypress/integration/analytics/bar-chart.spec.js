//Bar Chart
describe('Bar Chart', function () {
    it(' User shall be able to access the bar chart showing all metrics.', function () {
        //login as a valid user.
        cy.visit("https://dev02.speechpundit.com/signin");
        cy.get('#email').type('sowbhagya3696+18@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        //Analytics page
        cy.get('[routerlink="/activity/analytics"]').click()
        //charts and metrics
        cy.contains('Weekly Performance').click()
        cy.contains('Visual').click()
        cy.contains('Voice').click()
        cy.contains('Verbal').click()
        //-- VALIDATION-- //
        cy.contains('app-weekly-performance');
    })
})