//Copy the group
describe('Copy the group',function(){
    it('Coach shall be able to copy the group.',function(){
    //Login with coach credentials.
    let url = Cypress.config().signinUrl; //accesing baseUrl
    cy.visit(url);
    // cy.visit("https://dev02.speechpundit.com/signin");
    cy.get('#email').type('sowbhagya3696+4@gmail.com');
    cy.get('#password').type('Sathwik@1719');
    cy.get('form').submit();
    cy.wait(1000)
    //Open the group.
    cy.get('.nav-item').invoke('show');
    cy.get('.dropdown-item').eq(5).click({force: true});
    cy.wait(1000);
    //Click 3 dots on top right corner. 
    cy.get('#dropdownOne').click();
    //cy.get('.dropdown-menu').click()
    cy.contains('Copy').click();
})
})