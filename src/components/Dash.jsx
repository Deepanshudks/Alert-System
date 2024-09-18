import React, { useState } from "react";
import RegisterComplains from "./User/RegisterComplains";

// Placeholder components for each section
const PreviousComplaint = () => {
  return <div>List of Previous Complaints</div>;
};

const Alert = () => {
  return <div>Alerts Section</div>;
};

// Dashboard Component
const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("new");

  // Render the corresponding component based on the active section
  const renderSection = () => {
    switch (activeSection) {
      case "new":
        return <RegisterComplains />;
      case "previous":
        return <PreviousComplaint />;
      case "alert":
        return <Alert />;
      default:
        return <RegisterComplains />;
    }
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar (Fixed Navbar) */}
      <div className="bg-gray-800 text-white w-1/4 p-4 fixed h-full">
        <h2 className="text-xl mb-4">Dashboard</h2>
        <button
          className={`block p-3 mb-2 rounded hover:bg-gray-700 ${
            activeSection === "new" ? "bg-gray-700" : ""
          }`}
          onClick={() => setActiveSection("new")}
        >
          New Complaint
        </button>
        <button
          className={`block p-2 pt-3 mb-2 rounded hover:bg-gray-700 ${
            activeSection === "previous" ? "bg-gray-700" : ""
          }`}
          onClick={() => setActiveSection("previous")}
        >
          Previous Complaint
        </button>
        <button
          className={`block p-3 mb-2 rounded hover:bg-gray-700 ${
            activeSection === "alert" ? "bg-gray-700" : ""
          }`}
          onClick={() => setActiveSection("alert")}
        >
          Alert
        </button>
      </div>

      {/* Main content area */}
      <div className="flex-1 bg-gray-100 p-6 ml-1/4 overflow-auto">
        <h2 className="text-2xl mb-4"></h2>
        
        <div className="flex-1 bg-gray-100 p-6 overflow-auto">
    {renderSection()}
</div>
        
      </div>
    </div>
  );
};

export default Dashboard;
