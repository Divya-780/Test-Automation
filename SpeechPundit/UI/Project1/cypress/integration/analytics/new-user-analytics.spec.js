describe('"No data available" for the new user', function () {
    it('For a new user all the charts on the analytics page will show "No data available" ', function () {
    //login as a valid user.
    let url = Cypress.config().signinUrl; //accesing baseUrl
    cy.visit(url);
    // cy.visit("https://dev02.speechpundit.com/signin");
    cy.get('#email').type('applinetester+1@gmail.com');
    cy.get('#password').type('Sathwik@1719');
    cy.get('form').submit();
    cy.get('[routerlink="/activity/analytics"]').click()
    //Different charts and metrics
    cy.contains('Weekly Performance').click()
    //-- VALIDATION-- //
    cy.contains('No data to display').click()
})
})