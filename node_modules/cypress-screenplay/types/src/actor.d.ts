import { Question, Task } from '../index';
/**
 * The Actor class.
 *
 * Encapsulates the current users abilities and grants access to them.
 * Used to perform tasks using abilities given to the actor.
 */
export declare class Actor {
    /**
     * The list of abilities this actor is empowered to use.
     *
     * A list of arbitrary objects that grant access to operations.
     */
    protected abilities: object[];
    /**
     * Flag that indicates if the actor is currently preparing a task.
     *
     * Abilities can only be requested in interaction constructors.
     */
    protected preparing: boolean;
    /**
     * Retrieve an ability instance by type.
     *
     * @param type
     *   The ability class.
     */
    ability<T extends object>(type: {
        new (): T;
    }): T;
    /**
     * Actor constructor.
     *
     * @param abilities
     *   The set of abilities.
     */
    constructor(abilities?: object[]);
    /**
     * Prepare interaction.
     *
     * Accepts a list of interactions that are fit to perform a given task and
     * selects the first one that is covered by the current actors abilities.
     *
     * @param interactions
     *   A list of possible interactions.
     */
    protected prepare<T extends object>(interactions: {
        new (actor: Actor): T;
    } | {
        new (actor: Actor): T;
    }[]): T;
    /**
     * Perform a task.
     *
     * @param task
     * @param param
     */
    perform<P>(task: Task<P>, param: P): Actor;
    /**
     * Ask a question.
     *
     * @param question
     * @param param
     * @param assert
     */
    ask<P, R>(question: Question<P, R>, param: P, assert: (resp: R) => void): Actor;
}
