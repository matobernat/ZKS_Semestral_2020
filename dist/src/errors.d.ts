/**
 * Exception thrown if an interaction requests an unsupported actor ability..
 *
 * Used internally to find supported interactions.
 */
export declare class MissingAbilityError extends Error {
}
/**
 * Thrown if an ability is requested outside of an interaction constructor.
 */
export declare class AbilityRequestError extends Error {
    constructor();
}
export declare class UnsupportedTaskError<T> extends Error {
    constructor(interactions: string[]);
}
