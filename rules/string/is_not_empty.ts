import { TophError } from "../../utils";

export default function is_not_empty(checkee: unknown, as:string): boolean{
    if( "" !==checkee as string ){
        let error_message = `BadRequest: ${as} should be a non empty string but is empty`
        throw new TophError(error_message)
    }
    return true
}