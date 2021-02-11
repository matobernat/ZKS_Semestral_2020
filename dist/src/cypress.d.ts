/// <reference types="cypress" />
import { Actor } from './actor';
import { TaskInteraction } from './task';
import { QuestionInteraction } from '../index';
/**
 * Cypress ability base class.
 */
export declare class UseCypress {
    /**
     * A cypress instance.
     */
    protected cypress: Cypress.Chainable;
    constructor();
    /**
     * Retrieve the cypress instance.
     */
    get cy(): Cypress.Chainable<any>;
}
/**
 * Private base class for cypress interactions.
 *
 * Injects `cy` from the Cypress ability.
 */
declare class CypressInteraction {
    /**
     * A cypress instance to invoke commands on.
     */
    cy: Cypress.Chainable;
    /**
     * An actor to perform sub-tasks.
     */
    actor: Actor;
    /**
     * Create an interaction.
     *
     * @param actor
     *   The actor to retrieve abilities from.
     */
    constructor(actor: Actor);
}
/**
 * Base class for cypress tasks.
 */
export declare abstract class CypressTask<P> extends CypressInteraction implements TaskInteraction<P> {
    abstract invoke(param: P): void;
}
/**
 * Base class for cypress questions.
 */
export declare abstract class CypressQuestion<P, R> extends CypressInteraction implements QuestionInteraction<P, R> {
    abstract invoke(param: P, assert: (answer: R) => void): void;
}
/**
 * Shorthand for creating simple cypress tasks.
 *
 * @param procedure
 *   The procedure to fulfill this task.
 */
export declare function createTask<P>(procedure: (cy: Cypress.Chainable, param: P) => void): {
    new (actor: Actor): {
        invoke(param: P): void;
        /**
         * A cypress instance to invoke commands on.
         */
        cy: Cypress.Chainable<any>;
        /**
         * An actor to perform sub-tasks.
         */
        actor: Actor;
    };
};
/**
 * Shorthand for creating simple cypress questions.
 *
 * @param procedure
 *   The procedure to answer this question.
 */
export declare function createQuestion<P, R>(procedure: (cy: Cypress.Chainable, param: P, assert: (answer: R) => void) => void): {
    new (actor: Actor): {
        invoke(param: P, assert: (answer: R) => void): void;
        /**
         * A cypress instance to invoke commands on.
         */
        cy: Cypress.Chainable<any>;
        /**
         * An actor to perform sub-tasks.
         */
        actor: Actor;
    };
};
export {};
