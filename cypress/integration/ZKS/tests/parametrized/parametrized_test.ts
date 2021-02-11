
// tslint:disable-next-line: no-var-requires
// @ts-ignore
const testData = require("../../data/registration_form.json");
// const testData = require("../fixtures/testDataFromCSV.json");

// @ts-ignore
describe("Dynamically Generated Tests", () => {
    testData.forEach((testDataRow: any) => {
        const data = {
            username: testDataRow.username,
            password: testDataRow.password
        };

        // @ts-ignore
        context(`Generating a test for ${data.username}`, () => {
            // @ts-ignore
            it("should fail to login for the specified details", () => {
                // @ts-ignore
                cy.visit('https://e-shop.webowky.cz/')
                // @ts-ignore
                cy.get('.login').click()
                // @ts-ignore
                cy.get('#checkbox_create_account').click()

                // @ts-ignore
                cy.get('#customer_firstname').type(data.username);
                // @ts-ignore
                cy.get('#customer_lastname').type(data.username);
                // @ts-ignore
                cy.get('#customer_email').type("matobernat@gmail.com")
                // @ts-ignore
                cy.get('#customer_conf_email').type("matobernat@gmail.com")
                // @ts-ignore
                cy.get('#customer_passwd').type("matobernatcom")
                // @ts-ignore
                cy.get('#customer_conf_passwd').type("matobernatcom")

                // @ts-ignore
                cy.get('#btn_save_customer').click()

                // @ts-ignore
                cy.get('#email_check_modal')
                    .should('have.a.property', 'Tento email jiz existuje')

            });
        });
    });
});
