const oldData = JSON.parse(localStorage.getItem('student'));
const oldDataObj = oldData[0]
document.querySelector('.name-js').innerHTML = oldDataObj.name
console.log(oldData)