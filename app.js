// Init Github
const github = new Github();

// Init UI
const ui = new UI();

// Search input
const SearchUser = document.getElementById("searchUser");

// Search input event listener
SearchUser.addEventListener("keyup", (e) => {
  const userText = e.target.value;

  if (userText !== "") {
    //   Make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message == "Not Found") {
        // Show Alert

        ui.showAlert("User not found", "alert alert-danger");
        setTimeout(ui.clearAlert, 2000);
      } else {
        // Show profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
        console.log(data.repos);
      }
    });
  } else {
    ui.clearProfile();
  }
});
