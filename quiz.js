document.getElementById("quizForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let subject = document.getElementById("subject").value;
  let marks = parseInt(document.getElementById("marks").value);
  let state = document.getElementById("state").value;
  let city = document.getElementById("city").value;

  let student = {
    subject: subject,
    marks: marks,
    state: state,
    city: city
  };

  localStorage.setItem("studentData", JSON.stringify(student));
  window.location.href = "result.html";
});
