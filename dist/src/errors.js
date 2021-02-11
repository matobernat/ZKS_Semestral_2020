"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnsupportedTaskError = exports.AbilityRequestError = exports.MissingAbilityError = void 0;
/**
 * Exception thrown if an interaction requests an unsupported actor ability..
 *
 * Used internally to find supported interactions.
 */
class MissingAbilityError extends Error {
}
exports.MissingAbilityError = MissingAbilityError;
/**
 * Thrown if an ability is requested outside of an interaction constructor.
 */
class AbilityRequestError extends Error {
    constructor() {
        super(`Abilities may only be requested in interaction constructors.`);
    }
}
exports.AbilityRequestError = AbilityRequestError;
/*
 * Exception thrown when no interaction of a task matches the actors abilities.
 */
class UnsupportedTaskError extends Error {
    constructor(interactions) {
        super(`None of the interaction options is supported by the current actor: ${interactions}`);
    }
}
exports.UnsupportedTaskError = UnsupportedTaskError;
