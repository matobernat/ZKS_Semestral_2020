"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
const chai_1 = require("chai");
const sinon_1 = require("sinon");
class WorthlessAbility {
}
describe('Task', () => {
    const a = sinon_1.stub();
    const b = sinon_1.stub();
    beforeEach(() => {
        a.reset();
        b.reset();
    });
    class UseA {
        a() {
            a();
        }
    }
    class UseB {
        b() {
            b();
        }
    }
    class UseAInteraction {
        constructor(actor) {
            this.useA = actor.ability(UseA);
        }
        invoke() {
            this.useA.a();
        }
    }
    class UseBInteraction {
        constructor(actor) {
            this.useB = actor.ability(UseB);
        }
        invoke() {
            this.useB.b();
        }
    }
    const MyTask = [UseAInteraction, UseBInteraction];
    class MetaInteraction {
        constructor(actor) {
            this.actor = actor;
        }
        invoke() {
            this.actor.perform(MyTask, undefined);
        }
    }
    it('executes an interaction to fulfill a task', () => {
        const actor = new index_1.Actor([new UseA()]);
        actor.perform(MyTask, undefined);
        chai_1.expect(a.callCount).to.equal(1);
        chai_1.expect(b.callCount).to.equal(0);
    });
    it('allows tasks to call other tasks', () => {
        const actor = new index_1.Actor([new UseA()]);
        actor.perform([MetaInteraction], undefined);
        chai_1.expect(a.callCount).to.equal(1);
    });
    it('raises an exception if there is no supported interaction', () => {
        const actor = new index_1.Actor([new WorthlessAbility()]);
        chai_1.expect(() => {
            actor.perform(MyTask, undefined);
        }).to.throw(index_1.UnsupportedTaskError);
    });
    it('uses the first supported interaction', () => {
        const actor = new index_1.Actor([new UseB()]);
        actor.perform(MyTask, undefined);
        chai_1.expect(a.callCount).to.equal(0);
        chai_1.expect(b.callCount).to.equal(1);
    });
});
describe('Question', () => {
    class UseUpperCase {
        toUpperCase(value) {
            return value.toUpperCase();
        }
    }
    class Transform {
        constructor(actor) {
            this.upperCase = actor.ability(UseUpperCase);
        }
        invoke(param, assert) {
            assert(this.upperCase.toUpperCase(param));
        }
    }
    it('executes an interaction to answer a question', () => {
        const actor = new index_1.Actor([new UseUpperCase()]);
        actor.ask(Transform, 'Foo', res => {
            chai_1.expect(res).to.equal('FOO');
        });
    });
});
