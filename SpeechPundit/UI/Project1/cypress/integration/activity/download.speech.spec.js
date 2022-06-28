describe('Download a speech from activity page', function () {
    it('Verify that user shall be able to download a speech from activity page', function () {
        //Download a speech from activity page.//
        cy.wait(2000);
        let url = Cypress.config().signinUrl; //accesing baseUrl
        cy.visit(url);
        // cy.visit("https://dev02.speechpundit.com/signin");
        cy.get('#email').type('sowbhagya3696+24@gmail.com');
        cy.get('#password').type('Sathwik@151719');
        cy.get('form').submit();
        cy.contains('Activity').click();
        cy.get('#dropdownOne').click();
        cy.contains('Download').click();
        cy.wait(4000);
        //speech has been downloaded in local floder.
     })
})