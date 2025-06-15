function loadData(key) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}

function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function renderList(listElement, items) {
  listElement.innerHTML = '';
  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item;
    li.addEventListener('click', () => {
      items.splice(index, 1);
      saveData(listElement.id, items);
      renderList(listElement, items);
    });
    listElement.appendChild(li);
  });
}

function setupZone(zone) {
  const form = document.getElementById(`${zone}-form`);
  const input = document.getElementById(`${zone}-input`);
  const list = document.getElementById(`${zone}-list`);

  const items = loadData(list.id);
  renderList(list, items);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    items.push(input.value);
    input.value = '';
    saveData(list.id, items);
    renderList(list, items);
  });
}

function showZone(id) {
  document.querySelectorAll('.zone').forEach((zone) => zone.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

setupZone('training');
setupZone('championship');

showZone('training');

document.getElementById('training-btn').addEventListener('click', () => showZone('training'));
document.getElementById('championship-btn').addEventListener('click', () => showZone('championship'));
