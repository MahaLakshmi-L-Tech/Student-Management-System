# Student-Management-System
Student Result Management System:
This is Major Project on Student result management. In this project we can enter all Students Data like Student ID, Student Name, there Marks, there Year of Studies, there Attendance. 
Using this platform, a student can search for result using Student ID and also can view score board of an entire course.
Using this platform, Admin can add student details and also update student details. Along with it they can see score board of the students.
This platform also contains scoreboard where the student’s maximum marks and maximum attendance percentage will be highlighted.

About The Project:

Technologies Used:  HTML, CSS, Bootstrap, JavaScript, JSON.


How to run:
1.	Open the project folder in VS code.
2.	Go to Home page(index.html) in vs code, then right click on the page.
3.	Select “Open with Live server” option or press “ALT+L+O”
4.	The Home page will open in browser.
 
Page 1: Home Page
	This is default Page [index.html].  This page will be accessible by student or Admin people, where student can find the results information about the course using student ID and Admin can login and do task which are available for them like Add/Update Student and view course details in scoreboard.  
 

Page 2: Score Board
In this page, Student /Admin can search for particular course and year to see the student’s details in that search criteria. Upon the search the list of student information’s will be shown in along with maximum marks and maximum attendance will be highlighted to help on finding the best result student information. 
User can navigate back from this page just by clicking on home button on the page.


 

Page 3: Admin Login
	After clicking on “Admin Login” from Home page, admin user is asked for email and password. Once these details will be added and clicked on login button. The given details will be validated and login only if the details are valid else will show the error message to the user.
  
 

Page 4: Admin Dashboard
	This Page is for Admin dashboard after the successful login. Here Admin has the access for Updating / Adding Student information. Also student’s scoreboard is accessible by admin from this page. 
 

Page 5: Add Student Info
 Admin can access this page to add a new Student information. The Information will be stored and can be seen in scoreboard after successfully adding the student.
 

Page 6: Update Student Info
	This page used to update student information. Admin can search student by Student ID. If student ID is found, then student details will be shown so that admin can update the details like Exam year, Over all Marks, attendance.
 
Technical Details:
1.	The Login and Students’ data are stored in JSON files.
2.	Login is validated based on the JSON file data and will be shown error message if not matched.
3.	The Newly added/ updated Student information is stored in browser’s local storage, as we are not using any database and didn’t find any logic to store the data back to JSON file.
4.	Once the browser is closed then the added/ updated details will be removed from browser’s local storage.


