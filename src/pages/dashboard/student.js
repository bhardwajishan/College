import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const StudentDashboard = () => {
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
        const data = {
            "name": "Ishan Bhardwaj",
            "id": "S12345",
            "department": "Computer Science",
            "batch": "2021-2025",
            "attendance": { 
              "present": 75, 
              "total": 80, 
              "percentage": 93.75 
            },
            "examReports": [
              { "subject": "Math", "grade": "A", "marks": 92, "maxMarks": 100 },
              { "subject": "Physics", "grade": "B+", "marks": 85, "maxMarks": 100 },
              { "subject": "Chemistry", "grade": "A-", "marks": 89, "maxMarks": 100 }
            ],
            "feeDetails": { 
              "due": 10000, 
              "paid": 40000, 
              "total": 50000, 
              "lastPaidDate": "2024-10-10" 
            },
            "announcements": [
              "Midterm exams start on 2024-12-10.",
              "Campus placement drive on 2024-12-15.",
              "Library hours extended during exam week."
            ],
            "courseMaterials": [
              { "name": "Discrete Mathematics Notes", "link": "https://example.com/discrete-math.pdf" },
              { "name": "Data Structures Slides", "link": "https://example.com/data-structures.pdf" },
              { "name": "Operating Systems Labs", "link": "https://example.com/os-labs.zip" }
            ],
            "assignments": [
              {
                "subject": "Data Structures",
                "title": "Tree Traversals Assignment",
                "dueDate": "2024-11-30",
                "status": "Pending"
              },
              {
                "subject": "Operating Systems",
                "title": "Process Scheduling Algorithms",
                "dueDate": "2024-12-05",
                "status": "Submitted"
              }
            ],
            "examSchedule": [
              {
                "subject": "Math",
                "date": "2024-12-10",
                "time": "10:00 AM - 1:00 PM",
                "location": "Room 101"
              },
              {
                "subject": "Physics",
                "date": "2024-12-12",
                "time": "10:00 AM - 1:00 PM",
                "location": "Room 102"
              }
            ],
            "clubs": [
              {
                "name": "Coding Club",
                "role": "Member",
                "upcomingEvents": ["Hackathon on 2024-12-20"]
              },
              {
                "name": "Robotics Society",
                "role": "Participant",
                "upcomingEvents": ["Robotics Workshop on 2024-12-22"]
              }
            ],
            "profilePicture": "https://example.com/images/johndoe.jpg"
          }
        setStudentData(data)
        setLoading(false)
    };

    fetchData();
  }, []);

  const handleLogout = ()=>{
    router.push("/")
  }

  if (loading) return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  if (error) return <div className="text-red-500 text-center mt-6">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-500 text-white py-4 px-6 flex justify-between items-center">
  <div>
    <h1 className="text-2xl font-bold">Welcome, {studentData.name}</h1>
    <p className="text-sm">Student ID: {studentData.id}</p>
  </div>
  
  <div className="flex items-center space-x-4">

    {/* Logout Button */}
    <button
      onClick={handleLogout}
      className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md text-sm font-medium"
    >
      Logout
    </button>
  </div>
</header>


      {/* Main Content */}
      <main className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Attendance Section */}
          <div className="bg-white shadow rounded p-4">
            <h2 className="text-xl font-bold mb-2">Attendance</h2>
            <p className="text-gray-600">Present: {studentData.attendance.present} / Total: {studentData.attendance.total}</p>
            <p className="text-gray-600">Percentage: {studentData.attendance.percentage}%</p>
            <button className="mt-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              View Attendance
            </button>
          </div>

          {/* Exam Reports Section */}
          <div className="bg-white shadow rounded p-4">
            <h2 className="text-xl font-bold mb-2">Exam Reports</h2>
            <ul className="text-gray-600">
              {studentData.examReports.map((report, index) => (
                <li key={index} className="mb-1">
                  {report.subject}: {report.grade} ({report.marks}/{report.maxMarks})
                </li>
              ))}
            </ul>
            <button className="mt-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              View Detailed Report
            </button>
          </div>

          {/* Fee Details Section */}
          <div className="bg-white shadow rounded p-4">
            <h2 className="text-xl font-bold mb-2">Fee Details</h2>
            <p className="text-gray-600">Paid: ₹{studentData.feeDetails.paid}</p>
            <p className="text-gray-600">Due: ₹{studentData.feeDetails.due}</p>
            <p className="text-gray-600">Total: ₹{studentData.feeDetails.total}</p>
            <button className="mt-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              View Fee Details
            </button>
          </div>

          {/* Announcements Section */}
          <div className="bg-white shadow rounded p-4">
            <h2 className="text-xl font-bold mb-2">Announcements</h2>
            <ul className="text-gray-600">
              {studentData.announcements.map((announcement, index) => (
                <li key={index} className="mb-1">
                  {announcement}
                </li>
              ))}
            </ul>
          </div>

          {/* Course Materials Section */}
          <div className="bg-white shadow rounded p-4">
            <h2 className="text-xl font-bold mb-2">Course Materials</h2>
            <ul className="text-gray-600">
              {studentData.courseMaterials.map((material, index) => (
                <li key={index} className="mb-1">
                  <a href={material.link} target="_blank" className="text-blue-500 hover:underline">
                    {material.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Assignments Section */}
          <div className="bg-white shadow rounded p-4">
            <h2 className="text-xl font-bold mb-2">Assignments</h2>
            <ul className="space-y-2">
              {studentData.assignments.map((assignment, index) => (
                <li
                  key={index}
                  className={`p-3 rounded shadow ${
                    assignment.status === "Pending" ? "bg-red-100" : "bg-green-100"
                  }`}
                >
                  <p className="font-medium">{assignment.title}</p>
                  <p className="text-sm text-gray-600">Due: {assignment.dueDate}</p>
                  <p className={`text-sm font-medium ${assignment.status === "Pending" ? "text-red-500" : "text-green-500"}`}>
                    {assignment.status}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4 mt-6">
        <p>&copy; 2024 College ERP. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default StudentDashboard;
