//Copy the group
describe('Copy the group',function(){
    it('Coach shall be able to copy the group.',function(){
    //Login with coach credentials.
    let url = Cypress.config().signinUrl; //accesing baseUrl
    cy.visit(url);
    // cy.visit("https://dev02.speechpundit.com/signin");
    cy.get('#email').type('divya+feb14@applines.com');
    cy.get('#password').type('Sonu@1234');
    cy.get('form').submit();
    cy.wait(1000)
    //Open the group.
    cy.get('.nav-item').invoke('show');
    cy.get('.dropdown-item').eq(5).click({force: true});
    cy.wait(1000)
    //Click 3 dots on top right corner. 
    cy.get('#dropdownOne').click();
    cy.contains('Archive').click();
    cy.get('.p-dialog-footer > .btn-secondary').click();
    //VALIDATION   
    cy.url().should("contain", 'groups');
    })
})