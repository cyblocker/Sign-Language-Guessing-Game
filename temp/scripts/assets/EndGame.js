"use strict";
cc._RFpush(module, '62f44wf/1ZAUIJeY7tuW9LX', 'EndGame');
// EndGame.js

var Global = require("Global");
cc.Class({
    "extends": cc.Component,

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
        Result: {
            "default": null,
            type: cc.Label
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        var result = "你答对了";
        result += Global.Anscount;
        result += "题，\n获得";
        if (Global.Anscount == 0) result += "小白";
        if (Global.Anscount == 1) result += "入门者";
        if (Global.Anscount == 2) result += "小灵通";
        if (Global.Anscount == 3) result += "小灵通";
        if (Global.Anscount == 4) result += "大师";
        if (Global.Anscount == 5) result += "大师";
        if (Global.Anscount == 6) result += "轰炸机";

        result += "称号！";
        this.Result.string = result;
    }

});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();