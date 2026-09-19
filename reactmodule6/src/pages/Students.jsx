import { Link } from "react-router-dom";

function Students() {
  const students = [
    {
      id: 101,
      name: "Rahul",
      course: "MCA",
    },
    {
      id: 102,
      name: "Aman",
      course: "BCA",
    },
    {
      id: 103,
      name: "Priya",
      course: "B.Tech",
    },
  ];

  return (
    <div className="page">
      <h1>Students</h1>

      <div className="student-list">
        {students.map((student) => (
          <div className="student-card" key={student.id}>
            <h3>{student.name}</h3>

            <p>Student ID: {student.id}</p>

            <p>Course: {student.course}</p>

            <Link to={`/students/${student.id}`}>
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Students;