const {ccclass, property} = cc._decorator;

@ccclass
export default class Template extends cc.Component {
    private aaa = "Template";

    start () {
        this.step1();
    }

    step1() {
        console.log(this.node.name + 'step1');
        this.step2();
    }

    step2() {
        console.log(this.node.name + 'step2');
        this.step3();
    }

    step3() {
        console.log(this.node.name + 'step3');
    }
}
