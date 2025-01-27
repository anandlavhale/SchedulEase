// Sample teacher data
const teachers = [
  {
    name: "Anand Lavhale",
    status: "Available",
    location: "Classroom 101",
  },
  {
    name: "Pawan Patil",
    status: "Unavailable",
    location: "Library",
  },
  {
    name: "Vedant Nehulkar",
    status: "expired",
    location: "N/A",
  },
  {
    name: "Yashada",
    status: "Unavailable",
    location: "Staff Room",
  },
];

// Function to display teachers in the table
function populateTeachersTable() {
  const tableBody = document.getElementById("teacher-data");
  tableBody.innerHTML = ""; // Clear existing rows

  teachers.forEach((teacher) => {
    const row = document.createElement("tr");

    // Name column
    const nameCell = document.createElement("td");
    nameCell.textContent = teacher.name;

    // Status column with color coding
    const statusCell = document.createElement("td");
    statusCell.textContent = teacher.status;
    statusCell.className =
      teacher.status === "Available" ? "status-green" : "status-red";

    // Location column
    const locationCell = document.createElement("td");
    locationCell.textContent = teacher.location;

    // Append cells to row
    row.appendChild(nameCell);
    row.appendChild(statusCell);
    row.appendChild(locationCell);

    // Append row to table body
    tableBody.appendChild(row);
  });
}

// Call the function to populate the table
document.addEventListener("DOMContentLoaded", populateTeachersTable);
