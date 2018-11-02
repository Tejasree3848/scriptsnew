var LifeInsurance=require('./insurance');

class Application{
static main(){
const ramesh=new LifeInsurance(101,'ramesh',4500);
const rajesh=new LifeInsurance(101,'rajesh',5500);
const policyList=[ramesh,rajesh]
for(var i=0;i<policyList.length;i++)
{
    console.log(policyList[i].toString());
    console.log(policyList[i].policyHolderName);
}
}
}
Application.main();