import { getRandomInt } from '../support/utils';

describe('API test for PetStore', () => {
    let petId;

    before(() => {
        petId = getRandomInt(1, 2147483646);
    });

    it('Should add pet to the store', () => {
        cy.fixture('petData').then((pet) => {
            pet.id = petId;
            console.log(petId);
            cy.request('POST', `${Cypress.env('petstore').baseUrl}/pet`, pet)
                .then((response) => {
                    expect(response.status).to.eq(200);
                    expect(response.body.name).to.eq(pet.name);
                    petId = response.body.id;
                });
        });
    });

    it('Should search pet by Id', () => {
        cy.request('GET', `${Cypress.env('petstore').baseUrl}/pet/${petId}`)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.id).to.eq(petId);
            });
    });

    it('Shoul update pet name and pet status', () => {
        const updatePet = {
            id: petId,
            name: 'Firulais',
            status: 'sold',
        };

        cy.request('PUT', `${Cypress.env('petstore').baseUrl}/pet`, updatePet)
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body.name).to.eq('Firulais');
                expect(response.body.status).to.eq('sold');
            });
    });

    it('Should search pet by status', () => {
        cy.request('GET', `${Cypress.env('petstore').baseUrl}/pet/findByStatus?status=sold`)
            .then((response) => {
                expect(response.status).to.eq(200);
                const soldPets = response.body;
                const foundPet = soldPets.find((pet) => pet.id === petId);
                expect(foundPet).to.exist;
                expect(foundPet.name).to.eq('Firulais');
            });
    });
});