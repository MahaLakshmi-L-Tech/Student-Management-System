function studentSearchbyId() {
  const data = JSON.parse(localStorage.getItem("StudentInfo"));

  const studentid = document.getElementById("studentid").value;

  const idfound = data.find((stdid) => {
    return stdid.studentId === studentid;
  });

  if (idfound != undefined) {
    document.getElementById("studentsearchdata").innerHTML = "";
    document.getElementById("studentsearchTable").style.visibility = "visible";
    for (const user of idfound.marks) {
      tableData =
        "<tr > <th scope='row'>" +
        idfound.studentId +
        "</th> <th &nsbn>" +
        idfound.studentName +
        "</th> <th>" +
        idfound.course +
        "</th> <th>" +
        user.year +
        "</th> <th>" +
        user.marksObtained +
        "%</th> <th>" +
        user.attendece +
        "%</th> </tr>";
      document.getElementById("studentsearchdata").innerHTML += tableData;
    }
  } else {
    alert("Student details not Found!");
  }
}

function studentUpdatebyId() {
  const data = JSON.parse(localStorage.getItem("StudentInfo"));
  const studentid = document.getElementById("studentsearchid").value;

  const idfound = data.find((stdid) => {
    return stdid.studentId === studentid;
  });

  if (idfound != undefined) {
    document.getElementById("studentID").value = idfound.studentId;
    document.getElementById("studentname").value = idfound.studentName;
    document.getElementById("selectedCourse").value = idfound.course;
    document.getElementById("selectedYear").value =
      idfound.courseDuration + " Years";
  } else {
    alert("Student details not Found! Add Student information");
  }
}

// Storing data to localstorage from JSON file.
function getStudentInfo() {
  fetch("studentinfo.json")
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      localStorage.setItem("StudentInfo", JSON.stringify(data));
      localStorage.setItem("UserEmail", "");
    })

    .catch(function (err) {
      console.log("error: " + err);
    });
}
