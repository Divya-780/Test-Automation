//Display of filler words in speech waveform
describe('Display of filler words in speech waveform', function () {
    it('Verify that filler words detected in speech are marked in waveform timeline', function () {
        cy.visit("https://dev02.speechpundit.com/signin");
        cy.get('#email').type('sowbhagya3696+18@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        //Navigate to Activity page.
        cy.contains('Activity').click();
        cy.wait(1000)
        //Click on summary icon for a speech displayed in Activity page
        cy.get('.pt-3 > .btn').eq(2).click()
        cy.get('.my-3').click();
        //waveform
        cy.get('.p-button-rounded').click();
        //filler words detected in speech 
        cy.contains('Filler Word').click();
        //-- VALIDATION-- //
        cy.contains('but');
    })
})