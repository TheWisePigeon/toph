import type { Rule } from "../../app";
import is_not_empty from "./is_not_empty";

const string_rules: Rule[] = [
    {
        name:"is_not_empty",
        nature:"basic",
        applies_on:"string",
        func: is_not_empty
    }
]
export default string_rules