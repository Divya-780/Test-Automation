//Display of Custom Template
describe('Display of Custom Template',function(){
    it('Coach shall be able to view the created custom template',function(){
    //Login with coach credentials.
    // cy.visit("https://dev02.speechpundit.com/signin");
    let url = Cypress.config().signinUrl; //accesing baseUrl
    cy.visit(url);
    cy.get('#email').type('sowbhagya3696+4@gmail.com');
    cy.get('#password').type('Sathwik@1719');
    cy.get('form').submit();
    //Access the Assessment criteria
    cy.get('.nav-item').invoke('show');
    cy.get('.dropdown-item').eq(6).click({force: true});
    cy.wait(2000)
    cy.contains('palu').click();
    //-- VALIDATION --// 
    cy.contains('View Template');
    })
})