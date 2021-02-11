
class WomenPage {
    // @ts-ignore
    constructor(page) {
        // @ts-ignore
        const home = page
    }


    private continueShopping(){
    // @ts-ignore
    const button = cy.get('.continue > span')
        button.click()

    }
    private addToChart(){
        // @ts-ignore
        const button = cy.get('.exclusive > span')
        button.click()
    }


    addFirstToChart() {
        // @ts-ignore
        const button = cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .ajax_add_to_cart_button')
        button.click()
        // @ts-ignore
        cy.wait(500)
        this.continueShopping()
        // @ts-ignore
        cy.wait(500)
    }

    // @ts-ignore
    addSecondToChart() {
        // @ts-ignore
        const button = cy.get('#homefeatured > :nth-child(2) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button')
        button.click()
        // @ts-ignore
        cy.wait(500)
        this.continueShopping()
        // @ts-ignore
        cy.wait(500)
    }

    showFirst() {
        // @ts-ignore
        const button = cy.get('#homefeatured > .first-in-line.first-item-of-tablet-line > .product-container > .right-block > .button-container > .lnk_view > span')
        button.click()
        // @ts-ignore
        cy.wait(500)
    }

    // @ts-ignore
    showSecond() {
        // @ts-ignore
        const button = cy.get('#homefeatured > :nth-child(2) > .product-container > .right-block > .button-container > .lnk_view > span')
        button.click()
        // @ts-ignore
        cy.wait(500)
    }
    // @ts-ignore
    addNtochart(number){
        // @ts-ignore
        const field = cy.get('#quantity_wanted')
        field.clear()
        field.type(number)

        // @ts-ignore
        cy.wait(500)
        this.addToChart()
        this.continueShopping()
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


}

// @ts-ignore
export default WomenPage;
