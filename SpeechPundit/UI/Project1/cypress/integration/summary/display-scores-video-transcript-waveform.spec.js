//Display of Performance scores, video, transcript, waveform and Overall Assessment
describe('Display of Performance scores, video, transcript, waveform and Overall Assessment', function () {
    it('Verify that Performance scores, video, transcript, waveform and Overall Assessment shall be displayed', function () {
        cy.visit("https://dev02.speechpundit.com/signin");
        cy.get('#email').type('sowbhagya3696+105@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        //navigate to Activity page
        cy.contains('Activity').click();
        cy.wait(1000);
        //click on summary icon of a speech
        cy.get('.pt-3 > .btn').click();
        // video, transcript, waveform 
        cy.contains('Original Video');
        cy.contains('Transcript');
        cy.contains('Verbal Chart');
        cy.get('.p-button-rounded');
        //Overall Assessment are displayed
        cy.contains('Visual').click();
        cy.contains('Voice').click();
        cy.contains('Verbal').click();
        cy.contains('Overall').click();
        cy.contains('Overall assessment').click();
        //-- VALIDATION-- //
        //it contains above all the elements
    })
})