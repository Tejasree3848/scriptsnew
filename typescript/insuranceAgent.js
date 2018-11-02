"use strict";
class InsuranceAgent {
    constructor(agentCode, agentName) {
        this._agentCode = agentCode;
        this._agentName = agentName;
    }
    set agentCode(agentCode) {
        if (agentCode < 0 || agentCode > 2000) {
            throw Error('invliad agent code');
        }
        this._agentCode = agentCode;
    }
    set agentName(agentName) {
        this._agentName = agentName;
    }
    get agentCode() {
        return this.agentCode;
    }
    get agentName() {
        return this.agentName.toUpperCase();
    }
    toString() {
        return `${this.agentName},${this.agentName}`;
    }
}
try {
    let ram = new InsuranceAgent(1010, 'RameshKumar');
    console.log(ram);
}
catch (error) {
    console.log(error.message);
}
