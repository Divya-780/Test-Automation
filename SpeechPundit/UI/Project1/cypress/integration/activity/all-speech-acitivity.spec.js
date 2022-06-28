describe('All speeches of user shall be displayed in activity page', function () {
    it(' Verify all speeches of user are displayed in activity page', function () {
        //Record a speech and navigate to Activity page.
        let url = Cypress.config().signinUrl; //accesing baseUrl
        cy.visit(url);
        cy.get('#email').type('divya+2022coach@applines.com');
        cy.get('#password').type('Sonu@1234');
        cy.get('form').submit();
        //VALIDATION--verify number of videos(5) 
        cy.get('.dropdown').its('length').should('eq',5);
        
    })
})