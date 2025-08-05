import Donation from "../models/Donation.js";

const reject = async (req, res) => {
    try {
        const { donationid } = req.body;
        const d = await Donation.findOne({ _id: donationid });
        if (!d) {
            return res.status(404).json({
                success: false,
                message: ["Donation not found !"]
            });
        }
        d.status = "rejected"
        await d.save();
        return res.status(200).json({
            success: true,
            message: ["Donation request rejected successfully!"]
        });
    } catch (error) {
        console.error(error)
    }
}

export { reject }