function debounce(func, wait) {
    let timeout
    
    return function executedFunction(...args) {
      let later = () => {
        clearTimeout(timeout)
        func(...args)
      }
  
      clearTimeout(timeout);
      timeout = setTimeout(later, wait)
    }
  }
  
  function opDebounce(func, wait, options = {}) {
    let timeout;
    let lastCallTime = 0
    
    return function executedFunction(...args) {
      let currentTime = Date.now();
      let isLeadingCall = options.leading && (currentTime - lastCallTime) >= wait
  
      let later = () => {
        timeout = null
        if (!options.leading) func(...args)
      }
  
      if (isLeadingCall) {
        lastCallTime = currentTime
        func(...args)
      } else {
        clearTimeout(timeout)
      }
  
      timeout = setTimeout(later, wait)
    }
  }