import { version } from '../../package.json';
import { Router } from 'express';
import facets from './facets';

const user = {
	name: 'lugue',
	age: 31,
	test: 'none'
};

export default ({ config, db }) => {
	let api = Router();

	// mount the facets resource
	api.use('/facets', facets({ config, db }));

	// perhaps expose some API metadata at the root
	api.get('/', (req, res) => {
		res.json({ version });
	});

	api.get('/user', (req, res) => res.json(user));

	return api;
}
