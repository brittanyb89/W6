const user = document.querySelector("#users");

export const renderUsers = (usersData) => {
  usersData.forEach((user) => {
    const li = document.createElement("li");
    li.innerText = user.login;
  });
};
