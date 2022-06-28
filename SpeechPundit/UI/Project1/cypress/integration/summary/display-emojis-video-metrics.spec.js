//Display of emojis, laughter, sad etc according to speech content in video metrics
describe('Display of emojis, laughter, sad etc according to speech content in video metrics', function () {
    it('Verify that emojis of laughter, sad etc are displayed according to speech content in video metrics', function () {
        cy.visit("https://dev02.speechpundit.com/signin");
        cy.get('#email').type('sowbhagya3696+18@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        //Navigate to Activity page
        cy.contains('Activity').click();
        cy.wait(1000)
        //Click on summary icon for a speech displayed in Activity page
        cy.get('.pt-3 > .btn').eq(2).click()
        //Verify that multiple aspects of voice are displayed in Voice Metrics
        cy.get('.far').click();
        cy.wait(1000)
        cy.get('.far').click();
        //-- VALIDATION-- //
        cy.get('.p-card-content').click();

    })
})