document.getElementById("timetableForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const classrooms = e.target.classrooms.value;
  const batches = e.target.batches.value;
  const subjects = e.target.subjects.value.split(",");
  const maxClasses = e.target.maxClasses.value;
  const faculties = e.target.faculties.value.split(",");

  let output = "<table border='1' cellpadding='5'><tr><th>Day</th>";
  for (let i = 1; i <= maxClasses; i++) {
    output += `<th>Class ${i}</th>`;
  }
  output += "</tr>";

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  days.forEach(day => {
    output += `<tr><td>${day}</td>`;
    for (let i = 0; i < maxClasses; i++) {
      let subject = subjects[Math.floor(Math.random() * subjects.length)].trim();
      let faculty = faculties[Math.floor(Math.random() * faculties.length)].trim();
      output += `<td>${subject} (${faculty})</td>`;
    }
    output += "</tr>";
  });

  output += "</table>";
  document.getElementById("output").innerHTML = output;
});
