function pars(n) {
    let t = n
    let c = 0
    while (t > 0) {
        t /= 10
        c++
    }
    t = n
    while (c >= 0) {
        let num = Math.pow(10, c)
        while (t > num) {
            t -= num
        }
        c--
    }
    return t;
}

function round(n) {
    let s=0
    s=pars(n)
    let num=0
    let sin=false
    if(n<0){
        n=-n
        sin=true
        if(-pars(n)>=-0.5){
            num=n-pars(n)
        } else{
           num=n-pars(n)+1
        }
   }else  if( s===1){
    return n
   }else  if(s>=0.5){
      num=  n-pars(n)+1
    }else{
        num= n-pars(n)
    }
    if(sin){
        return -num
    }else{
        return num
    }
}

function ceil(num){
    if(num===0){
        return 0
    }
    if( num<0){
        num=-num
        return pars(num)-num
    }else{
        return num-pars(num) +1
    }
}

function floor(num){
    if( num<0){
        num=-num
       return pars(num)-num -1
    }else{
        return num-pars(num) 
    }
}
function trunc(num){
    if( num<0){
            num=-num
            return -(num-pars(num) )
    }else{
        return num-pars(num) 
    }
}