import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
// import "./FacultyDashboard.css"; // Include custom styles

const FacultyDashboard = () => {
  const [facultyData, setFacultyData] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const fetchFacultyData = async () => {
      const data = {
        name: "Dr. John Doe",
        department: "Computer Science",
        profilePicture: "/default-profile.png",
        performance: {
          rating: 80, // Percentage
          reviews: 20, // Count
        },
        courseSchedule: [
          { name: "Data Structures", studentsEnrolled: 50 },
          { name: "Operating Systems", studentsEnrolled: 40 },
          { name: "Algorithms", studentsEnrolled: 35 },
        ],
        announcements: [
          "Mid-term exam schedule released.",
          "Faculty meeting on Friday at 3 PM.",
          "Submit course reports by end of the week.",
        ],
        researchPublications: [
          { title: "Deep Learning in Healthcare", link: "https://example.com/deeplearning" },
          { title: "AI for Autonomous Vehicles", link: "https://example.com/ai-autonomous" },
        ],
        tasks: [
          { title: "Prepare lecture on AI", status: "Pending" },
          { title: "Grade assignments", status: "Completed" },
          { title: "Submit annual report", status: "Pending" },
        ],
      }
      setFacultyData(data)
      
    }      
    fetchFacultyData()
      
  }, []);

  if (!facultyData) {
    return <div className="text-center mt-10">Loading...</div>;
  }


  // Sample chart data
  const courseData = facultyData.courseSchedule.map((course) => ({
    name: course.name,
    students: course.studentsEnrolled,
  }));

  const taskData = facultyData.tasks.map((task) => ({
    name: task.title,
    status: task.status === "Pending" ? 50 : 100,
  }));

  return (
    <div >
      {/* Header */}
      <header className="bg-blue-500 text-white py-4 px-6 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold">Welcome, {facultyData.name}</h1>
          <p className="text-sm">{facultyData.department}</p>
        </div>
        <div className="flex items-center space-x-4">
          <img
            src={facultyData.profilePicture || "/default-profile.png"}
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Interactive Cards */}
          <div className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition">
            <h2 className="text-xl font-bold mb-2">Performance Overview</h2>
            <PieChart width={200} height={200}>
              <Pie
                data={[
                  { name: "Rating", value: facultyData.performance.rating },
                  { name: "Reviews", value: facultyData.performance.reviews },
                ]}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                <Cell fill="#8884d8" />
                <Cell fill="#82ca9d" />
              </Pie>
              <Tooltip />
            </PieChart>
          </div>

          <div className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition ">
            <h2 className="text-xl font-bold mb-2">Course Statistics</h2>
            <BarChart width={300} height={200} data={courseData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="students" fill="#8884d8" />
            </BarChart>
          </div>

          {/* Search Bar */}
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-xl font-bold mb-2">Search Announcements</h2>
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-2 border rounded-md "
            />
            <ul className="mt-3 text-gray-600 ">
              {facultyData.announcements.map((announcement, index) => (
                <li key={index} className="mb-1">
                  {announcement}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Accordion Sections */}
        <div className="mt-6">
          <details className="bg-white shadow rounded-lg mb-4 p-4">
            <summary className="text-lg font-bold cursor-pointer">Research Publications</summary>
            <ul className="mt-2">
              {facultyData.researchPublications.map((publication, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={publication.link}
                    className="text-blue-500 hover:underline "
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {publication.title}
                  </a>
                </li>
              ))}
            </ul>
          </details>

          <details className="bg-white shadow rounded-lg p-4">
            <summary className="text-lg font-bold cursor-pointer">Task Management</summary>
            <ul className="mt-2">
              {facultyData.tasks.map((task, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center border-b py-2 dark:border-gray-600"
                >
                  <span>{task.title}</span>
                  <span
                    className={`${
                      task.status === "Pending" ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    {task.status}
                  </span>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 fixed bottom-0 w-full text-white text-center py-4 dark:bg-gray-900">
        <p>&copy; 2024 College ERP. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default FacultyDashboard;
