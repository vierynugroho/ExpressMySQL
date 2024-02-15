const { getAllUser } = require('../models/users');

const getAllUsers = async (req, res) => {
	try {
		res.code;
		const users = await getAllUser();

		res.status(200).json({
			message: 'GET all users success',
			data: users,
		});
	} catch (error) {
		res.status(400).json({
			message: `Error: ${error}`,
		});
	}
};

const createAllUsers = (req, res) => {
	res.json({
		message: 'CREATE all users success',
		data: req.body,
	});
};

const updateUser = (req, res) => {
	console.log(req.params);
	res.json({
		message: 'UPDATED user success',
		data: req.body,
	});
};

const deleteUser = (req, res) => {
	const { id } = req.params;
	res.json({
		message: 'DELETED user success',
		data: {
			id: id,
		},
	});
};

module.exports = {
	getAllUsers,
	createAllUsers,
	updateUser,
	deleteUser,
};
