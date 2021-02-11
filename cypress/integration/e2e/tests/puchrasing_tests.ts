
import HomePage from "../PageObjects/HomePage";

// @ts-ignore
describe('Sign In', () => {
    // @ts-ignore
    it('should show logout button', () => {
        const home = new HomePage();
        const email = "matohrasko@gmail.com"
        const password = "mamam"
        const nick = "Martin Hrasko"
        home.visit()


        home.SingIn()

        home.alreadyRegistered()

        home.fillEmail(email)

        home.fillPassword(password)

        home.login()

        home.logOutButton()
            .should('exist')
    });

    // @ts-ignore
    it('should show my name on page', () => {
        const home = new HomePage();
        const email = "matohrasko@gmail.com"
        const password = "mamam"
        const nick = "Martin Hrasko"
        home.visit()


        home.SingIn()

        home.alreadyRegistered()

        home.fillEmail(email)

        home.fillPassword(password)

        home.login()


        home.myProfileButton()
            .should('exist')
            .contains(nick);
    });

    // more tests
});


// @ts-ignore
describe('Woman Page - order 12 products', () => {

    // @ts-ignore
    it('should see 12 items in chart', () => {
        const home = new HomePage();
        const email = "matohrasko@gmail.com"
        const password = "mamam"
        const nick = "Martin Hrasko"
        home.visit()


        home.SingIn()

        home.alreadyRegistered()

        home.fillEmail(email)

        home.fillPassword(password)

        home.login()


        const womenPage = home.goToWomen()
        womenPage.addFirstToChart()
        womenPage.addSecondToChart()
        womenPage.showSecond()
        womenPage.addNtochart(10)

        // @ts-ignore
        home.getNumberOfItemsInChartElement().should('contain', '12')
    });

    // more tests
});
