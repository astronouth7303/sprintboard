var cproc = require('child_process');

Manager = {
    children: [],
    shuttingdown: false,
    start: function(name) {
        var config = {}; //TODO: Load config
        var child = cproc.spawn("TODO");
        child.on('exit', function(code, signal) {
            if (!this.shuttingdown) {
                //TODO: Throttle? and Restart
            }
        });
        child.stdout.on('data', function(data) {
            //TODO: Buffer, parse, emit
        });
        child.stderr.on('data', function(data) {
            //TODO: Buffer, log
        });
        child.stdin.write(config);
        child.stdin.destroySoon();
    },
    startAll: function() {
        // TODO: Find and start
    },
    reload: function(name) {
        //TODO: Reload process(es)
    },
    destroy: function() {
        //TODO: SIGQUIT all children
    },
}