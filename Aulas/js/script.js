let inputSearch = null,
  buttonSearch = null,
  panelUsers = null,
  panelStatistics = null,
  users = [];

window.addEventListener("load", async () => {
    mapElements();
    await fetchUsers();
});

async function fetchUsers() {
  const res = await fetch(
    "https://randomuser.me/api/?seed=javascript&results=100&nat=BRnoinfo"
  );
  const json = await res.json();
  console.log(json);
}

function mapElements() {
  inputSearch = document.querySelector("#inputSearch");
  buttonSearch = document.querySelector("#buttonSearch");
  panelUsers = document.querySelector("#panelUsers");
  panelStatistics = document.querySelector("#panelStatistics");
}
