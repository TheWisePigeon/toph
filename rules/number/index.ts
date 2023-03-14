import type { Rule } from "../../app"
import {
  is_integer
} from "./functions"


const number_rules: Rule[] = [
  {
    name:"is_integer",
    nature:"basic",
    applies_on:"number",
    func:is_integer
  }
]

export default number_rules