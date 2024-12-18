function pyramid(s, num) {
  let res = ""
  let sep = " ".repeat(s.length)
  let str = num - 1
  let end = num

  for (let i = 1; i <= num; i++) {
      for (let j = 1; j < (num * 2); j++) {
          if (j <= str) {
              res += sep
          } else if (j > str && j<=end) {
              res += s
          } else {
              break
          }
      }
      str--
      end++
      if (i < num) {
          res += "\n"
      }
  }
  return res
}

