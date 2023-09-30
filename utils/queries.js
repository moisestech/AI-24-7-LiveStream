export const QueryModulesInner = `
_type == "moduleImage" => {
    ...,
    link->
},  
_type == "moduleStatement" => {
    ...,
    link->
},    
_type == "module5050" => {
    ...,
    link->
},       
`

export const QueryModules = `
modules[] {
    ...,
    ${QueryModulesInner}
}
`
