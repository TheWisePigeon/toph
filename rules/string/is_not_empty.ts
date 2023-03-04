export default function is_not_empty(checkee: unknown, as:string): boolean{
    if( "" !==checkee as string ){
        throw new Error(`BadRequest: ${as} should be a non empty string but is empty`);   
    }
    return true
}