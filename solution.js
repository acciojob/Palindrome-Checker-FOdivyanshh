// complete the given function

function palindrome(str){
  
  const array = str.split('')
  
  const revArr = array.reverse()
  
  const revString = revArr.join('')
  
  if(str==revString){
    return true
  }
  
  else{ 
    return false
  }
}
module.exports = palindrome
