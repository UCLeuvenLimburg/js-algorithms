import { Maybe } from 'maybe';
export declare function count<T>(xs: Iterable<T>, predicate: (t: T) => boolean): number;
export declare function range(from: number, to: number): number[];
export declare function filter<T>(xs: Iterable<T>, predicate: (t: T) => boolean): T[];
export declare function all<T>(xs: Iterable<T>, predicate: (t: T) => boolean): boolean;
export declare function any<T>(xs: Iterable<T>, predicate: (t: T) => boolean): boolean;
export declare function find<T>(xs: Iterable<T>, predicate: (t: T) => boolean): Maybe<T>;
export declare function minimumBy<T>(xs: Iterable<T>, f: (t: T) => number): Maybe<T>;
export declare function maximumBy<T>(xs: Iterable<T>, f: (t: T) => number): Maybe<T>;
