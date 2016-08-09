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