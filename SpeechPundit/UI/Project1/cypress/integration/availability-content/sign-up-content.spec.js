describe(' Test "Sign Up" link is working on speechcoach website', function () {
    it('Verify that "Sign Up" link is present on speechcoach website and navigates correctly',function(){  
    //navigate to  sign up page
    let url = Cypress.config().baseUrl; //accesing baseUrl
    cy.visit(url);
    cy.contains('Sign Up').click();
    //Verify that corresponding fields present in sign up page
    cy.contains("Create Account");
    cy.contains("Email*");
    cy.contains("First Name*");
    cy.contains("Last Name*");
    cy.contains("Password*");
    cy.contains("Role:*");
    cy.contains("Coach");
    cy.contains("Student");
    cy.contains("I accept the Terms & Conditions");
    cy.contains("Register");
    cy.contains("Already a member?");
    cy.contains("Sign in");
    cy.contains("Privacy Policy");
    })
})
