
context('Angular Quick Start', () => {

    it('should open the angular quick start page', () => {
        cy.visit('/');
        cy.get('.toolbar').contains('Welcome');
        cy.get('.content').contains('angular-pdd app is running');
        cy.get('.content pre').contains('ng generate component xyz');
    });

});
