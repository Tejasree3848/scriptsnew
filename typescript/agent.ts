export interface Agent{
    id:number;name:string;mobileNumber:number;category?:string;//?i s aoptional paramter
}

function printAgent(agent:Agent)
{
    console.log(agent.name);
}

let teju:Agent={id:101,mobileNumber:99990000,name:'tejasree'};
/*order doesnot matter*/
printAgent(teju);