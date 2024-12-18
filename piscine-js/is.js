const is = {}

is.num=(n)=> {
    if (typeof(n)==='number') {
        return true
    }
}
is.nan=(s)=> {
    if(Number.isNaN(s)) {
        return true
    }
}
is.str=(x)=> {
    if (typeof(x)==="string") {
        return true
    }
}
is.bool=(y)=> {
    if (typeof(y)==="boolean") {
        return true
    }
}
is.undef=(z)=> {
    if (typeof(z)==="undefined"){
        return true
    }
}
is.def=(k)=> {
    if (typeof(k)!=="undefined") {
        return true
    }
}
is.arr=(e)=> {
    if (Array.isArray(e)) {
        return true
    }
}
is.obj = (r) => {
    return (typeof r === "object" && r !== null && ! is.arr(r));
}
is.fun=(t)=> {
    if(typeof(t)=== "function"){
        return true
    }
}
is.truthy=(u)=> {
    if (u){
        return true
    }
}
is.falsy=(i)=> {
    if (!i) {
        return true
    }
    
}
