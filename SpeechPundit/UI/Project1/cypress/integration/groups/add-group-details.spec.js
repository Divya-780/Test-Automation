//Add group details
describe('Add group details',function(){
    it('Coach shall be able to create the group by adding all the required details such as group name, level, class time and duration and class recurrence.',function(){
    //Login with coach credentials.
    let url = Cypress.config().signinUrl; //accesing baseUrl
    cy.visit(url);
    cy.get('#email').type('sowbhagya3696+4@gmail.com');
    cy.get('#password').type('Sathwik@1719');
    cy.get('form').submit();
    cy.wait(1000)
    //visit group 
    cy.get('.nav-item').invoke('show')
    cy.get('.dropdown-item').eq(5).click({force: true})
    //Create new group by clicking "Create" button
    cy.get('.btn').first().click()
    //Provide all the mandatory fields information. 
    cy.get('#name').type('tester')
    cy.get('#level').select('Beginner').should('have.value','Beginner');
    cy.contains('Start Time').click()
    cy.get('.p-calendar').eq(0).click()
    cy.get('.p-hour-picker').eq(0).click()
    cy.get('.p-minute-picker').click()
    cy.get('.p-ampm-picker').last().click()
    cy.contains('End Time').click()
    cy.get('button', { includeShadowDom: true })
    cy.get('.col-12 > :nth-child(5)').click()
    cy.wait(2000)
    cy.get('#startDate').click()
    cy.get('.p-datepicker-today').first().click()
    cy.get('#endDate').click()
    cy.get('.p-datepicker-today').last().click()
    //click Add
    cy.get('.btn').last().click()  
    //VALIDATION   
    cy.contains('tester')
  
  })
})