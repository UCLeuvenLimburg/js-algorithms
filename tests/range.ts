import { expect } from 'chai';
import { range } from '../src/algorithms';


describe('range', () => {
    it('returns a to b (exclusive) as an array', () => {
        expect( range(4, 7) ).to.be.deep.equal( [4, 5, 6] );
    });

    it('returns an empty list if a == b', () => {
        expect( range(5, 5) ).to.be.deep.equal( [] );
    });

    it('returns an empty list if a > b', () => {
        expect( range(4, 1) ).to.be.deep.equal( [] );
    });
});
