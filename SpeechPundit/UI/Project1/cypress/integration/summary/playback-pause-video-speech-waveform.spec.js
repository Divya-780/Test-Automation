//Playback, pause of video using play icon in speech waveform
describe('Playback, pause of video using play icon in speech waveform', function () {
    it('Verify that Playback, pause of video is possible using play icon in speech waveform', function () {
        cy.visit("https://dev02.speechpundit.com/signin");
        cy.get('#email').type('sowbhagya3696+18@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        //Navigate to Activity page
        cy.contains('Activity').click();
        cy.wait(1000);
       //Click on summary icon for a speech displayed in Activity page
        cy.get('.pt-3 > .btn').eq(2).click();
        //Click on play icon --> verify that video playback has started
        cy.get('.p-button-icon').click();
        cy.wait(1000);
        //Click on pause icon --> verify that video playback has paused
        cy.get('.p-button-icon').click(); 
        //-- VALIDATION-- //
        cy.url().should("contain", 'summary');
    })
})