import { AgentManger } from "./AgentManager";
import { Agent } from "./agent";

class AgentManagerImpl implements AgentManger{
    agentList: Agent[];
constructor(){                 //here the intializaton without this we can not push it
   this.agentList=[];
}
addAgent(agent:Agent):number{
    this.agentList.push(agent);
    return agent.id;
}
}
let mgr=new AgentManagerImpl();
mgr.addAgent({id:101,mobileNumber:77666,name:'ramesh'});
mgr.addAgent({id:101,mobileNumber:77666,name:'rajesh'});
mgr.agentList.forEach(element=>
    {
        console.log(element.name);
    })
