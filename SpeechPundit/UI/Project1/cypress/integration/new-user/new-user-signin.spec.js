//Test Case-MYS-T49.
//User shall be able to login as a new user
describe('User shall be able to login as a new user', function () {
    it('After providing correct login credential, user shall be able to sign in.',function(){
    //Sign in with invalid credentials
    cy.visit("https://dev02.speechpundit.com/signin");
    cy.get('#email').type('sowbhagya3696+735@gmail.com');
    cy.get('#password').type('Sathwik@1719');
    cy.get('form').submit();
    //-- VALIDATION-- //
    cy.url().should("contain", 'pricing/all');
 })
})
