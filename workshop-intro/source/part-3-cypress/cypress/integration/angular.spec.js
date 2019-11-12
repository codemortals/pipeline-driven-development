
context('Angular Quick Start', () => {

    it('should open the angular quick start page', () => {
        cy.visit('/');
        cy.get('body').contains('angular-pdd app is running');
        cy.get('.toolbar').contains('Welcome');
    });

});
