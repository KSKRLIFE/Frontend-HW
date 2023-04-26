const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const regStatus = document.getElementById("reg-status").value;
  const courses = document.getElementsByName("courses");
  const text = document.getElementById("tarea").value;
  const selectedCourses = [];
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].checked) {
      selectedCourses.push(courses[i].value);
    }
  }
  const registrationStatus = regStatus == 1 ? "Registered" : "Not Registered";

  console.groupCollapsed("========= Form Submission =========");
  console.log(name ? "Name : " + name : "Name : no submission");
  console.log(email ? "Email : " + email : "Email : no submission");
  console.log("Registration Status:", registrationStatus);
  console.log("Courses:", selectedCourses.join(", "));
  console.log(text ? "Text : " + text : "Text : no submission");
  console.groupEnd();
});
