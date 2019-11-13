import { Then } from 'cypress-cucumber-preprocessor/steps'

Then(/^the css path "([^"]*)" contains "([^"]*)"$/, (path, text) => {
    cy.get(path).contains(text);
});
