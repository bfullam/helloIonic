cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-hello-world/www/HelloWorld.js",
        "id": "cordova-plugin-hello-world.HelloWorld",
        "pluginId": "cordova-plugin-hello-world",
        "clobbers": [
            "cordova.plugins.HelloWorld"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-hello-world": "0.0.1"
}
// BOTTOM OF METADATA
});