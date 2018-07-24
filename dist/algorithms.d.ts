export declare function count<T>(xs: Iterable<T>, predicate: (t: T) => boolean): number;
export declare function range(from: number, to: number): number[];
export declare function filter<T>(xs: Iterable<T>, predicate: (t: T) => boolean): T[];
export declare function all<T>(xs: Iterable<T>, predicate: (t: T) => boolean): boolean;
export declare function any<T>(xs: Iterable<T>, predicate: (t: T) => boolean): boolean;
