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