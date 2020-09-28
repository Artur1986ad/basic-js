module.exports = function createDreamTeam(data) {
  if ( !(Array.isArray(data)) ) {
    return false;
  }else {
    let password=[]; 
    data.forEach(num =>{
      if(typeof num === 'string'){
        let result = num.trim()
        password.push(result[0].toUpperCase())
      }
    })
    return password.sort().join("");
  }

};