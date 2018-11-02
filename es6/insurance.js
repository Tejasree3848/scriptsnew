class LifeInsurance{

    constructor(id,policyHolderName,policyamount)
    {
        this.id=id;
        this._policyHolderName=policyHolderName;
        this.policyamount=policyamount;

    }
    set policyHolderName(policyHolderName)
    {
        this._policyHolderName=policyHolderName;
    }
    get policyHolderName()
    {
        return this._policyHolderName.toUpperCase();
    }
    toString(){

    return `${this.id},${this.policyHolderName},${this.policyamount}`
}
}
const ramesh=new LifeInsurance(101,'ramesh',4500);
console.log(ramesh.toString());
module.exports=LifeInsurance;