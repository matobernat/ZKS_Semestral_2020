// @ts-ignore
import {readListItems, visitTestPage} from "../support"

// @ts-ignore
describe('Screenplay', () => {
    // @ts-ignore
    it('executes tasks and questions', () => {
        // @ts-ignore
        cy.perform(visitTestPage, 'test.html');
        // @ts-ignore
        cy.ask(readListItems)
            .should('contain', 'A')
            .should('contain', 'B')
            .should('contain', 'C')
    });
});
