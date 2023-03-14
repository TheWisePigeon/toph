import { Rule } from "./app"
import rules from "./rules"
import { parse_rules, TophError } from "./utils"
class Toph{
    private checkee: unknown
    private as: string

    constructor( checkee: unknown, as: string ){
        this.checkee = checkee
        this.as = as
    }

    private failure_message_parser( failure_message: string){
        return failure_message.replace("$", this.as as string)
    }

    is_string(failure_message?:string){
        if( typeof this.checkee!=="string" ){
            throw new TophError(
                failure_message?this.failure_message_parser(failure_message):`TypeError: ${this.checkee} should be a string but is of type ${typeof this.checkee}`
            )
        }
        return {
            and: ( rules_string:string )=>{
                const parsed_rules = parse_rules(rules_string, "string")
                const string_rules = rules["string"] as Rule[]
                //TODO - Manage to get autocomplete here
                for( const parsed_rule of parsed_rules ){
                    const found_rule = string_rules.find(rule=>parsed_rule.split(":")[0]===rule.name) as Rule
                    found_rule.func( this.checkee, this.as, parsed_rule )
                }
            }
        }
    }

    is_number( failure_message: string ){
        if(typeof this.checkee!=="number"){
            throw new TophError(
                failure_message?this.failure_message_parser(failure_message):`TypeError: ${this.checkee} should be a number but is of type ${typeof this.checkee}`
            )
        }
        return {
            and: (rules_string:string)=>{
                const parsed_rules = parse_rules(rules_string, "number")
                const number_rules = rules["number"] as Rule[]
                 for( const parsed_rule of parsed_rules ){
                    const found_rule = number_rules.find(rule=>parsed_rule.split(":")[0]===rule.name) as Rule
                    found_rule.func( this.checkee, this.as, parsed_rule )
                }               
            }
        }
    }

    is_boolean(failure_message: string){
        if(typeof this.checkee!=="boolean"){
            throw new TophError(
                failure_message?this.failure_message_parser(failure_message):`TypeError: ${this.checkee} should be a boolean but is of type ${typeof this.checkee}`
            )
        }
    }

}

/**
 * 
 * @param checkee The variable that you want Toph to check
 */
export function check_if( checkee: unknown, as:string ) : Toph {
    return new Toph(checkee, as)
}
