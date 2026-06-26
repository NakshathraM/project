const Subscriber = require("../models/Subscriber");

exports.subscribe = async (req, res) => {

    try {

        const { email } = req.body;

        const exists = await Subscriber.findOne({ email });

        if (exists) {

            return res.json({

                message: "Already subscribed."

            });

        }

        await Subscriber.create({

            email

        });

        res.json({

            message: "Thank you for subscribing!"

        });

    }

    catch (err) {

        res.status(500).json({

            message: "Server Error"

        });

    }

};