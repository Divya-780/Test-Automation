//Display of speech waveform
describe('Display of speech waveform', function () {
    it('Verify that speech waveform is displayed', function () {
        cy.visit("https://dev02.speechpundit.com/signin");
        cy.get('#email').type('sowbhagya3696+18@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        //Navigate to Activity page
        cy.contains('Activity').click();
        cy.wait(1000);
        //Click on summary icon for a speech displayed in Activity page
        cy.get('.pt-3 > .btn').eq(2).click();
        cy.get('.my-3').click();
        //waveform is displayed
        cy.get('.p-button-rounded').click();
        //-- VALIDATION-- //
       ///Audio wave is palying

    })
})