
(function(){

function add()
{
    var counter=0;//free or local variable

    return function(){
return ++counter;
    }
}
var mycounter=add();
console.add(mycounter());
console.add(mycounter());
console.add(mycounter());

})();