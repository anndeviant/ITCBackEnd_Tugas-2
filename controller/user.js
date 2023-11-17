const Division = require("../model/divisions");
const User = require("../model/users");

const getAllUser = async (request, response, next) => {
    try {
        const users = await User.findAll({
            include: [{
                model: Division,
                attributes: ['name'],
                as: 'division'
            }],
        });

        const responseData = {
            status: "Success",
            message: "Successfully fetch all user data",
            users: users,
        };

        return response.status(200).json(responseData);
    } catch (error) {
        console.log(error.message);
        return response.status(500).json({
            status: "Error",
            message: "Internal Server Error",
        });
    }
};


const getUserById = (request, response, next) => {
    try {
        //Destructuring object
        const {
            userId
        } = request.params;

        //Select id yang harapkan
        //array.find setiap indexnya (user dan menggunakan function)
        const user = User.find((element) => {
            return element.id == userId;
        });

        if (user == undefined) {
            const responseDataSalah = {
                status: "Error",
                message: `User with id ${userId} is not exixted`,
            };
            return response.status(400).json(responseDataSalah);
        }

        const responseDataBerhasil = {
            status: "Success",
            message: "Successfully fetch user data",
            users: user
        };
        return response.status(200).json(responseDataBerhasil);

    } catch (error) {
        console.log(error.message);
    }
}

const postUser = async (request, response, next) => {
    try {
        const {
            fullName,
            nim,
            angkatan,
            email,
            password,
            division
        } = request.body;

        const userDivision = await Division.findOne({
            where: {
                name: division,
            }
        })

        if (userDivision == undefined) {
            response.status(400).json({
                status: "Error!",
                message: `${division} is not defined!`,
            })
        }

        const currentUser = await User.create({
            fullName: fullName,
            nim,
            angkatan,
            email,
            password,
            divisionId: userDivision.id,
        })

        response.status(201).json({
            status: "Success!",
            message: "Successfully add data!",
            user: {
                fullName: currentUser.fullName,
                division: currentUser.division,
            }
        })
    } catch (error) {
        console.log(error.message);
    }

}

const deleteUser = (request, response, next) => {
    try {
        const {
            userId
        } = request.params;

        //Mencari index user dari array
        const targetIndex = User.findIndex((element) => {
            return element.id == userId;
        });

        if (targetIndex === -1) {
            response.status(400).json({
                status: "Error",
                message: "User tidak ada"
            });
        }

        User.splice(targetIndex, 1);
        response.status(200).json({
            status: "Berhasil",
            message: `Berhasil delete user dengan id ${userId}`
        })
    } catch (error) {
        console.log(error.message);
    }
}

const putUser = (request, response, next) => {

}



module.exports = {
    getAllUser,
    getUserById,
    postUser,
    deleteUser
}