function calc(x,y,operand){
    if (operand==="+"){
        return`${x}+${y}=${x+y}`
    }else if(operand==="-"){
        return`${x-y}`
    }else if(operand==="*"){
        return`${x*y}`

    }else if(operand==="/"){
        return`${x/y}`
    }
    else {
        return `false`
}
}
console.log(calc(40,20,"/"));