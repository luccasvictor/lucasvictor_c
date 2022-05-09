var tmi = require('tmi.js');
var options = 
{
	options: 
	{
		debug: true
	},
	connection: 
	{
		cluster: "aws",
		reconnect: true
	},
	identity: 
	{
		username: "lucasvictor_c",
		password: "oauth:886ypooxydv71mj8uuu8yl3f2e12pz",  
	},
	channels: ['#gaules', '#cachorro1337c', '#saullo', '#skipnho', '#umbrinquedo', '#skipnholoja', '#velhovamp1', '#zanfas_cenegal', '#csrfps', '#gabepeixe', '#tiburciand0', '#brnwowzk1',] //ADICIONA OS CANAIS AQ COM '#NOME'
};

var client = new tmi.client(options);

	client.connect();
	client.on("connected", function (address, port)
	{
		console.log("address: " + address + " port: " + port);
		client.action("999mateus", "Hello 999mateus!")
	});
