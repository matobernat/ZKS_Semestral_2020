"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actor = void 0;
const index_1 = require("../index");
const errors_1 = require("./errors");
/**
 * The Actor class.
 *
 * Encapsulates the current users abilities and grants access to them.
 * Used to perform tasks using abilities given to the actor.
 */
class Actor {
    /**
     * Actor constructor.
     *
     * @param abilities
     *   The set of abilities.
     */
    constructor(abilities) {
        /**
         * Flag that indicates if the actor is currently preparing a task.
         *
         * Abilities can only be requested in interaction constructors.
         */
        this.preparing = false;
        this.abilities = abilities || [new index_1.UseCypress()];
    }
    /**
     * Retrieve an ability instance by type.
     *
     * @param type
     *   The ability class.
     */
    ability(type) {
        // If the actor is not preparing, this method is misused.
        if (!this.preparing) {
            throw new errors_1.AbilityRequestError();
        }
        // Search for the first matching ability.
        const ability = this.abilities
            .filter((ability) => ability.constructor.name === type.prototype.constructor.name)
            .shift();
        // If no ability is found, throw an exception.
        if (!ability) {
            throw new errors_1.MissingAbilityError();
        }
        return ability;
    }
    /**
     * Prepare interaction.
     *
     * Accepts a list of interactions that are fit to perform a given task and
     * selects the first one that is covered by the current actors abilities.
     *
     * @param interactions
     *   A list of possible interactions.
     */
    prepare(interactions) {
        // Try to create an instance of all interactions.
        this.preparing = true;
        const executor = (interactions instanceof Array
            ? interactions
            : [interactions])
            .map(interaction => {
            try {
                return new interaction(this);
            }
            catch (err) {
                // If the constructor threw a MissingAbilityError, this interaction is
                // no supported by the actor, so we skip it.
                if (err instanceof errors_1.MissingAbilityError) {
                    return null;
                }
                // All other errors are passed outside.
                throw err;
            }
        })
            .filter(executor => executor !== null)
            .shift();
        this.preparing = false;
        if (executor === undefined || executor === null) {
            // If there was no matching interaction, raise an exception to indicate that
            // this task is not supported by the current actor.
            throw new errors_1.UnsupportedTaskError((interactions instanceof Array ? interactions : [interactions]).map(interaction => interaction.prototype.constructor.name));
        }
        return executor;
    }
    /**
     * Perform a task.
     *
     * @param task
     * @param param
     */
    perform(task, param) {
        this.prepare(task).invoke(param);
        return this;
    }
    /**
     * Ask a question.
     *
     * @param question
     * @param param
     * @param assert
     */
    ask(question, param, assert) {
        this.prepare(question).invoke(param, assert);
        return this;
    }
}
exports.Actor = Actor;
