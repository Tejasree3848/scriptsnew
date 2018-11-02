/* IIfe get*/

var module=(function(msg)
{
  console.log(msg);
  function first(){
      console.log('I am in first');
  }
  function second(){
    console.log('I am in second');
}
return{
    one:first
}
})('I am inside iife');
var result=module.one();
console.log(result);