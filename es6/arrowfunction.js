var LifeInsurance=require('./insurance');

const ramesh=new LifeInsurance(101,'ramesh',4500);
const rajesh=new LifeInsurance(101,'rajesh',5500);

let policyList=[ramesh,rajesh];
 policyList.forEach(eachPolicy =>console.log(eachPolicy.toString()));
 let nameList=policyList.map(policy =>policy.policyHolderName );

 let amountList=policyList.map(policy =>policy.policyamount);
 function showpremiun(policyamount=2000)
 {
return policyamount* .20;
 }
function printPremiun(...policyList)
{
policyList.forEach(eachPolicy=>{tsc
    showpremiun(eachPolicy.policyamount);
});
}
console.log(nameList);
console.log(showpremiun(amountList[0]));
console.log(showpremiun(amountList[1]));
console.log(showpremiun());

    
