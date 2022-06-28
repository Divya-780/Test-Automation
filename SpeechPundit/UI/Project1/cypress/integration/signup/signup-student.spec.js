describe('user shall be able to sign up as Student', function () {
  it('email to be sent to user to confirm account sign up', function () {
    cy.visit("https://dev02.speechpundit.com/signup");
    //-- SIGN UP AS A STUDENT --//   
    var date = new Date();
    var fname = "autouser"
    var yyyymmdd = date.getUTCFullYear().toString().concat(date.getMonth()).concat(date.getUTCDay())
    var hhmmss = date.getHours().toString().concat(date.getMinutes()).concat(date.getSeconds())
    var email = fname.concat(".").concat(yyyymmdd).concat(hhmmss).concat("@applines.com")
    cy.get('#email').type(email);
    cy.get('#firstName').type(fname);
    cy.get('#lastName').type(yyyymmdd.concat(hhmmss));
    cy.get('#password').type('Sathwik@1719');
    cy.get('[Value="Student"]').check({ force: true });//sign up as student;
    cy.get('#acceptTerms').click();
    cy.get('form').submit();
    //-- VALIDATION --//
    cy.url().should("contain", 'verify_email');
  })
})