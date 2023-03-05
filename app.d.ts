
export type Rule = {
    name:string
    nature: "basic" | "complex"
    applies_on: "string" | "number" | "boolean"
    func: ( checkee:unknown, as:string, rule:string )=>boolean
}
