import { User } from '../models/index.js';
export const getUsers = async (_req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
};
export const getSingleUser = async (req, res) => {
    try {
        const dbUserData = await User.findOne({ _id: req.params.userId })
            .select('-__v')
            .populate('friends')
            .populate('thoughts');
        if (!dbUserData) {
            res.status(404).json({ message: 'User not found with this ID!' });
            return;
        }
        return res.status(200).json(dbUserData);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};
export const createUser = async (req, res) => {
    try {
        const dbUserData = await User.create(req.body);
        return res.json(dbUserData);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
};
