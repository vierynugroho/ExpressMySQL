const prisma = require('../config/database');

const getAllUser = async () => {
	const users = await prisma.users.findMany();
	return users;
};

module.exports = {
	getAllUser,
};
