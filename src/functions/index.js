export function capitalize(word) {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
}

export function objIsEmpty(obj) {
    for(var prop in obj) {
      if(Object.prototype.hasOwnProperty.call(obj, prop)) {
        return false;
      }
    }
    return JSON.stringify(obj) === JSON.stringify({});
  }