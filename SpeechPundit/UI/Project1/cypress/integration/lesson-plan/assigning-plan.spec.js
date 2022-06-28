//Test Case-MYS-T85.
//Assigning the lesson plan
describe('Assigning the lesson plan. ', function () {
  it('Coach shall be able to assign a lesson plan to students.', function () {
    // visit signin url.
    cy.visit("https://dev02.speechpundit.com/signin");
    cy.get('#email').type('sowbhagya3696+4@gmail.com');
    cy.get('#password').type('Sathwik@1719');
    cy.get('form').submit();
    cy.wait(2000)
    cy.get('.nav-item').invoke('show')
    cy.get('.dropdown-item').eq(5).click({force: true})
    //Select the Speech, Date assigned, Due date for assignment. 
    cy.contains('teju').focus().click();
    cy.contains('Classwork').focus().click();
    cy.contains('New Assignment ').click();
    cy.get('.form-select').first().select('Traveling');
    cy.get('#assignedDate').click();
    cy.get(".p-datepicker-today ").click();
    cy.get('#dueDate').click();
    cy.get(".p-datepicker-today ").eq(1).click();
    // select the level and assessment criteria template.
    cy.get('.form-select').eq(1).select('Beginner');
    cy.get('.form-select').eq(2).select('palu');
    cy.get('.p-multiselect-label').click()
    cy.get('.p-multiselect-filter').type('sowbhagya lakshmi');
    cy.get('.p-checkbox-box').eq(0).click();
    cy.get('p-multiselect').click();
    cy.get('.btn').last().click();
    //VALIDATION
    cy.contains('teju')
  })
})