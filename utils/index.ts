import { Rule } from "../app";
import rules from "../rules";

export function parse_rules( rules_string:string, applies_on:"string"|"number"|"boolean" ){
    const rules_names = (rules[`${applies_on}`] as Rule[]).map(rule=>rule.name)
    return rules_string.split(" ").filter(rule=>rules_names.includes(rule))
}