//Display of details for each of the multiple aspects of voice metrics
describe('Display of details for each of the multiple aspects of voice metrics', function () {
    it('Verify that user can navigate to details for each of the multiple aspects of voice metrics', function () {
        cy.visit("https://dev02.speechpundit.com/signin");
        cy.get('#email').type('sowbhagya3696+18@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        cy.contains('Activity').click();
        cy.wait(1000)
        //Click on summary icon for a speech displayed in Activity page
        cy.get('.pt-3 > .btn').eq(2).click();   
        //Voice Metrics
        cy.contains('Voice Metrics');
        //respective scores of voice 
        cy.contains('Voice').click();
        cy.contains('Overall assessment').click();

    })
})