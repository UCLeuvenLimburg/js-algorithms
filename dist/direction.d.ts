export declare class Direction {
    readonly dx: number;
    readonly dy: number;
    constructor(dx: number, dy: number);
    rotateCW(): Direction;
    rotateCCW(): Direction;
    readonly angleInDegrees: number;
}
