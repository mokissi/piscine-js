function triangle(n, s) {
    if (s < 1) {
      return ''
    }
    let result = ''
    for (let i = 1; i <= s; i++) {
    
      result += n.repeat(i)

      if (i < s) {
        result += '\n'
      }
    }
  
    return result;
  }
