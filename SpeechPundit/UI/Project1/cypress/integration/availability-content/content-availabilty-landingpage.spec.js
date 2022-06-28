
describe('Testing Landing Page', () => {
    it('Verifies that the page loads with the expected content', () => {
        //Verifying content on speechpundit website//
        cy.visit('https://dev02.speechpundit.com');
        // Verify that header elements are present
        cy.contains('About Us')
        cy.contains('Pricing');
        cy.contains('Sign in');
        cy.contains('Sign Up');
        //verify that central elements are present
        cy.contains('Try Now');
        // Verify that nav links are working
        cy.contains('Why choose us').click();
        cy.wait(2000);
        cy.contains('Program Video').click();
        cy.wait(2000);
        cy.contains('Program Overview').click();
        cy.wait(2000);
        cy.contains('Testimonial').click();
        cy.wait(2000);
        cy.contains('Start Your Program').click();
        //verify that footer elements are present
        cy.get('[routerlink="/help_center"]').click();
        cy.wait(2000);
        cy.go('back');
        cy.get('[routerlink="/contact_us"]').click();
        cy.wait(2000);
        cy.contains('Plans');
        cy.contains('Privacy Policy');
        cy.go('back');
        cy.wait(5000);
    })
  })