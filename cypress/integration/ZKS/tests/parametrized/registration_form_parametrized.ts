
// tslint:disable-next-line: no-var-requires
// @ts-ignore
const testData = require("../../data/registration_form.json");

// @ts-ignore
describe("Dynamically Generated Tests", () => {
    testData.forEach((testDataRow: any) => {
        const data = {
            firstname: testDataRow.meno,
            lastname: testDataRow.priezvisko,
            email: testDataRow.email,
            emailconfirm: testDataRow.potvrd_email,
            password: testDataRow.heslo,
            passwordconfirm: testDataRow.potvrd_heslo,
            answer: testDataRow.expect,

        };

        // @ts-ignore
        context(`Generating a test for ${data.email}`, () => {
            // @ts-ignore
            it("should fail to login for the specified details", () => {
                // @ts-ignore
                cy.visit('https://e-shop.webowky.cz/')
                // @ts-ignore
                cy.get('.login').click()
                // @ts-ignore
                cy.get('#checkbox_create_account').click()


                if (data.firstname != ""){
                    // @ts-ignore
                    cy.get('#customer_firstname').type(data.firstname)
                }
                if (data.lastname != ""){
                    // @ts-ignore
                    cy.get('#customer_lastname').type(data.lastname)
                }
                // @ts-ignore
                cy.get('#customer_email').type(data.email)

                if (data.emailconfirm == "true"){
                    // @ts-ignore
                    cy.get('#customer_conf_email').type(data.email)
                }
                else {
                    // @ts-ignore
                    cy.get('#customer_conf_email').type(data.email+'a')
                }

                if (data.email == "matohrasko@gmail.com"){
                    // @ts-ignore
                    cy.get('.modal-body')
                        .should('have.text', 'Tento email je již zaregistrován.')
                    // @ts-ignore
                    cy.get('.modal-footer > .btn-default').click()
                }

                // @ts-ignore
                cy.get('#customer_passwd').type(data.password)

                if(data.passwordconfirm == "true"){
                    // @ts-ignore
                    cy.get('#customer_conf_passwd').type(data.password)
                }
                else{
                    // @ts-ignore
                    cy.get('#customer_conf_passwd').type(data.password+'a')
                }




                // @ts-ignore
                cy.get('#btn_save_customer').click()

                // @ts-ignore
                expect(cy.get('#btn_save_customer')).to.exist



            });
        });
    });
});
