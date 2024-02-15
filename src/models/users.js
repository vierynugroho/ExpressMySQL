const prisma = require('../config/database');

const getAllUser = async () => {
	const users = await prisma.users.findMany();
	return users;
};

const createNewUser = async (data) => {
	const user = await prisma.users.create({
		data: {
			name: data.name,
			email: data.email,
			address: data.address,
		},
	});

	return user;
};

module.exports = {
	getAllUser,
	createNewUser,
};
