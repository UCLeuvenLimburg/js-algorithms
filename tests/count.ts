import { expect } from 'chai';
import { count } from '../src/algorithms';


describe('count', () => {
    it('returns the number of items in an array satisfying the predicate', () => {
        const xs = [1, 2, 3, 4, 5];

        expect( count(xs, x => x % 2 === 0) ).to.be.equal(2);
    });

    it('returns 0 when given an empty array', () => {
        const xs : number[] = [];

        expect( count(xs, _ => true) ).to.be.equal(0);
    });

    it('returns 0 when given a predicate returning false', () => {
        const xs = [1, 2, 3, 4, 5];

        expect( count(xs, _ => false) ).to.be.equal(0);
    });
});
