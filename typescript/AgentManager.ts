import {Agent} from './agent';

export interface AgentManger{
    agentList:Agent[];
    addAgent(agent:Agent):number;
}
