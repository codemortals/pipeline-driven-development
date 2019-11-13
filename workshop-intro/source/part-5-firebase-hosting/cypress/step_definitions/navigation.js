import { Given } from 'cypress-cucumber-preprocessor/steps'

Given(/^the site is open$/, () => {
    cy.visit('/');
});
