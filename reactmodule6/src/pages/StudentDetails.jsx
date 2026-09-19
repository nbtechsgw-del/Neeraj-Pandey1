import { Link, useParams } from "react-router-dom";

function StudentDetails() {
  const { id } = useParams();

  return (
    <div className="page">
      <h1>Student Details</h1>

      <div className="student-card">
        <h2>Student ID: {id}</h2>

        <p>
          This student ID was received from the URL.
        </p>

        <p>
          URL Example:
        </p>

        <code>
          /students/{id}
        </code>
      </div>

      <Link to="/students">
        <button>Back to Students</button>
      </Link>
    </div>
  );
}

export default StudentDetails;