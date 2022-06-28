describe('sign up form cannot be submitted with invalid characters', function () {
    it('Verify that user shall NOT be able to sign up using invalid characters', function () {
    cy.visit("https://dev02.speechpundit.com/signup");
    //Signing up without validaTing pswd//   
    cy.get('#email').type('sowbhagya3696+604@gmail.com');
    cy.get('#firstName').type('sowbhagya');
    cy.get('#lastName').type('lakshmi');
    cy.get('#password').type('Sathwik1719');//invalid password.
    cy.get('[Value="Coach"]').check({force: true});
    cy.get('#acceptTerms');
    cy.get('form').submit();
    //PSWD VALIDATION
    cy.contains('Must contain at least one special character');
 })
})