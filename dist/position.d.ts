import { Direction } from "./direction";
export declare class Position {
    readonly x: number;
    readonly y: number;
    constructor(x: number, y: number);
    add(direction: Direction): Position;
    readonly around4: Position[];
    readonly around8: Position[];
    touches4(p: Position): boolean;
    touches8(p: Position): boolean;
}
