// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('addPet', (petData) => {
    return cy.request('POST', 'https://petstore.swagger.io/v2/pet', petData);
});

Cypress.Commands.add('getPetById', (petId) => {
    return cy.request('', `https://petstore.swagger.io/v2/pet/${petId}`);
});

Cypress.Commands.add('updatePet', (updatePet) => {
    return cy.request('PUT', 'https://petstore.swagger.io/v2/pet/', updatePet);
});

Cypress.Commands.add('getPetsByStatus', (status) => {
    return cy.request('GET', `https://petstore.swagger.io/v2/pet/findByStatus?status=${status}`);
});