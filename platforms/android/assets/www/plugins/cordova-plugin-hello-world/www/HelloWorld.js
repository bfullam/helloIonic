cordova.define("cordova-plugin-hello-world.HelloWorld", function(require, exports, module) {
var exec = require('cordova/exec');

// exports.coolMethod = function(arg0, success, error) {
//     exec(success, error, "HelloWorld", "coolMethod", [arg0]);
// };

var HelloWorld = {
  hello: function() {
  	console.log('Inside plugin js');
    exec(function() {
    	console.log('Hello World!');
    }, function() {
    	console.log('Goodbye World!');
    }, HelloWorld, 'echo', ['test']);
  }
};

module.exports = HelloWorld;

});
