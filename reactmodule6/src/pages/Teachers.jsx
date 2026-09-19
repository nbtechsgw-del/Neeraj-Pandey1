function Teachers() {
  const teachers = [
    {
      id: 1,
      name: "Nitin Sir",
      subject: "React JS",
    },
    {
      id: 2,
      name: "Amit Sir",
      subject: "SQL",
    },
    {
      id: 3,
      name: "Priya Ma'am",
      subject: "JavaScript",
    },
  ];

  return (
    <div className="page">
      <h1>Teachers</h1>

      <div className="student-list">
        {teachers.map((teacher) => (
          <div className="student-card" key={teacher.id}>
            <h3>{teacher.name}</h3>

            <p>Teacher ID: {teacher.id}</p>

            <p>Subject: {teacher.subject}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teachers;