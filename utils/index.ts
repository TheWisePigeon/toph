import { Rule } from "../app";
import rules from "../rules";

export function parse_rules( rules_string:string, applies_on:"string"|"number"|"boolean" ){
    const rules_names = (rules[`${applies_on}`] as Rule[]).map(rule=>rule.name)
    return rules_string.split(" ").filter(rule=>{
        return (rules_names.includes(rule.split(":")[0]!))
    })
}

export class TophError extends Error{
    constructor(message:string){
        super(message)
        this.name = "TophValidationError"
        this.stack = undefined
    }
}