import React, { useState } from 'react';
import RegisterComplains from './RegisterComplains';

const UserDashboard = () => {
 
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
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-1/4 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
        <ul>
          <li className="mb-2">
            <button className="w-full text-left px-4 py-2 hover:bg-gray-700"           onClick={() => setActiveSection("new")}
 >
              New Complaint
            </button>
          </li>
          <li className="mb-2">
            <button className="w-full text-left px-4 py-2 hover:bg-gray-700"           onClick={() => setActiveSection("previous")}
 >
              Previous Complaint
            </button>
          </li>
          <li className="mb-2">
            <button className="w-full text-left px-4 py-2 hover:bg-gray-700" onClick={() => setActiveSection("alert")} >
              Alert
            </button>
          </li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
       

        {/* Form Section */}
        <div className="bg-white p-6 shadow-md rounded-lg">
        {renderSection()}
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;
