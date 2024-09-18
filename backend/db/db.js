// db.js
let users = [];
const complaints = []; // New array to store complaints

const addUser = (user) => {
  users.push(user);
  return user;
};

const getUsers = () => {
  return users;
};

const findUserByEmail = (email) => {
  return users.find(user => user.email === email);
};

function addComplaint(complaint) {
  complaints.push(complaint);
}

// Function to fetch all complaints
function getAllComplaints() {
  return complaints;
}

module.exports = {
  addUser,
  getUsers,
  findUserByEmail,
  addComplaint, getAllComplaints 
};
