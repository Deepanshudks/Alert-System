import axios from "axios";
import { useEffect, useState } from "react";

export const NotificationButton = () => {
    const [newAlertsCount, setNewAlertsCount] = useState(0);
  
    useEffect(() => {
      const fetchAlertsCount = async () => {
        try {
          const response = await axios.get('/api/alerts/count');
          setNewAlertsCount(response.data.count);
        } catch (error) {
          console.error('Error fetching alerts count:', error);
        }
      };
  
      fetchAlertsCount();
    }, []);
  
    return (
      <button
        type="button"
        className="relative rounded-full bg-gray-800 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
      >
        <span className="sr-only">View notifications</span>
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
        </svg>
        {newAlertsCount > 0 && (
          <span
            className="absolute top-0 right-0 block h-2.5 w-2.5 rounded-full bg-red-500"
            style={{ transform: 'translate(50%, -50%)' }}
          />
        )}
      </button>
    );
  };