const Contact = require("../models/Contact");

exports.sendMessage = async (req, res) => {

    try {

        const { name, email, message } = req.body;

        await Contact.create({

            name,

            email,

            message

        });

        res.json({

            message: "Message Sent Successfully"

        });

    }

    catch {

        res.status(500).json({

            message: "Error"

        });

    }

};