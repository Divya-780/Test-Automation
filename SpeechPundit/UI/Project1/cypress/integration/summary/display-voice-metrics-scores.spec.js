//Display of multiple aspects, respective scores of voice metrics
describe('Display of multiple aspects, respective scores of voice metrics', function () {
    it('Verify that multiple aspects, respective scores of voice metrics are displayed', function () {
        cy.visit("https://dev02.speechpundit.com/signin");
        cy.get('#email').type('sowbhagya3696+18@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        cy.wait(1000)
        //Click on summary icon for a speech displayed in Activity page
        cy.get('.pt-3 > .btn').eq(2).click();
        //Verify that multiple aspects of voice are displayed in Voice Metrics
        cy.contains('Voice Metrics');
        cy.contains('Overall assessment').dblclick();
        cy.contains('Voice').click();
        //-- VALIDATION-- //
        cy.url().should("contain", 'summary');
    })
})