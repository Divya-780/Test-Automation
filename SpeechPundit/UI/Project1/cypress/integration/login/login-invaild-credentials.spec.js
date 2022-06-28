//Test Case-MYS-T10.
//login with invalid credentials.
describe('Testing login with invalid credentials', function () {
it('login fails with invalid password',function (){
    //Sign in with invalid credentials
    let url = Cypress.config().signinUrl; //accesing baseUrl
    cy.visit(url);
    // cy.visit("https://dev02.speechpundit.com/signin");
    cy.get('#email').type('sowbhagya3696+4@gmail.com');
    cy.get('#password').type('Sathwik@119');
    cy.get('form').submit();
    //-- VALIDATION --//
    cy.contains('Invalid Credential');
})
})
