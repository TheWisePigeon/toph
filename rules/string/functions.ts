import { TophError } from "../../utils";

export function is_not_empty(checkee: unknown, as:string, _rule:string){
    if( "" ===checkee as string ){
        let error_message = `BadRequest: ${as} should be a non empty string but is empty`
        throw new TophError(error_message)
    }
    return true
}

export function contains( checkee: unknown, as:string, rule:string ){
    if(rule.split(":").length<2){
        return false
    }
    const value_to_contain = rule.split(":")[1] as string
    if(value_to_contain.startsWith("'")&&value_to_contain.endsWith("'")){
        if(!(checkee as string).includes(value_to_contain.slice(1,-1))){
            let error_message = `${as} should contain ${value_to_contain} but does not`
            throw new TophError(error_message)
        }
    }
    return true
}

export function starts_with(checkee: string, as:string, rule:string){
    if(rule.split(":").length<2){
        return false
    }
    const value_to_contain = rule.split(":")[1] as string
    

}

export function ends_with(checkee: unknown, as:string, rule:string){

}

export function length(checkee: unknown, as:string, _rule:string){

}

export function is_valid_email(checkee: unknown, as:string, _rule:string){

}