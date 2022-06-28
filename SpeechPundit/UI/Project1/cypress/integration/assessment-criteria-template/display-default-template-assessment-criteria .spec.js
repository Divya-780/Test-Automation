//Display of Default template in Assessment Criteria page
describe('Display of Default template in Assessment Criteria page',function(){
    it('Coach shall be able to view the default template',function(){
    //Login with coach credentials.
    // cy.visit("https://dev02.speechpundit.com/signin");
    let url = Cypress.config().signinUrl; //accesing baseUrl
    cy.visit(url);
    cy.get('#email').type('sowbhagya3696+4@gmail.com');
    cy.get('#password').type('Sathwik@1719');
    cy.get('form').submit();
    //visit assessment criteria template
    cy.get('.nav-item').invoke('show');
    cy.get('.dropdown-item').eq(6).click({force: true});
    cy.contains('Default Template ').click();
    //-- VALIDATION --// 
    cy.contains(' Suggested Weight ');
    })
})