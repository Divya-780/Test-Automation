//User shall receive the receipt for a successful payment.
describe('User will receive the receipt for a successful payment. ', function () {
    it('User can check the receipt after the successful transaction ', function () {
    // Login with valid credentials
    cy.visit("https://dev02.speechpundit.com/signin");
    cy.get('#email').type('applinetester+1@gmail.com');
        cy.get('#password').type('Sathwik@1719');
        cy.get('form').submit();
        cy.wait(1000)
        //payment receipt
        cy.get('.nav-item').invoke('show');
        cy.get('.dropdown-item').eq(2).click({force: true});
        cy.contains('Invoice #').click();
        //-- VALIDATION --//
        cy.url('https://pay.stripe.com/receipts/invoices/#/');
    
    })
})