import { expect } from 'chai';
import { isPermutation } from '../src/algorithms';


describe('isPermutation', () => {
    function yes<T>(xs : T[], ys : T[])
    {
        it(`[${xs}] and [${ys}] are permutations of each other`, () => {
            expect( isPermutation(xs, ys) ).to.be.true;
        });
    }

    function no<T>(xs : T[], ys : T[])
    {
        it(`[${xs}] and [${ys}] are no permutations of each other`, () => {
            expect( isPermutation(xs, ys) ).to.be.false;
        });
    }

    yes([], []);
    yes([1], [1]);
    yes([1,2], [1,2]);
    yes([1,2], [2,1]);
    yes([1, 2, 3], [1, 2, 3]);
    yes([1, 2, 3], [1, 3, 2]);
    yes([1, 2, 3], [3, 2, 1]);
    yes([3, 2, 1], [3, 1, 2]);
    yes([1, 1], [1, 1]);
    yes([1, 1, 2], [1, 1, 2]);
    yes([1, 1, 2], [1, 2, 1]);
    yes([1, 1, 2], [2, 1, 1]);

    no([], [1]);
    no([1], []);
    no([1], [1, 1]);
});
