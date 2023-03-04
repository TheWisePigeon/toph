import rules from "./rules"
import { parse_rules } from "./utils"
class Toph{
    private checkee: unknown
    private as: string

    constructor( checkee: unknown, as: string ){
        this.checkee = checkee
        this.as = as
    }

    private failure_message_parser( failure_message: string ){
        return failure_message.replace("$", this.checkee as string)
    }

    is_string(failure_message?:string){
        if( typeof this.checkee!=="string" ){
            throw Error(
                failure_message?this.failure_message_parser(failure_message):`TypeError: ${this.checkee} should be a string but is ${typeof this.checkee}`
            )
        }
        return {
            and: ( rules_string:string )=>{
                const parsed_rules = parse_rules(rules_string, "string")
                //TODO - Manage to get autocomplete here
                for( const rule of parsed_rules ){
                    rules.string
                }
            }
        }
    }


}

/**
 * 
 * @param checkee The variable that you want Toph to check
 */
function check_if( checkee: unknown, as:string ) : Toph {
    return new Toph(checkee, as)
}