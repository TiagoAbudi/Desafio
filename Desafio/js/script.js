let inputSearch = null,
  buttonSearch = null,
  panelUsers = null,
  panelStatistics = null,
  users = [];

window.addEventListener('load', async () => {
  mapElements();
  await fetchUsers();

  addEvents();
});

function mapElements() {
  inputSearch = document.querySelector('#inputSearch');
  buttonSearch = document.querySelector('#buttonSearch');
  panelUsers = document.querySelector('#panelUsers');
  panelStatistics = document.querySelector('#panelStatistics');
}

async function fetchUsers() {
  const res = await fetch(
    'https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo'
  );
  const json = await res.json();
}

function addEvents(){
  inputSearch.addEventListener('keyup', handleKeyUP)
}

