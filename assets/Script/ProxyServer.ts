import Template from "./Template";
import ProxyBase from "./ProxyBase";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ProxyServer extends cc.Component {

    @property({
        type: Template
    })
    template: Template = null;

    start () {
        let proxyList = this.node.getComponents("ProxyBase");

        // proxyList 代理 template 
        proxyList.forEach(proxy => {
            Object.keys(proxy.__proto__).forEach(funKey => {
                if (funKey != "constructor") {
                    let ogFun = this.template[funKey + "_old"] || this.template[funKey];
                    this.template[funKey] = proxy.__proto__[funKey].bind(proxy);
                    proxy.__proto__[funKey].ogFun = ogFun.bind(this.template);
                    this.template[funKey + "_old"] = ogFun;
                    proxy.template = this.template;
                } 
            });
        });
    }
}
