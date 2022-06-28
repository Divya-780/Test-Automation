describe('Adding new students to the group.',function(){
    it('Coach shall be able to add new students to the group.',function(){
    //Login with coach credentials.
    let url = Cypress.config().signinUrl; //accesing baseUrl
    cy.visit(url);
    // cy.visit("https://dev02.speechpundit.com/signin");
    cy.get('#email').type('sowbhagya3696+4@gmail.com');
    cy.get('#password').type('Sathwik@1719');
    cy.get('form').submit();
    //visit group 
    cy.get('.nav-item').invoke('show');
    cy.get('.dropdown-item').eq(5).click({force: true});
    cy.wait(1000);
    //Click "Add new student
    cy.get('.text-capitalize').eq(2).click();
    cy.get('.px-5').click();
    cy.get('#firstName').type('cypress');
    cy.get('#lastName').type('UI');
    cy.wait(1000)
    //Provide first name, last name and email id of the newly added student.
    var date = new Date();
    var fname = "autouser";
    var yyyymmdd = date.getUTCFullYear().toString().concat(date.getMonth()).concat(date.getUTCDay());
    var hhmmss = date.getHours().toString().concat(date.getMinutes()).concat(date.getSeconds());
    var email = fname.concat(".").concat(yyyymmdd).concat(hhmmss).concat("@applines.com");
    cy.get('#email').type(email);
    cy.get('.p-inputnumber-input').type('22');
    cy.get('[Value="Male"]').check({force: true});
    //click Add
    cy.get('.btn').eq(2).click(); 
    //VALIDATION
    cy.contains('Add New Student');
    })
})