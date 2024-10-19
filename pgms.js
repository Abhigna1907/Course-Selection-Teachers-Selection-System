document.getElementById('submit-courses').addEventListener('click', () => {
  const selectedCourses = {
      theoryCourse1: document.getElementById('theory-course-1').value,
      teacher1: document.getElementById('teacher-1').value,
      theoryCourse2: document.getElementById('theory-course-2').value,
      teacher2: document.getElementById('teacher-2').value,
      theoryCourse3: document.getElementById('theory-course-3').value,
      teacher3: document.getElementById('teacher-3').value,
      theoryCourse4: document.getElementById('theory-course-4').value,
      teacher4: document.getElementById('teacher-4').value,
  };
  
  console.log("Selected Courses and Teachers:", selectedCourses);

  // In a real system, you would submit this data to the backend
  alert("Courses and Teachers submitted successfully!");
});

function giveFeedback(teacherId) {
  let feedback = prompt("Please provide your feedback for the teacher:");
  if (feedback) {
      console.log(`Feedback for teacher ${teacherId}: ${feedback}`);
      alert("Feedback submitted successfully!");
      // In a real system, you'd save this feedback to a database
  }
}
