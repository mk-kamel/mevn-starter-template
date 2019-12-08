let express = require('express'),
	process = require('process'),
	path = require('path'),
	os = require("os"),
	rootDir = os.type().toLowerCase() == 'darwin' ? path.dirname(process.execPath) : process.cwd(),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	fs = require('fs');

const app = express();
const port = 4000;

app.use(bodyParser.json({limit: '50mb', extended: true}))
app.use(cors());

// Routes
const ExampleRoutes = require('./app/routes/example.js');
app.use('/api/example', ExampleRoutes);

// Load assets from public directory
app.use('/public/', express.static(rootDir+'/public/'))

// Redirect to index.html
app.route('/*').get(function(req, res) {
	res.sendFile(rootDir+'/index.html');
});

// Init Server
let server = app.listen(port, () => {
	console.log('Listening on port ' + port);
});
