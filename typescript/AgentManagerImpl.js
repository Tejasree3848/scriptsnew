"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AgentManagerImpl {
    //constructor(){
    //   this.agentList=[];
    //}
    addAgent(agent) {
        this.agentList.push(agent);
        return agent.id;
    }
}
let mgr = new AgentManagerImpl();
mgr.addAgent({ id: 101, mobileNumber: 77666, name: 'ramesh' });
mgr.addAgent({ id: 101, mobileNumber: 77666, name: 'rajesh' });
mgr.agentList.forEach(element => {
    console.log(element.name);
});
