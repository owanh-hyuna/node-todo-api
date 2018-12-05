const MongoClient = require('mongodb').MongoClient;

// Connection URL.
const url = 'mongodb://localhost:27017';

// Database Name.
const dbName = 'TodoApp';

// Use connect method to connect to the server.
MongoClient.connect(
	url,
	{ useNewUrlParser: true },
	(err, client) => {
		if (err) {
			return console.log('Unable to connect to MongoDB server');
		}
		console.log('Connected successfully to MongoDB server');

		const db = client.db(dbName);
		/* db.collection('Todos').insertOne(
			{
				text: 'Something to do',
				completed: false
			},
			(err, result) => {
				if (err) {
					return console.log('Unable to insert todo', err);
				}

				console.log(JSON.stringify(result.ops, undefined, 2));
			}
        ); */

		db.collection('Users').insertOne(
			{
				name: 'Owan Hunte',
				age: 37,
				location: 'Barbados'
			},
			(err, result) => {
				if (err) {
					return console.log('Unable to insert user', err);
				}
				console.log(result.ops);
			}
		);

		client.close();
	}
);
