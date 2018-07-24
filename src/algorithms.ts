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