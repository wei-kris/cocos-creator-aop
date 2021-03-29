import ProxyBase from "./ProxyBase";
const {ccclass, property} = cc._decorator;

@ccclass
export default class ProxyB extends ProxyBase {
    private aaa = "ProxyB";

    step2() {
        console.log(this.node.name + 'ProxyB step2', this.aaa, this.template);
        // this.template["step2_old"]();
        // this.step2.ogFun();
        // arguments.callee.ogFun();

        this.callOgFun();
        this.step3();
    }

    step3() {
        console.log(this.node.name + 'ProxyB step3', this.aaa, this.template);
        // this.template["step3_old"]();
        // this.step3.ogFun();
        // arguments.callee.ogFun();
        this.callOgFun();
    }
}
