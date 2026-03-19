document.getElementById('dataForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        value: document.getElementById('value').value
    };
    fetch('/api/upload', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    }).then(response => response.json())
      .then(() => loadData());
});

function loadData() {
    fetch('/api/data')
        .then(response => response.json())
        .then(data => {
            let table = document.getElementById('dataTable');
            table.innerHTML = '';
            data.forEach(row => {
                let tr = document.createElement('tr');
                tr.innerHTML = `<td>${row.name}</td><td>${row.value}</td>`;
                table.appendChild(tr);
            });
        });
}
