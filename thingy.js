new (function() {
    var ext = this;

    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.speak = function(text) {
      alert(text);
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            ['', 'alert %s', 'speak', "Hello!"],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Simple thing', descriptor, ext);
})();
