class LoginPage {
    private email: string;
    private password: string;
    private submitButton: string;

    constructor() {
        this.email = '#email';
        this.password = '#passwd'
        this.submitButton = '#SubmitLogin'
    }

    public logInEmail(): void {
        cy.get(this.email).type("aperdomobo@gmail.com")
    }

    public logInPassword(): void {
        cy.get(this.password).type("WorkshopProtractor")
    }

    public submitLogIn(): void {
        cy.get(this.submitButton).click()
    }

}
export { LoginPage }