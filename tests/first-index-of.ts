import { expect } from 'chai';
import { firstIndexOf } from '../src/algorithms';


describe('firstIndexOf', () => {
    it(`should return nothing if the array is empty`, () => {
        const result = firstIndexOf([], _ => true);

        expect(result.isJust()).to.be.false;
    });

    it(`should return nothing if no element satisfies the predicate`, () => {
        const result = firstIndexOf([1, 2], _ => false);

        expect(result.isJust()).to.be.false;
    });

    it(`should return 0 if the first element satisfies the predicate`, () => {
        const result = firstIndexOf([1, 2, 3], _ => true);

        if ( result.isJust() )
        {
            expect(result.value).to.be.equal(0);
        }
        else
        {
            expect.fail();
        }
    });
});
