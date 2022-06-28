//Deleting Custom Template
describe('Deleting Custom Template',function(){
    it('A coach shall be able to delete the custom template only if its not assigned to any student',function(){
    //Login with coach credentials.
    // cy.visit("https://dev02.speechpundit.com/signin");
    let url = Cypress.config().signinUrl; //accesing baseUrl
    cy.visit(url);
    cy.get('#email').type('sowbhagya3696+4@gmail.com');
    cy.get('#password').type('Sathwik@1719');
    cy.get('form').submit();
    //Access the Assessment criteria
    cy.get('.nav-item').invoke('show');
    cy.get('.dropdown-item').eq(3).click({force: true});
    cy.wait(1000);
    cy.get('.fa-trash').last().click();
    cy.get('.p-confirm-popup-accept').first().click( {force: true});
    //-- VALIDATION --// //Speech Name
    cy.contains('Speech Name');
    //observe that the deleted template is not present in the tab.
    cy.url().should("contain", 'lessonplan');
})
})