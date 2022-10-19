
// Javascript em JSon

const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma() {
        return a + b + c
    }
}

console.log(JSON.stringify(obj))


// Json em Javascript
console.log(JSON.parse('{"a":1,"b":2,"c":3}'))
console.log(JSON.parse('{"a":1, "b":"string","c":true,"d":{},"e":[]}'))

//Site  json5.org
// jsonlint