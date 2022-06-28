//Update of text, emoji in video metrics while video is played
describe('Update of text, emoji in video metrics while video is played', function () {
    it('Verify that text, emoji are updated in video metrics while video is played', function () {
        cy.visit("https://dev02.speechpundit.com/signin");
        cy.get('#email').type('sowbhagya3696+18@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        //Navigate to Activity page
        cy.contains('Activity').click();
        cy.wait(4000);
        //Click on summary icon for a speech displayed in Activity page
        cy.get('.pt-3 > .btn').eq(1).click();
        //Play video
        cy.get('.p-button-icon').click();
        cy.wait(1000)
        cy.get('.p-button-icon').click();
        //emoji are updated in video metrics section as video is being played
        cy.get('.p-card-body');
        //-- VALIDATION-- //
        //observe while video is playing the emojis and text is changing
    })
})