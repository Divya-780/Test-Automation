describe('Download a speech from activity page', function () {
    it('Verify that user shall be able to download a speech from activity page', function () {
        // sign and navigating to activity page
        let url = Cypress.config().signinUrl; //accesing baseUrl
        cy.visit(url);
        // cy.visit("https://dev02.speechpundit.com/signin")
        cy.get('#email').type('applinetester+1@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        cy.wait(4000);
        cy.get('#dropdownOne').click();
        cy.wait(4000);
        cy.contains('Delete').click();
        cy.get('.p-dialog-footer > .btn').click();
        cy.wait(2000);
        //-- VALIDATION --//
        console.log("Observe that deleted video is not present in the activity page");
        cy.url().should("contain",'history');
    })
})