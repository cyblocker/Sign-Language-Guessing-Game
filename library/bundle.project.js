require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"ButtonClick":[function(require,module,exports){
"use strict";
cc._RFpush(module, '10e86+iNSxEWZown58A+GqV', 'ButtonClick');
// ButtonClick.js

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

cc._RFpop();
},{"Global":"Global"}],"EndGame":[function(require,module,exports){
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
},{"Global":"Global"}],"Global":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'ba581Eohc5CUpRu6g3D6T8g', 'Global');
// Global.js

module.exports = {
    correct: 1,
    Anscount: 0,
    QuestionTotal: 5
};

cc._RFpop();
},{}],"OpenURL":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'e04f8sWaL9GZ7uQAZcOsyf4', 'OpenURL');
// OpenURL.js

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
    },

    // use this for initialization
    onLoad: function onLoad() {},
    callback: function callback(event) {
        cc.sys.openURL("https://garagehackbox.azurewebsites.net/hackathons/761/projects/50431");
    }
});
// called every frame, uncomment this function to activate update callback
// update: function (dt) {

// },

cc._RFpop();
},{}],"Question":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'bb06eUyqgpHl5Kq8SSswkcI', 'Question');
// Question.js

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
        Button1Text: {
            "default": null,
            type: cc.Label
        },
        Button2Text: {
            "default": null,
            type: cc.Label
        },
        CountdownText: {
            "default": null,
            type: cc.Label
        },
        VideoPlayer: {
            "default": null,
            type: cc.Sprite
        },
        Questions: [],
        CorrectAnswers: [],
        WrongAnswers: [],
        Used: [],
        TimeLimit: 10.0
    },

    getRandomInt: function getRandomInt(min, max) {
        var ratio = cc.random0To1();
        return min + Math.floor((max - min + 1) * ratio);
    },
    // use this for initialization
    onLoad: function onLoad() {
        Global.Anscount = 0;
        this.Questions[0] = "希望";
        this.CorrectAnswers[0] = "希望";
        this.WrongAnswers[0] = "听";
        this.Questions[1] = "没关系";
        this.CorrectAnswers[1] = "没关系";
        this.WrongAnswers[1] = "再见";
        this.Questions[2] = "感谢";
        this.CorrectAnswers[2] = "感谢";
        this.WrongAnswers[2] = "你";
        this.Questions[3] = "肺";
        this.CorrectAnswers[3] = "肺";
        this.WrongAnswers[3] = "担心";
        this.Questions[4] = "接受";
        this.CorrectAnswers[4] = "接受";
        this.WrongAnswers[4] = "退";
        this.Questions[5] = "认真";
        this.CorrectAnswers[5] = "认真";
        this.WrongAnswers[5] = "欢迎";
        Global.QuestionTotal = 6;
        for (var i = 0; i < Global.QuestionTotal; i++) this.Used[i] = false;
        this.showQuestion();
        this.node.on('Correct', function (event) {
            event.stopPropagation();
            this.AnswerCorrect();
        }, this);
        this.node.on('Wrong', function (event) {
            event.stopPropagation();
            this.Endgame();
        }, this);
        this.TimeLimit = 10.0;
        this.ShowTime();
        cc.director.preloadScene('EndGame', function () {
            cc.log('EndGame scene preloaded');
        });
    },

    showQuestion: function showQuestion() {
        var index = this.getRandomInt(0, Global.QuestionTotal - 1);
        while (this.Used[index] === true) {
            index = this.getRandomInt(0, Global.QuestionTotal - 1);
        }
        var realUrl = cc.url.raw("resources/" + this.Questions[index]);
        //this.VideoPlayer.clip = realUrl;
        this.VideoPlayer.getComponent(cc.Animation).play(this.Questions[index]);
        this.Used[index] = true;
        Global.correct = this.getRandomInt(1, 2);
        if (Global.correct == 1) {
            this.Button1Text.string = this.CorrectAnswers[index];
            this.Button2Text.string = this.WrongAnswers[index];
        } else {
            this.Button2Text.string = this.CorrectAnswers[index];
            this.Button1Text.string = this.WrongAnswers[index];
        }
        this.TimeLimit = 10.0;
    },

    AnswerCorrect: function AnswerCorrect() {
        Global.Anscount++;
        if (Global.Anscount == Global.QuestionTotal) this.Endgame();else this.showQuestion();
    },
    Endgame: function Endgame() {
        cc.director.loadScene('EndGame');
    },
    // called every frame, uncomment this function to activate update callback
    update: function update(dt) {
        this.TimeLimit -= dt;
        if (this.TimeLimit <= 0) this.Endgame();
        this.ShowTime();
    },
    ShowTime: function ShowTime() {
        this.CountdownText.string = Math.ceil(this.TimeLimit);
    }
});

cc._RFpop();
},{"Global":"Global"}],"Start":[function(require,module,exports){
"use strict";
cc._RFpush(module, 'b214b5Ev2hLG7ig8UZJ2JxU', 'Start');
// Start.js

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
    },

    // use this for initialization
    onLoad: function onLoad() {
        cc.director.preloadScene('QA', function () {
            cc.log('QA scene preloaded');
        });
    },
    callback: function callback(event) {
        cc.director.loadScene('QA');
    }
    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();
},{}]},{},["ButtonClick","EndGame","Start","Global","Question","OpenURL"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL0NvY29zQ3JlYXRvci9yZXNvdXJjZXMvYXBwLmFzYXIvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsImFzc2V0cy9CdXR0b25DbGljay5qcyIsImFzc2V0cy9FbmRHYW1lLmpzIiwiYXNzZXRzL0dsb2JhbC5qcyIsImFzc2V0cy9PcGVuVVJMLmpzIiwiYXNzZXRzL1F1ZXN0aW9uLmpzIiwiYXNzZXRzL1N0YXJ0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzEwZTg2K2lOU3hFV1pvd241OEErR3FWJywgJ0J1dHRvbkNsaWNrJyk7XG4vLyBCdXR0b25DbGljay5qc1xuXG52YXIgR2xvYmFsID0gcmVxdWlyZShcIkdsb2JhbFwiKTtcbmNjLkNsYXNzKHtcbiAgICAnZXh0ZW5kcyc6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgICAgIEJ1dHRvbklEOiAwXG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge30sXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uIGNhbGxiYWNrKGV2ZW50KSB7XG4gICAgICAgIHZhciBjYW52YXMgPSBldmVudC50YXJnZXQuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XG4gICAgICAgIGlmICh0aGlzLkJ1dHRvbklEID09IEdsb2JhbC5jb3JyZWN0KSB7XG4gICAgICAgICAgICBldmVudC50YXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgY2MuRXZlbnQuRXZlbnRDdXN0b20oJ0NvcnJlY3QnLCB0cnVlKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBldmVudC50YXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgY2MuRXZlbnQuRXZlbnRDdXN0b20oJ1dyb25nJywgdHJ1ZSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuICAgIC8vIH0sXG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJzYyZjQ0d2YvMVpBVUlKZVk3dHVXOUxYJywgJ0VuZEdhbWUnKTtcbi8vIEVuZEdhbWUuanNcblxudmFyIEdsb2JhbCA9IHJlcXVpcmUoXCJHbG9iYWxcIik7XG5jYy5DbGFzcyh7XG4gICAgXCJleHRlbmRzXCI6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy8gZm9vOiB7XG4gICAgICAgIC8vICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIC8vICAgIHVybDogY2MuVGV4dHVyZTJELCAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcbiAgICAgICAgLy8gICAgc2VyaWFsaXphYmxlOiB0cnVlLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICBkaXNwbGF5TmFtZTogJ0ZvbycsIC8vIG9wdGlvbmFsXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcbiAgICAgICAgLy8gfSxcbiAgICAgICAgLy8gLi4uXG4gICAgICAgIFJlc3VsdDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCLkvaDnrZTlr7nkuoZcIjtcbiAgICAgICAgcmVzdWx0ICs9IEdsb2JhbC5BbnNjb3VudDtcbiAgICAgICAgcmVzdWx0ICs9IFwi6aKY77yMXFxu6I635b6XXCI7XG4gICAgICAgIGlmIChHbG9iYWwuQW5zY291bnQgPT0gMCkgcmVzdWx0ICs9IFwi5bCP55m9XCI7XG4gICAgICAgIGlmIChHbG9iYWwuQW5zY291bnQgPT0gMSkgcmVzdWx0ICs9IFwi5YWl6Zeo6ICFXCI7XG4gICAgICAgIGlmIChHbG9iYWwuQW5zY291bnQgPT0gMikgcmVzdWx0ICs9IFwi5bCP54G16YCaXCI7XG4gICAgICAgIGlmIChHbG9iYWwuQW5zY291bnQgPT0gMykgcmVzdWx0ICs9IFwi5bCP54G16YCaXCI7XG4gICAgICAgIGlmIChHbG9iYWwuQW5zY291bnQgPT0gNCkgcmVzdWx0ICs9IFwi5aSn5biIXCI7XG4gICAgICAgIGlmIChHbG9iYWwuQW5zY291bnQgPT0gNSkgcmVzdWx0ICs9IFwi5aSn5biIXCI7XG4gICAgICAgIGlmIChHbG9iYWwuQW5zY291bnQgPT0gNikgcmVzdWx0ICs9IFwi6L2w54K45py6XCI7XG5cbiAgICAgICAgcmVzdWx0ICs9IFwi56ew5Y+377yBXCI7XG4gICAgICAgIHRoaXMuUmVzdWx0LnN0cmluZyA9IHJlc3VsdDtcbiAgICB9XG5cbn0pO1xuLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbi8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XG5cbi8vIH0sXG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdiYTU4MUVvaGM1Q1VwUnU2ZzNENlQ4ZycsICdHbG9iYWwnKTtcbi8vIEdsb2JhbC5qc1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBjb3JyZWN0OiAxLFxuICAgIEFuc2NvdW50OiAwLFxuICAgIFF1ZXN0aW9uVG90YWw6IDVcbn07XG5cbmNjLl9SRnBvcCgpOyIsIlwidXNlIHN0cmljdFwiO1xuY2MuX1JGcHVzaChtb2R1bGUsICdlMDRmOHNXYUw5R1o3dVFBWmNPc3lmNCcsICdPcGVuVVJMJyk7XG4vLyBPcGVuVVJMLmpzXG5cbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICB9LFxuXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7fSxcbiAgICBjYWxsYmFjazogZnVuY3Rpb24gY2FsbGJhY2soZXZlbnQpIHtcbiAgICAgICAgY2Muc3lzLm9wZW5VUkwoXCJodHRwczovL2dhcmFnZWhhY2tib3guYXp1cmV3ZWJzaXRlcy5uZXQvaGFja2F0aG9ucy83NjEvcHJvamVjdHMvNTA0MzFcIik7XG4gICAgfVxufSk7XG4vLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xuLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcblxuLy8gfSxcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2JiMDZlVXlxZ3BIbDVLcThTU3N3a2NJJywgJ1F1ZXN0aW9uJyk7XG4vLyBRdWVzdGlvbi5qc1xuXG52YXIgR2xvYmFsID0gcmVxdWlyZShcIkdsb2JhbFwiKTtcbmNjLkNsYXNzKHtcbiAgICBcImV4dGVuZHNcIjogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvLyBmb286IHtcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxuICAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgdmlzaWJsZTogdHJ1ZSwgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcbiAgICAgICAgLy8gICAgcmVhZG9ubHk6IGZhbHNlLCAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyBmYWxzZVxuICAgICAgICAvLyB9LFxuICAgICAgICAvLyAuLi5cbiAgICAgICAgQnV0dG9uMVRleHQ6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgQnV0dG9uMlRleHQ6IHtcbiAgICAgICAgICAgIFwiZGVmYXVsdFwiOiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWxcbiAgICAgICAgfSxcbiAgICAgICAgQ291bnRkb3duVGV4dDoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbFxuICAgICAgICB9LFxuICAgICAgICBWaWRlb1BsYXllcjoge1xuICAgICAgICAgICAgXCJkZWZhdWx0XCI6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVcbiAgICAgICAgfSxcbiAgICAgICAgUXVlc3Rpb25zOiBbXSxcbiAgICAgICAgQ29ycmVjdEFuc3dlcnM6IFtdLFxuICAgICAgICBXcm9uZ0Fuc3dlcnM6IFtdLFxuICAgICAgICBVc2VkOiBbXSxcbiAgICAgICAgVGltZUxpbWl0OiAxMC4wXG4gICAgfSxcblxuICAgIGdldFJhbmRvbUludDogZnVuY3Rpb24gZ2V0UmFuZG9tSW50KG1pbiwgbWF4KSB7XG4gICAgICAgIHZhciByYXRpbyA9IGNjLnJhbmRvbTBUbzEoKTtcbiAgICAgICAgcmV0dXJuIG1pbiArIE1hdGguZmxvb3IoKG1heCAtIG1pbiArIDEpICogcmF0aW8pO1xuICAgIH0sXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXG4gICAgb25Mb2FkOiBmdW5jdGlvbiBvbkxvYWQoKSB7XG4gICAgICAgIEdsb2JhbC5BbnNjb3VudCA9IDA7XG4gICAgICAgIHRoaXMuUXVlc3Rpb25zWzBdID0gXCLluIzmnJtcIjtcbiAgICAgICAgdGhpcy5Db3JyZWN0QW5zd2Vyc1swXSA9IFwi5biM5pybXCI7XG4gICAgICAgIHRoaXMuV3JvbmdBbnN3ZXJzWzBdID0gXCLlkKxcIjtcbiAgICAgICAgdGhpcy5RdWVzdGlvbnNbMV0gPSBcIuayoeWFs+ezu1wiO1xuICAgICAgICB0aGlzLkNvcnJlY3RBbnN3ZXJzWzFdID0gXCLmsqHlhbPns7tcIjtcbiAgICAgICAgdGhpcy5Xcm9uZ0Fuc3dlcnNbMV0gPSBcIuWGjeingVwiO1xuICAgICAgICB0aGlzLlF1ZXN0aW9uc1syXSA9IFwi5oSf6LCiXCI7XG4gICAgICAgIHRoaXMuQ29ycmVjdEFuc3dlcnNbMl0gPSBcIuaEn+iwolwiO1xuICAgICAgICB0aGlzLldyb25nQW5zd2Vyc1syXSA9IFwi5L2gXCI7XG4gICAgICAgIHRoaXMuUXVlc3Rpb25zWzNdID0gXCLogrpcIjtcbiAgICAgICAgdGhpcy5Db3JyZWN0QW5zd2Vyc1szXSA9IFwi6IK6XCI7XG4gICAgICAgIHRoaXMuV3JvbmdBbnN3ZXJzWzNdID0gXCLmi4Xlv4NcIjtcbiAgICAgICAgdGhpcy5RdWVzdGlvbnNbNF0gPSBcIuaOpeWPl1wiO1xuICAgICAgICB0aGlzLkNvcnJlY3RBbnN3ZXJzWzRdID0gXCLmjqXlj5dcIjtcbiAgICAgICAgdGhpcy5Xcm9uZ0Fuc3dlcnNbNF0gPSBcIumAgFwiO1xuICAgICAgICB0aGlzLlF1ZXN0aW9uc1s1XSA9IFwi6K6k55yfXCI7XG4gICAgICAgIHRoaXMuQ29ycmVjdEFuc3dlcnNbNV0gPSBcIuiupOecn1wiO1xuICAgICAgICB0aGlzLldyb25nQW5zd2Vyc1s1XSA9IFwi5qyi6L+OXCI7XG4gICAgICAgIEdsb2JhbC5RdWVzdGlvblRvdGFsID0gNjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBHbG9iYWwuUXVlc3Rpb25Ub3RhbDsgaSsrKSB0aGlzLlVzZWRbaV0gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaG93UXVlc3Rpb24oKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKCdDb3JyZWN0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuQW5zd2VyQ29ycmVjdCgpO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKCdXcm9uZycsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLkVuZGdhbWUoKTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIHRoaXMuVGltZUxpbWl0ID0gMTAuMDtcbiAgICAgICAgdGhpcy5TaG93VGltZSgpO1xuICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoJ0VuZEdhbWUnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjYy5sb2coJ0VuZEdhbWUgc2NlbmUgcHJlbG9hZGVkJyk7XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBzaG93UXVlc3Rpb246IGZ1bmN0aW9uIHNob3dRdWVzdGlvbigpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5nZXRSYW5kb21JbnQoMCwgR2xvYmFsLlF1ZXN0aW9uVG90YWwgLSAxKTtcbiAgICAgICAgd2hpbGUgKHRoaXMuVXNlZFtpbmRleF0gPT09IHRydWUpIHtcbiAgICAgICAgICAgIGluZGV4ID0gdGhpcy5nZXRSYW5kb21JbnQoMCwgR2xvYmFsLlF1ZXN0aW9uVG90YWwgLSAxKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVhbFVybCA9IGNjLnVybC5yYXcoXCJyZXNvdXJjZXMvXCIgKyB0aGlzLlF1ZXN0aW9uc1tpbmRleF0pO1xuICAgICAgICAvL3RoaXMuVmlkZW9QbGF5ZXIuY2xpcCA9IHJlYWxVcmw7XG4gICAgICAgIHRoaXMuVmlkZW9QbGF5ZXIuZ2V0Q29tcG9uZW50KGNjLkFuaW1hdGlvbikucGxheSh0aGlzLlF1ZXN0aW9uc1tpbmRleF0pO1xuICAgICAgICB0aGlzLlVzZWRbaW5kZXhdID0gdHJ1ZTtcbiAgICAgICAgR2xvYmFsLmNvcnJlY3QgPSB0aGlzLmdldFJhbmRvbUludCgxLCAyKTtcbiAgICAgICAgaWYgKEdsb2JhbC5jb3JyZWN0ID09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuQnV0dG9uMVRleHQuc3RyaW5nID0gdGhpcy5Db3JyZWN0QW5zd2Vyc1tpbmRleF07XG4gICAgICAgICAgICB0aGlzLkJ1dHRvbjJUZXh0LnN0cmluZyA9IHRoaXMuV3JvbmdBbnN3ZXJzW2luZGV4XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuQnV0dG9uMlRleHQuc3RyaW5nID0gdGhpcy5Db3JyZWN0QW5zd2Vyc1tpbmRleF07XG4gICAgICAgICAgICB0aGlzLkJ1dHRvbjFUZXh0LnN0cmluZyA9IHRoaXMuV3JvbmdBbnN3ZXJzW2luZGV4XTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLlRpbWVMaW1pdCA9IDEwLjA7XG4gICAgfSxcblxuICAgIEFuc3dlckNvcnJlY3Q6IGZ1bmN0aW9uIEFuc3dlckNvcnJlY3QoKSB7XG4gICAgICAgIEdsb2JhbC5BbnNjb3VudCsrO1xuICAgICAgICBpZiAoR2xvYmFsLkFuc2NvdW50ID09IEdsb2JhbC5RdWVzdGlvblRvdGFsKSB0aGlzLkVuZGdhbWUoKTtlbHNlIHRoaXMuc2hvd1F1ZXN0aW9uKCk7XG4gICAgfSxcbiAgICBFbmRnYW1lOiBmdW5jdGlvbiBFbmRnYW1lKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0VuZEdhbWUnKTtcbiAgICB9LFxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy5UaW1lTGltaXQgLT0gZHQ7XG4gICAgICAgIGlmICh0aGlzLlRpbWVMaW1pdCA8PSAwKSB0aGlzLkVuZGdhbWUoKTtcbiAgICAgICAgdGhpcy5TaG93VGltZSgpO1xuICAgIH0sXG4gICAgU2hvd1RpbWU6IGZ1bmN0aW9uIFNob3dUaW1lKCkge1xuICAgICAgICB0aGlzLkNvdW50ZG93blRleHQuc3RyaW5nID0gTWF0aC5jZWlsKHRoaXMuVGltZUxpbWl0KTtcbiAgICB9XG59KTtcblxuY2MuX1JGcG9wKCk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5jYy5fUkZwdXNoKG1vZHVsZSwgJ2IyMTRiNUV2MmhMRzdpZzhVWkoySnhVJywgJ1N0YXJ0Jyk7XG4vLyBTdGFydC5qc1xuXG5jYy5DbGFzcyh7XG4gICAgJ2V4dGVuZHMnOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8vIGZvbzoge1xuICAgICAgICAvLyAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcbiAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIC4uLlxuICAgIH0sXG5cbiAgICAvLyB1c2UgdGhpcyBmb3IgaW5pdGlhbGl6YXRpb25cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uIG9uTG9hZCgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKCdRQScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNjLmxvZygnUUEgc2NlbmUgcHJlbG9hZGVkJyk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uIGNhbGxiYWNrKGV2ZW50KSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnUUEnKTtcbiAgICB9XG4gICAgLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xuXG4gICAgLy8gfSxcbn0pO1xuXG5jYy5fUkZwb3AoKTsiXX0=
