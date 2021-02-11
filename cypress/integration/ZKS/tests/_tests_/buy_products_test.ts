context("Testing user puchasing items", ()=>{

    const email = 'matohrasko@gmail.com'
    const password = 'mamam'
    const nickname = 'Martin Hrasko'

    beforeEach(()=>{

        // @ts-ignore
        cy.visit('https://e-shop.webowky.cz/')
        // @ts-ignore
        cy.get('.login').click()
        // @ts-ignore
        cy.get('#opc_show_login').click()

        // @ts-ignore
        cy.get('#txt_login_email').type(email)

        // @ts-ignore
        cy.get('#txt_login_password').type(password)
        // @ts-ignore
        cy.get('#btn_login').click()
        cy.wait(500)
        cy.get('.sf-menu > :nth-child(1) > [href="https://e-shop.webowky.cz/3-women"]')
            .click()
        cy.wait(500)


    });

    it("should be logged in", ()=>{
        // @ts-ignore
        expect(cy.get('.logout')).to.exist
        cy.get('.account > span')
            .should('exist')
            .contains(nickname);
    });


    it("should be in women sortiment", ()=>{
        cy.get('.cat-name').should('exist').contains("Women")

    });

    describe("puchasing products", ()=>{


        it("should have 1 shirt in basket", ()=>{

            cy.get(':nth-child(1) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button')
                .click({ force: true })
            cy.wait(500)
            cy.get('.continue > span')
                .click()
            cy.get('[title="Zobrazit můj nákupní košík"] > .ajax_cart_quantity').should('contain', '1')
        });


        it("should be in order form", ()=>{
            cy.get(':nth-child(1) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button')
                .click({ force: true })
            cy.wait(500)
            cy.get('.button-container > .button-medium > span')
                .click()
            cy.get('h2').should('exist').contains('Rychlá objednávka')
        });


        // it("should get no adress alert", ()=>{
        //     cy.get(':nth-child(1) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button')
        //         .click({ force: true })
        //     cy.wait(500)
        //     cy.get('.button-container > .button-medium > span')
        //         .click()
        //     cy.wait(500)
        //
        //     cy.get('#module_payment_30_0').click()
        //     cy.get('#btn_place_order').click()
        //
        //     cy.get('.modal-header')
        //         .should('exist')
        //         .contains('It is necessary to add a delivery address in order to finalize the purchase.')
        // });

        it("adress should exist", ()=>{
            cy.get(':nth-child(1) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button')
                .click({ force: true })
            cy.wait(500)
            cy.get('.button-container > .button-medium > span')
                .click()

            cy.get('#address_card_437 > .container_card').should('exist')

        });

        it("should get payment alert", ()=>{
            cy.get(':nth-child(1) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button')
                .click({ force: true })
            cy.wait(500)
            cy.get('.button-container > .button-medium > span')
                .click()
            cy.wait(500)

            cy.get('#btn_place_order').click()
            cy.get('.modal-header')
                 .should('exist')
                 .contains('Prosím zvolte metodu platby.')
        });


        it("should get confirm alert", ()=>{
            cy.get(':nth-child(1) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button')
                .click({ force: true })
            cy.wait(500)
            cy.get('.button-container > .button-medium > span')
                .click()
            cy.wait(500)

            cy.get('#btn_place_order').click()
            cy.get('.modal-header')
                .should('exist')
                .contains('Prosím zvolte metodu platby.')
            cy.get('.close > .fa-pts').click()

            cy.get('#module_payment_86_0').click()
            cy.get('#btn_place_order').click()

            cy.get('#payment_modal > .modal-dialog > .modal-content > .modal-header > .panel-title')
                .should('exist')
                .contains('Potvrzení platby')
        });

        it("should get succesful order message", ()=>{
            cy.get(':nth-child(1) > .product-container > .right-block > .button-container > .ajax_add_to_cart_button')
                .click({ force: true })
            cy.wait(500)
            cy.get('.button-container > .button-medium > span')
                .click()
            cy.wait(500)

            cy.get('#btn_place_order').click()
            cy.get('.modal-header')
                .should('exist')
                .contains('Prosím zvolte metodu platby.')
            cy.get('.close > .fa-pts').click()

            cy.get('#module_payment_86_0').click()
            cy.get('#btn_place_order').click()

            cy.get('#payment_modal > .modal-dialog > .modal-content > .modal-header > .panel-title')
                .should('exist')
                .contains('Potvrzení platby')
            cy.get('#cart_navigation > .button').click()

            cy.get('.box > p').should('exist').contains('Vaše objednávka v obchodě Webowky.cz - DEMO eshop byla úspěšně dokončena')
        });



        afterEach(()=>{
            cy.get('.logout').click({force:true})
        });
    });

});
