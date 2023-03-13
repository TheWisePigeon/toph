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
        return true
    }
    return false
}

export function starts_with(checkee: unknown, as:string, rule:string){
    if(rule.split(":").length<2){
        return false
    }
    const value_to_contain = rule.split(":")[1] as string
    if(value_to_contain.startsWith("'")&&value_to_contain.endsWith("'")){
        if(!(checkee as string).startsWith(value_to_contain.slice(1, -1))){
            let error_message  =`${as} should start with ${value_to_contain} but does not`
            throw new TophError(error_message)
        }
        return true
    }
    return false
    

}

export function ends_with(checkee: unknown, as:string, rule:string){
    if(rule.split(":").length<2){
        return false
    }
    const value_to_contain = rule.split(":")[1] as string
    if(value_to_contain.startsWith("'")&&value_to_contain.endsWith("'")){
        if(!(checkee as string).endsWith(value_to_contain.slice(1, -1))){
            let error_message  =`${as} should end with ${value_to_contain} but does not`
            throw new TophError(error_message)
        }
        return true
    }
    return false
}

export function length(checkee: unknown, as:string, rule:string){
    const splitted = rule.split(":")    
    switch(splitted.length){
        case 2:
            const length_value = splitted[1] as string
            if(Number.isInteger(length_value)){
                if((checkee as string).length!==Number(length_value)){
                    let error_message = `${as} should be ${length_value} characters long`
                    throw new TophError(error_message)
                }
            }
            return false
        
    }   
}

// export function is_valid_email(checkee: unknown, as:string, _rule:string){

// }