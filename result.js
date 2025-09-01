let student = JSON.parse(localStorage.getItem("studentData"));

if (student) {
  document.getElementById("career").innerHTML =
    `You should pursue: <b>${student.subject}</b><br>
     Your 12th Marks: <b>${student.marks}%</b><br>
     Preferred State: <b>${student.state}</b><br>
     Preferred City: <b>${student.city}</b>`;

  // Load colleges.json
  fetch("college.json")
    .then(response => response.json())
    .then(data => {
      let list = document.getElementById("collegeList");

      let filtered = data.filter(college =>
        college.state.toLowerCase() === student.state.toLowerCase() &&
        college.city.toLowerCase() === student.city.toLowerCase() &&
        student.marks >= college.cutoff
      );

      if (filtered.length === 0) {
        list.innerHTML = "<li>No colleges found for your input.</li>";
      } else {
        filtered.forEach(college => {
          let li = document.createElement("li");
          li.textContent = `${college.name} - ${college.course} (${college.city}, ${college.state}) Cutoff: ${college.cutoff}%`;
          list.appendChild(li);
        });
      }
    })
    .catch(err => console.error("Error loading colleges:", err));
}
