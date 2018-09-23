import { expect } from 'chai';
import { lastIndexOf } from '../src/algorithms';


describe('firstIndexOf', () => {
    it(`should return nothing if the array is empty`, () => {
        const result = lastIndexOf([], _ => true);

        expect(result.isJust()).to.be.false;
    });

    it(`should return nothing if no element satisfies the predicate`, () => {
        const result = lastIndexOf([1, 2], _ => false);

        expect(result.isJust()).to.be.false;
    });

    it(`should return the last index if the first element satisfies the predicate`, () => {
        const result = lastIndexOf([1, 2, 3], _ => true);

        if ( result.isJust() )
        {
            expect(result.value).to.be.equal(2);
        }
        else
        {
            expect.fail();
        }
    });
});
