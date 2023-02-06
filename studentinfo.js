function getyearlist() {
  const data = JSON.parse(localStorage.getItem("StudentInfo"));

  const year = [];
  const course = [];
  const tempcourse = "<option value= 'select Course'> Select Course</option>";
  document.getElementById("courselistselect").innerHTML = tempcourse;
  const temptag = "<option value= 'select Year'> Select Exam Year</option>";
  document.getElementById("examyear").innerHTML = temptag;

  data.map((student) => {
    const Marks = student.marks.map((markslist) => {
      return markslist.year;
    });
    const courseyear = Marks.filter((years) => {
      return !year.includes(years);
    });
    year.push(...courseyear);

    !course.includes(student.course) && course.push(student.course);
  });
  for (let i = 0; i < course.length; i++) {
    const clist = "<option value=" + course[i] + ">" + course[i] + "</option>";
    document.getElementById("courselistselect").innerHTML += clist;
  }

  for (let i = 0; i < year.length; i++) {
    const list = "<option value=" + year[i] + ">" + year[i] + "</option>";
    document.getElementById("examyear").innerHTML += list;
  }
}

function displayInfo() {
  const data = JSON.parse(localStorage.getItem("StudentInfo"));

  const examyear = document.getElementById("examyear").value;
  const Course = document.getElementById("courselistselect").value;

  if (examyear !== "select Year" && Course !== "select Course") {
    document.getElementById("studentInfoTable").style.visibility = "visible";
    const student = data.map((student) => {
      const yearfound = student.marks.find((value) => {
        return value.year === examyear;
      });

      return { ...student, ...yearfound };
    });

    const filteredStudentCourse = student.filter((data) => {
      if (data.hasOwnProperty("year")) {
        data.year === examyear;
        return data;
      }
    });
    const filteredStudent = filteredStudentCourse.filter((data) => {
      if (data.course === Course) {
        data.course === Course;
        return data;
      }
    });

    if (filteredStudent.length > 0 && filteredStudentCourse.length > 0) {
      let highestMarks = 0;
      let highestAttendece = 0;
      let highestAttendeceId;
      let highestMarksId;
      for (let studentData of filteredStudent) {
        if (studentData.marksObtained > highestMarks) {
          highestMarks = studentData.marksObtained;
          highestMarksId = studentData.studentId;
        }
        if (studentData.attendece > highestAttendece) {
          highestAttendece = studentData.attendece;
          highestAttendeceId = studentData.studentId;
        }
      }

      let tableData;
      document.getElementById("studenttabledata").innerHTML = "";
      document.getElementById("studentInfoTable").style.visibility = "visible";
      for (let i = 0; i < filteredStudent.length; i++) {
        let highlightAttendece;
        let highlightmarks;
        if (highestMarksId === filteredStudent[i].studentId) {
          highlightmarks = "table-danger";
        }
        if (highestAttendeceId === filteredStudent[i].studentId) {
          highlightAttendece = "table-danger";
        }
        tableData =
          "<tr > <th scope='row'>" +
          filteredStudent[i].studentId +
          "</th> <th &nsbn>" +
          filteredStudent[i].studentName +
          "</th> <th>" +
          filteredStudent[i].course +
          "</th> <th>" +
          filteredStudent[i].year +
          "</th> <th class=" +
          highlightmarks +
          ">" +
          filteredStudent[i].marksObtained +
          "%</th> <th class=" +
          highlightAttendece +
          ">" +
          filteredStudent[i].attendece +
          "%</th> </tr>";
        document.getElementById("studenttabledata").innerHTML += tableData;
      }
    } else {
      document.getElementById("studenttabledata").innerHTML = "";
      document.getElementById("studentInfoTable").style.visibility = "hidden";
      alert("student information not found");
    }
  }
}

function saveToFile() {
  let studentId = document.getElementById("studentID").value;
  let studentName = document.getElementById("studentname").value;
  let course = document.getElementById("courselistselect").value;
  let courseDuration = document.getElementById("courseDurationSelect").value;
  let year = document.getElementById("examYear").value;
  let marksObtained = document.getElementById("marksObtained").value;
  let attendece = document.getElementById("attendence").value;

  const data = JSON.parse(localStorage.getItem("StudentInfo"));
  const userFound = data.find((student) => student.studentId === studentId);

  if (!userFound) {
    if (
      studentId != "" &&
      studentName != "" &&
      course != "" &&
      courseDuration != "" &&
      year != "" &&
      marksObtained != "" &&
      attendece != ""
    ) {
      const studentInfo = {
        studentId,
        studentName,
        course,
        courseDuration,
        marks: [
          {
            year,
            marksObtained,
            attendece,
          },
        ],
      };

      const student = JSON.parse(localStorage.getItem("StudentInfo"));
      student.push(studentInfo);
      localStorage.setItem("StudentInfo", JSON.stringify(student));
      alert("Student Info updated!!!");
    } else {
      alert("Enter valid Student information");
    }
  } else {
    alert("Student ID is already available!");
  }
}

function updateStudentInformation() {
  const data = JSON.parse(localStorage.getItem("StudentInfo"));
  const tempyear = document.getElementById("examYear").value;
  const tempmarks = document.getElementById("marksObtained").value;
  const tempattendence = document.getElementById("attendence").value;
  const tempcourseduration = document.getElementById("selectedYear").value[0];
  const tempstudentid = document.getElementById("studentID").value;

  const studentInfo = data.find((student) => {
    return student.studentId === tempstudentid;
  });

  if (tempyear != "" && tempmarks != "" && tempattendence != "") {
    const Marks = studentInfo.marks.find((markslist) => {
      return markslist.year === tempyear;
    });

    if (
      studentInfo.marks.length < tempcourseduration &&
      tempcourseduration !== studentInfo.marks.length
    ) {
      if (Marks !== undefined && Marks.year === tempyear) {
        const res = confirm("Are You sure? You Want to update the data!");

        if (res === true) {
          Marks.marksObtained = tempmarks;
          Marks.attendece = tempattendence;

          const updatedStudentData = data.map((student) => {
            return student.studentId === studentInfo.studentId
              ? studentInfo
              : student;
          });
          localStorage.setItem(
            "StudentInfo",
            JSON.stringify(updatedStudentData)
          );
          alert("Student Info updated!!!");
        } else {
          alert("Student Info not updated!!!");
        }
      } else {
        const res = confirm(
          "Are You sure? You Want to add new Exam Year info!"
        );

        if (res === true) {
          const userMarks = {
            year: tempyear,
            marksObtained: tempmarks,
            attendece: tempattendence,
          };
          studentInfo.marks.push(userMarks);

          const updatedStudentData = data.map((student) => {
            return student.studentId === studentInfo.studentId
              ? studentInfo
              : student;
          });
          localStorage.setItem(
            "StudentInfo",
            JSON.stringify(updatedStudentData)
          );
          alert("Student Info updated!!!");
        } else {
          alert("Student Info not updated!!!");
        }
      }
    } else {
      if (Marks !== undefined) {
        const res = confirm(
          "As per the record Student already completed the course! Do you want to update the details?"
        );

        if (res === true) {
          Marks.marksObtained = tempmarks;
          Marks.attendece = tempattendence;
          const updatedmarks = studentInfo.marks.map((data) => {
            return data.year === tempyear ? Marks : data;
          });
          studentInfo.marks = updatedmarks;

          const updatedStudentData = data.map((student) => {
            return student.studentId === studentInfo.studentId
              ? studentInfo
              : student;
          });
          localStorage.setItem(
            "StudentInfo",
            JSON.stringify(updatedStudentData)
          );
          alert("Student Info updated!!!");
        }
      } else {
        alert(
          "Student already Complated Course and Entered Exam Year is not Found in Database! "
        );
      }
    }
  } else {
    alert("Enter valid Student information");
  }
}
