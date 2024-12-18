function mult2(x) {
    return function(y) {
        return x*y
    }
}
function add3(x) {
        return function(z) {
            return function(y) {
                return x + z + y

            }
        }
    }
function sub4(x) {
    return function(a) {
        return function(b){
            return function(c) {
                return x-a-b-c
            }
        }
    }
}
