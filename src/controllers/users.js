const getAllUsers = (req, res) => {
	res.json({
		message: 'GET all users success',
	});
};

const createAllUsers = (req, res) => {
	res.json({
		message: 'CREATE all users success',
	});
};

module.exports = {
	getAllUsers,
	createAllUsers,
};
