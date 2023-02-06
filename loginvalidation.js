function validadmin() {
  fetch("admininfo.json")
    .then(function (response) {
      return response.json();
    })

    .then(function (data) {
      const emailaddress = document.getElementById("emailaddress").value;
      const userpassword = document.getElementById("Userpassword").value;

      const userfound = data.find((user) => {
        return user.Email === emailaddress && user.Password === userpassword;
      });

      if (userfound) {
        localStorage.setItem("UserEmail", emailaddress);
        window.location = "/admin-dashboard.html";
      } else {
        document.getElementById("alertmessage").style.display = "flex";
      }
    })
    .catch(function (err) {
      console.log("error: " + err);
    });
}

function updateEmail() {
  document.getElementById("logId").textContent =
    localStorage.getItem("UserEmail");
}
