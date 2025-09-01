document.getElementById("quizForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let subject = document.getElementById("subject").value; // now directly course
  let marks = parseInt(document.getElementById("marks").value);
  let state = document.getElementById("state").value;
  let city = document.getElementById("city").value;

  let student = {
    course: subject,   // already course name
    marks: marks,
    state: state,
    city: city
  };

  localStorage.setItem("studentData", JSON.stringify(student));
  window.location.href = "result.html";
});
