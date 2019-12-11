document.addEventListener('DOMContentLoaded', (event) => {
	// your code here

	let submit = document.getElementById('submit');
	submit.addEventListener('click', (event) => {
		event.preventDefault();

		let ul = document.getElementById('tasks');
		let li = document.createElement('li');
		let taskDesc = document.getElementById('new-task-description');
		let taskDuration = document.getElementById('new-task-duration');
		li.innerText = `${taskDesc.value} - ${taskDuration.value} `;

		let priority = document.getElementById('priority');
		if (priority.value === 'high') {
			li.setAttribute('data-priority', '1');
			li.style.color = 'red';
		} else if (priority.value === 'medium') {
			li.setAttribute('data-priority', '2');
			li.style.color = 'yellow';
		} else {
			li.setAttribute('data-priority', '3');
			li.style.color = 'green';
		}

		let btnDelete = document.createElement('button');
		btnDelete.innerText = 'X';
		btnDelete.onclick = function(event) {
			ul.removeChild(li);
		};

		let btnEdit = document.createElement('button');
		btnEdit.innerText = 'E';
		btnEdit.onclick = function(event) {
			taskDuration.value = li.innerText.split(' - ')[1].replace(' XES', '');
			taskDesc.value = li.innerText.split(' - ')[0];
		};

		let btnSave = document.createElement('button');
		btnSave.innerText = 'S';
		btnSave.onclick = function(event) {
			li.innerText = `${taskDesc.value} - ${taskDuration.value} `;
			li.appendChild(btnDelete);
			li.appendChild(btnEdit);
			li.appendChild(btnSave);
		};

		li.appendChild(btnDelete);
		li.appendChild(btnEdit);
		li.appendChild(btnSave);
		ul.appendChild(li);

		let ascending = document.getElementById('ascending');
		let descending = document.getElementById('descending');

		ascending.addEventListener('click', () => {
			Array.from(document.querySelectorAll('ul > li[data-priority]'))
				.sort(({ dataset: { priority: a } }, { dataset: { priority: b } }) =>
					a.localeCompare(b)
				) // To reverse it, use `b.localeCompare(a)`.
				.forEach((item) => item.parentNode.appendChild(item));
		});
	});

	descending.addEventListener('click', () => {
		Array.from(document.querySelectorAll('ul > li[data-priority]'))
			.sort(({ dataset: { priority: a } }, { dataset: { priority: b } }) =>
				b.localeCompare(a)
			) // To reverse it, use `b.localeCompare(a)`.
			.forEach((item) => item.parentNode.appendChild(item));
	});
});
