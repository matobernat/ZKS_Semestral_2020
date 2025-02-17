"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
let _actor = new index_1.Actor();
Cypress.Commands.add('initiateActor', (actor) => {
    _actor = actor;
});
Cypress.Commands.add('perform', (task, param = undefined) => {
    _actor.perform(task, param);
});
Cypress.Commands.add('ask', (question, param = undefined) => {
    return cy.wrap(new Cypress.Promise(resolve => {
        _actor.ask(question, param, resolve);
    }));
});
