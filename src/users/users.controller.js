const userService = require('./users.service');

const createUser = async (req, res) => {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    res.json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const message = await userService.deleteUser(req.params.id);
    res.json(message);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const deposit = async (req, res) => {
  try {
    const message = await userService.deposit(req.params.id, req.body);
    res.json(message);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const deduct = async (req, res) => {
  try {
    const message = await userService.deduct(req.params.id, req.body);
    res.json(message);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  deposit,
  deduct
};
