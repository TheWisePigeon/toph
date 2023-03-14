import { Rule } from "../app";
import string_rules from "./string";
import number_rules from "./number"


const rules: Record<string, Rule[]> = {
    "string": string_rules,
    "number": number_rules

}

export default rules