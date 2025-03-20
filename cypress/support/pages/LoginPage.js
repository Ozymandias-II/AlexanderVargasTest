class LoginPage {
    static login(username, password){
        cy.get('#user-name').type(username);
        cy.get('#password').type(password);
        cy.get('#login-button').click();
        cy.url().should('include', '/inventory.html');
    }
}

export default LoginPage;