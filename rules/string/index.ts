import type { Rule } from "../../app";
import { 
    is_not_empty, contains, starts_with, ends_with, length, is_valid_email
} from "./functions";

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
    }
]
export default string_rules