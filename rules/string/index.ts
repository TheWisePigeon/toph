import type { Rule } from "../../app";
import { 
    is_not_empty, contains, starts_with, ends_with, length } from "./functions";

const string_rules: Rule[] = [
    {
        name:"is_not_empty",
        nature:"basic",
        applies_on:"string",
        func: is_not_empty
    },
    {
        name:"contains",
        nature:"complex",
        applies_on:"string",
        func: contains
    },
    {
        name:"starts_with",
        nature:"complex",
        applies_on:"string",
        func: starts_with
    },
    {
        name:"ends_with",
        nature:"complex",
        applies_on:"string",
        func:ends_with
    }
]
export default string_rules