// Minion Config file


var config = {
	platform : 'default', 			// 'default' returns nothing. 'amazon' will use amazon dns lookup to get hostname so you can use ssl
	maxConcurrentCommands: null, 	// accepts a number or null. null allows unlimimited commands
	timeout: 18000000,
	noQueueDomains: ['localhost', 'iobio.io', null] // lists domains that will never be queued
	//cacheDir: function(params) { return './cache/' + params.username} // directory to save cache in. Can take string or function
	// cacheDir: null
}

module.exports = config;