import WomenPage from './WomenPage';

class HomePage {
    visit() {
        // @ts-ignore
        cy.visit('https://e-shop.webowky.cz/')
    }

    SingIn() {
        // @ts-ignore
        const button = cy.get('.login')
        button.click()
        return this
    }

    getPasswordError() {
        // @ts-ignore
        return cy.get(`[data-testid=SignInPasswordError]`)
    }

    alreadyRegistered() {
        // @ts-ignore
        const button = cy.get('#opc_show_login')
        button.click()
        return this
    }

    // @ts-ignore
    fillEmail(value) {

        // @ts-ignore
        const field = cy.get('#txt_login_email')
        field.clear()
        field.type(value)

        return field
    }

    // @ts-ignore
    fillPassword(value) {
        // @ts-ignore
        const field = cy.get('#txt_login_password')
        field.clear()
        field.type(value)

        return field
    }

    login(){
        // @ts-ignore
        const button =
            // @ts-ignore
            cy.get('#btn_login').click()
        return button
    }

    logOutButton(){
        // @ts-ignore
        const button = cy.get('.logout')
        return button
    }

    myProfileButton(){
        // @ts-ignore
        const button = cy.get('.account > span')
        return button
    }

    goToWomen() {
        // @ts-ignore
        const navigation = cy.get('.sf-menu > :nth-child(1) > [href="https://e-shop.webowky.cz/3-women"]')
        navigation.click

        // @ts-ignore
        const page = new WomenPage();
        return page
    }
    goToChart(){
        // @ts-ignore
        const navigation = cy.get('[title="Zobrazit můj nákupní košík"]')
        navigation.click()
    }
    getNumberOfItemsInChartElement(){
        // @ts-ignore
        const items = cy.get('[title="Zobrazit můj nákupní košík"] > .ajax_cart_quantity')
        return items
    }




}
// @ts-ignore
export default HomePage
