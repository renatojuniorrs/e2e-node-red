var http = require('http');
var express = require("express");
var RED = require("node-red");

// Create an Express app
var app = express();

// Add a simple route for static content served from 'public'
app.use("/",express.static("public"));

// Create a server
var server = http.createServer(app);

// Create the settings object - see default settings.js file for other options
var settings = {
    httpAdminRoot:"/red",
    httpNodeRoot: "/api",
    userDir:__dirname,
	adminAuth: {
		type: "credentials",
		users: [
			{
				username: "admin",
				password: "$2a$04$aDtZ7ewZ/XSJcnBH3EHcp.1ATLsZV2aH/kfhpC9snZ/nw8MsGVMQa", // levande@admin
				permissions: "*"
			}
		]
	},
	editorTheme: {
		projects: {
			enabled: true
		}
	},
    functionGlobalContext: { }    // enables global context
};

// Initialise the runtime with a server and settings
RED.init(server,settings);

// Serve the editor UI from /red
app.use(settings.httpAdminRoot,RED.httpAdmin);

// Serve the http nodes UI from /api
app.use(settings.httpNodeRoot,RED.httpNode);

const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));

// Start the runtime
RED.start();