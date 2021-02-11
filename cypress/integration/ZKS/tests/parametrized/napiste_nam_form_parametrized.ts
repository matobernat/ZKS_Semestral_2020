
// tslint:disable-next-line: no-var-requires
// @ts-ignore
const testData = require("../../data/napiste_nam_form.json");

// @ts-ignore
describe("Dynamically Generated Tests", () => {
    testData.forEach((testDataRow: any) => {
        const data = {
            predmet: testDataRow.predmet,
            email: testDataRow.email,
            objednavka: testDataRow.objednavka,
            popis: testDataRow.popis
        };

        // @ts-ignore
        context(`Generating a test for ${data.username}`, () => {
            // @ts-ignore
            it("should fail to login for the specified details", () => {
                // @ts-ignore
                cy.visit('https://e-shop.webowky.cz/')
                // @ts-ignore
                cy.get('.toggle-footer > :nth-child(5) > a').click()



                if (data.predmet != "-Vyberte-"){
                    // @ts-ignore
                    cy.get('#id_contact').select(data.predmet)
                }

                // @ts-ignore
                cy.get('#email').type(data.email)


                // @ts-ignore
                cy.get('#id_order').type(data.objednavka)

                if(data.popis == "true"){
                    // @ts-ignore
                    cy.get('#message').type("dobry den produkt mi este neprisiel")
                }

                // @ts-ignore
                cy.get('#submitMessage > span').click()


                if (data.popis == "false" ||
                    data.predmet == "-Vyberte-" ||
                    data.email != "matohrasko@gmail.com"){
                    // @ts-ignore
                    expect(cy.get('.alert')).to.exist
                }
            });
        });
    });
});
