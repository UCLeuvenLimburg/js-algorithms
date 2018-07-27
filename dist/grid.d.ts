import { Position } from './position';
import { Direction } from './direction';
export declare abstract class Grid<T> {
    abstract at(position: Position): T;
    abstract readonly width: number;
    abstract readonly height: number;
    row(rowIndex: number): T[];
    column(columnIndex: number): T[];
    private generatePositions;
    readonly positions: Iterable<Position>;
    isInside(position: Position): boolean;
    toColumnArray(): T[][];
    toRowArray(): T[][];
    findPositions(predicate: (t: T) => boolean): Position[];
    map<U>(f: (t: T) => U): Grid<U>;
    vmap<U>(f: (t: T) => U): Grid<U>;
    equal<U>(grid: Grid<U>, comparer: (t: T, u: U) => boolean): boolean;
    around4(position: Position): Position[];
    around8(position: Position): Position[];
    iterator(position: Position, direction: Direction): IGridIterator<T>;
    rowIterator(rowIndex: number): IGridIterator<T>;
    columnIterator(columnIndex: number): IGridIterator<T>;
}
export interface IGridIterator<T> {
    readonly endReached: boolean;
    readonly pointee: T;
    next(): void;
    position: Position;
}
export declare function createGrid<T>(width: number, height: number, initializer: (position: Position) => T): Grid<T>;
