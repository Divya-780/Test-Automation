describe('Display of speeches in either grid or list view in activity page', function () {
    it(' Verify speeches can be displayed in either grid or list view in activity page ', function () {
        let url = Cypress.config().signinUrl; //accesing baseUrl
        cy.visit(url);
        // cy.visit("https://dev02.speechpundit.com/signin");
        //sign in and navigate to  the Activity page.
        cy.get('#email').type('sowbhagya3696+4@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        cy.contains('Activity').click();
        //LIST VIEW
        cy.get('[for="btnradio1"]').click();
        //GRID VIEW
        cy.get('[for="btnradio2"]').click();
        //-- VALIDATION --// 
        cy.url().should("contain", 'studentactivity');
    })
})
