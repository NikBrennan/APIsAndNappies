const People = require('../models/people');

exports.index = async(_, response, next) => {
    try {
        const people = await People.find();

        response.status(200).json(people);
    } catch (error) {
        next(error);
    }
}

exports.create= async(request, response, next) => {
    try {
        const { name, age, gender } = request.body;
        const people = People.create({name, age, gender});

        response.status(200).json({
            message: "You have created a person...God?",
            status: "success",
            people
        })
    } catch (error) {
        next(error);
    }
}