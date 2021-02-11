"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createQuestion = exports.createTask = exports.CypressQuestion = exports.CypressTask = exports.UseCypress = void 0;
/**
 * Cypress ability base class.
 */
class UseCypress {
    constructor() {
        this.cypress = cy;
    }
    /**
     * Retrieve the cypress instance.
     */
    get cy() {
        return this.cypress;
    }
}
exports.UseCypress = UseCypress;
/**
 * Private base class for cypress interactions.
 *
 * Injects `cy` from the Cypress ability.
 */
class CypressInteraction {
    /**
     * Create an interaction.
     *
     * @param actor
     *   The actor to retrieve abilities from.
     */
    constructor(actor) {
        this.actor = actor;
        this.cy = actor.ability(UseCypress).cy;
    }
}
/**
 * Base class for cypress tasks.
 */
class CypressTask extends CypressInteraction {
}
exports.CypressTask = CypressTask;
/**
 * Base class for cypress questions.
 */
class CypressQuestion extends CypressInteraction {
}
exports.CypressQuestion = CypressQuestion;
/**
 * Shorthand for creating simple cypress tasks.
 *
 * @param procedure
 *   The procedure to fulfill this task.
 */
function createTask(procedure) {
    return class extends CypressTask {
        invoke(param) {
            procedure(this.cy, param);
        }
    };
}
exports.createTask = createTask;
/**
 * Shorthand for creating simple cypress questions.
 *
 * @param procedure
 *   The procedure to answer this question.
 */
function createQuestion(procedure) {
    return class extends CypressQuestion {
        invoke(param, assert) {
            procedure(cy, param, assert);
        }
    };
}
exports.createQuestion = createQuestion;
