
function StudentProfile() {
  const student = {
    name: "Hubert Labrada",
    studentId: "204008364",
    program: "BS Computer Science",
  };

  return (
    <section>
      <h2>Student Profile</h2>
      <p>Name: {student.name}</p>
      <p>Student ID: {student.studentId}</p>
      <p>Program: {student.program}</p>
    </section>
  );
}

export default StudentProfile;
