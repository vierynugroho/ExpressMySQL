const { getAllUser, createNewUser } = require('../models/users');

const getAllUsers = async (req, res) => {
	try {
		const users = await getAllUser();

		res.status(200).json({
			status: 200,
			message: 'GET all users success',
			data: users,
		});
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: `Error: ${error}`,
		});
	}
};

const createAllUsers = async (req, res) => {
	try {
		const data = req.body;
		const user = await createNewUser(data);

		res.status(201).json({
			status: 201,
			message: 'CREATE user success',
			data: user,
		});
	} catch (error) {
		res.status(500).json({
			status: 500,
			message: `Error: ${error}`,
		});
	}
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
