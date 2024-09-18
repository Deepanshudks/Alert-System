// db.js
let users = [];
const complaints = [{
  fullName : "Luffy",
  email : "luffy@gmail.com",
  password : "12345",
  phoneNumber : 1234567890,
  address : "East Blue",
  idVerification : 12345,
  emergencyContact : 12345,
  agreement : true
},
{
  fullName : "John Doe",
  email : "john@gmail.com",
  password : "123456",
  phoneNumber : 1234567890,
  address : "East Blue",
  idVerification : 12345,
  emergencyContact : 12345,
  agreement : true
}]; // New array to store complaints

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
