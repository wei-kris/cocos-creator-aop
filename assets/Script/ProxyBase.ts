
const {ccclass, property} = cc._decorator;

@ccclass
export default class ProxyBase extends cc.Component {
    template = null;

    callOgFun() {
        arguments.callee.caller.ogFun();
    }
}
