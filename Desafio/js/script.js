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
  users = json.results
    .map(({ login, name, dob, gender, picture }) => {
      const fullName = `${name.first} ${name.last}`;
      return {
        id: login.uuid,
        name: fullName,
        nameLowerCase: fullName.toLowerCase(),
        age: dob.age,
        gender: gender,
        picture: picture.large,
      };
    })
    .sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
}

function addEvents() {
  inputSearch.addEventListener('keyup', handleKeyUP);
}

function handleKeyUP(event) {
  const currentKey = event.key;
  if (currentKey !== 'Enter') {
    return;
  }
  const filterText = event.target.value;
  if (filterText.trim() !== '') {
    filterUsers(filterText);
  }
}

function filterUsers(filterText) {
  const filterTextLowerCase = filterText.toLowerCase();

  const filteredUsers = users.filter((user) => {
    return user.nameLowerCase.includes(filterTextLowerCase);
  });

  renderUsers(filteredUsers);
  renderStatistics(filtered)
}

function renderUsers(users) {
  panelUsers.innerHTML = ' ';

  const h2 = document.createElement('h2');
  h2.textContent = `${users.length} usuário(s) encontrado(s)`;

  const ul = document.createElement('ul');

  users.forEach((user) => {
    const li = document.createElement('li');
    li.classList.add('flex-row');
    li.classList.add('space-bottom');

    const img = `<img class="avatar" src="${user.picture}" alt="${user.name}"/>`;
    const userData = `<span>${user.name}, ${user.age} anos</span>`;

    li.innerHTML = `${img}${userData}`;

    ul.appendChild(li);
  });

  panelUsers.appendChild(h2);
  panelUsers.appendChild(ul);
}
