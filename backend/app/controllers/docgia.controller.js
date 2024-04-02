const ApiError = require("../api-error");
const DocgiaService = require("../services/docgia.service");
const MongoDB = require("../utils/mongodb.util");

exports.create = async (req, res, next) => {
    if (!req.body?.holot && !req.body?.ten) {
        return next(new ApiError(400, "Ho lot va ten khong duoc trong!"));
    }
    
    try { 
        const docgiaService = new DocgiaService(MongoDB.client);
        const document = await docgiaService.create(req.body);
        return res.send(document);
    }
    catch (error) {
        return next(error);
    }
}

exports.findAll = async (req, res, next) => {
    let documents = [];
    try {
        const docgiaService = new DocgiaService(MongoDB.client);
        const { ten } = req.query;

        if (ten) {
            documents = await docgiaService.findByName(ten); // Assuming "fidndbyName" was meant to be "findByTen"
        } else {
            documents = await docgiaService.find();
        }
        return res.send(documents); // Move the response inside the try block
    } catch (error) {
        console.error("Error occurred while finding documents:", error); // Log the error for debugging
        return res.status(500).json({ error: "Internal Server Error" }); // Respond with a 500 status and an error message
    }
};


exports.findOne = (req, res) => {
    res.send({ message: "Find one handler!" });
}

exports.update = (req, res) => {
    res.send({ message: "Update handler!" });
}

exports.delete = (req, res) => {
    res.send({ message: "Delete handler!" });
}

exports.deleteAll = (req, res) => {
    res.send({ message: "Delete all handler!" });
}


