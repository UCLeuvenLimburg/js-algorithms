export class Direction2D
{
    constructor(public readonly dx : number, public readonly dy : number) { }

    public rotateCW() : Direction2D
    {
        return new Direction2D(this.dy, -this.dx);
    }

    public rotateCCW() : Direction2D
    {
        return new Direction2D(-this.dy, this.dx);
    }

    public get angleInDegrees() : number
    {
        return Math.atan2(this.dy, this.dx) * 180 / Math.PI;
    }
}
