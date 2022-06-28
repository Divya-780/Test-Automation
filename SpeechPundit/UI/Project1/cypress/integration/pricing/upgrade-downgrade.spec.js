//Upgrade and downgrade a plan
describe('Upgrade and downgrade a plan',function()
{
 it('User shall be able to upgrade or downgrade the subscription plan by clicking "Change plan" on My Subscription page. User shall be presented with the options and pro-rated amount.',function(){
 cy.visit("https://dev02.speechpundit.com/signin");
  //Login with valid credentials
 cy.get('#email').type('sowbhagya3696+18@gmail.com');
 cy.get('#password').type('Sathwik@1719');
 cy.get('form').submit();
 cy.wait(2000)
 //Pick a plan (upgrade or downgrade)
 cy.get('.nav-item').invoke('show')
 cy.get('.dropdown-item').eq(3).click({force: true})
 cy.contains('Upgrade Plan').click();
 cy.contains('Upgrade to Premium').click();
 cy.wait(4000)
 cy.get('.p-dropdown').click()
 cy.get('.ng-trigger').click()
 cy.get('.btn-secondary').click()
 cy.get('.p-dialog').click()
 cy.get('.ng-star-inserted').should("contain", 'Confirm');
 cy.contains('Confirm').click();
 //User shall be able to see the invoices on My Subscription page.
 })
})
