import ProxyBase from "./ProxyBase";
const {ccclass, property} = cc._decorator;

@ccclass
export default class ProxyA extends ProxyBase {

    step3() {
        console.log(this.node.name + 'ProxyA step3');
    }
}
