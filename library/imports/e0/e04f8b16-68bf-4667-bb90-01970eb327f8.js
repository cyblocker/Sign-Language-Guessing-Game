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