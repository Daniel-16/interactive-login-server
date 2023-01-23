const UserModel = require("../model/UserModel");

exports.signup = async (req, res) => {
  const { fullname, email, password } = req.body;
  try {
    const user = await UserModel.signup(fullname, email, password);
    res.status(201).json({
      success: true,
      user,
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      error: err.message,
    });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.login(email, password);
    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      error: error.message,
    });
  }
};
