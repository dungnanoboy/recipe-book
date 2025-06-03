const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ id: 1 });
    res.render('admin/user-table', {
      users,
      title: 'Quản lý người dùng'
    });
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('Server Error');
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findOne({ id: req.params.id });
    if (!user) {
      return res.status(404).json({ message: 'Không tìm thấy người dùng' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Lỗi server' });
  }
};

exports.addUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    
    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email đã tồn tại' });
    }

    // Get max id and increment
    const maxUser = await User.findOne().sort('-id');
    const newId = maxUser ? maxUser.id + 1 : 1;

    const newUser = new User({
      id: newId,
      username,
      email,
      password,
      role: role || 'user',
      avatarUrl: '/img/user-img/default.png',
      joinedAt: new Date()
    });

    await newUser.save();
    res.redirect('/admin/user-table');
  } catch (error) {
    console.error('Error adding user:', error);
    res.status(500).send('Server Error');
  }
};

exports.editUser = async (req, res) => {
  try {
    const { id, username, email, role } = req.body;
    const updateData = {
      username,
      email,
      role
    };

    // Only update password if provided
    if (req.body.password) {
      updateData.password = req.body.password;
    }

    await User.findOneAndUpdate({ id }, updateData);
    res.redirect('/admin/user-table');
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).send('Server Error');
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.findOneAndDelete({ id: req.params.id });
    res.status(200).send('User deleted');
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).send('Server Error');
  }
};