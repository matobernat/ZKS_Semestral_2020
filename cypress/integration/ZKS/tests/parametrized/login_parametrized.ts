
// tslint:disable-next-line: no-var-requires
// @ts-ignore
const testData = require("../../data/login_form.json");

// @ts-ignore
describe("Dynamically Generated Tests", () => {
    testData.forEach((testDataRow: any) => {
        const data = {
            email: testDataRow.email,
            password: testDataRow.password,
            expect: testDataRow.expect,
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
                cy.get('#opc_show_login').click()


                // @ts-ignore
                cy.get('#txt_login_email').type(data.email)

                // @ts-ignore
                cy.get('#txt_login_password').type(data.password)


                // @ts-ignore
                cy.get('#btn_login').click()

                if(data.expect == "1") {
                    // @ts-ignore
                    expect(cy.get('.logout')).to.exist
                    // @ts-ignore
                    cy.get('.logout').click()
                }
                else{

                    // @ts-ignore
                    expect(cy.get('.modal-content')).to.exist
                }
            });
        });
    });
});
