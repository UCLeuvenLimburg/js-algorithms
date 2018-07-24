export function count<T>(xs : Iterable<T>, predicate : (t : T) => boolean) : number
{
    let result = 0;

    for ( let x of xs )
    {
        if ( predicate(x) )
        {
            result++;
        }
    }

    return result;
}

export function range(from : number, to : number) : number[]
{
    if ( from >= to )
    {
        return new Array<number>(0);
    }
    else
    {
        const result = new Array(to - from);

        for ( let i = 0; i !== result.length; ++i )
        {
            result[i] = from + i;
        }
        
        return result;
    }
}

export function filter<T>(xs : Iterable<T>, predicate : (t : T) => boolean) : T[]
{
    const result = [];

    for ( let x of xs )
    {
        if ( predicate(x) )
        {
            result.push(x);
        }
    }

    return result;
}

export function all<T>(xs : Iterable<T>, predicate : (t : T) => boolean) : boolean
{
    for ( let x of xs )
    {
        if ( !predicate(x) )
        {
            return false;
        }
    }

    return true;
}

export function any<T>(xs : Iterable<T>, predicate : (t : T) => boolean) : boolean
{
    for ( let x of xs )
    {
        if ( predicate(x) )
        {
            return true;
        }
    }

    return false;
}