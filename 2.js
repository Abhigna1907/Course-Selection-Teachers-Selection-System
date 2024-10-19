document.addEventListener('DOMContentLoaded', () => {
    fetchCourses();
  });
  
  function fetchCourses() {
    fetch('/api/courses')
      .then(response => response.json())
      .then(data => {
        populateCourses(data);
      });
  }
  
  function populateCourses(data) {
    const theoryCoursesDiv = document.getElementById('theory-courses');
    const labCoursesDiv = document.getElementById('lab-courses');
  
    // Create dropdowns for theory courses
    data.theory.forEach(course => {
      const selectElement = createCourseSelect(course, 'theory');
      theoryCoursesDiv.appendChild(selectElement);
    });
  
    // Create dropdowns for lab courses
    data.lab.forEach(course => {
      const selectElement = createCourseSelect(course, 'lab');
      labCoursesDiv.appendChild(selectElement);
    });
  }
  
  function createCourseSelect(course, type) {
    const div = document.createElement('div');
    div.innerHTML = `
      <label for="${type}-${course}">${course}:</label>
      <select id="${type}-${course}" onchange="fetchTeachers('${course}', this)">
        <option value="">--Select Teacher--</option>
      </select>
    `;
    return div;
  }
  
  function fetchTeachers(course, selectElement) {
    fetch(`/api/teachers/${course}`)
      .then(response => response.json())
      .then(teachers => {
        // Populate the select dropdown with teachers
        selectElement.innerHTML = teachers.map(teacher => `<option value="${teacher}">${teacher}</option>`).join('');
      });
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    // Get selected courses and teachers, send to server
    console.log("Form submitted!");
  }
  