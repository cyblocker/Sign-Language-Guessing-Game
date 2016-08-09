var Global = require("Global");
cc.Class({
    'extends': cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        ButtonID: 0
    },

    // use this for initialization
    onLoad: function onLoad() {},
    callback: function callback(event) {
        var canvas = event.target.getComponent(cc.Canvas);
        if (this.ButtonID == Global.correct) {
            event.target.dispatchEvent(new cc.Event.EventCustom('Correct', true));
        } else {
            event.target.dispatchEvent(new cc.Event.EventCustom('Wrong', true));
        }
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});