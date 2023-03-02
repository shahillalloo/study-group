export class LandingPage {

    open() {
        cy.visit('/')
    }

    get username() { return cy.get('[data-test="username"]'); }
    get password() { return cy.get('[data-test="password"]'); }
    get loginBtn() { return cy.get('[data-test="login-button"]'); }
    get landingError() { return cy.get('[data-test="error"]'); }


login(username,password){
    this.username.type(username)
    this.password.type(password)
    this.loginBtn.click()  
}
}

export default new LandingPage()