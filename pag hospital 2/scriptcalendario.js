document.addEventListener('DOMContentLoaded', () => {
    const calendarContainer = document.getElementById('calendar');
    const currentDate = new Date();

    renderCalendar(currentDate.getMonth(), currentDate.getFullYear(), calendarContainer);

    const prevBtn = document.querySelector('.left-arrow');
    const nextBtn = document.querySelector('.right-arrow');

    prevBtn.addEventListener('click', () => changeMonth('prev', calendarContainer));
    nextBtn.addEventListener('click', () => changeMonth('next', calendarContainer));
});

function renderCalendar(month, year, container) {
    container.innerHTML = '';

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfWeek = new Date(year, month, 1).getDay();
    const monthName = new Intl.DateTimeFormat('es', { month: 'long' }).format(new Date(year, month, 1));

    const header = document.createElement('div');
    header.classList.add('month-name');
    header.textContent = `${monthName} ${year}`;
    container.appendChild(header);

    const daysContainer = document.createElement('div');
    daysContainer.classList.add('calendar-days');

    const daysOfWeek = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    daysOfWeek.forEach(day => {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day', 'day-header');
        dayElement.textContent = day;
        daysContainer.appendChild(dayElement);
    });

    container.appendChild(daysContainer);

    let dayCount = 1;
    const totalCells = 42; // 6 rows * 7 columns

    for (let i = 0; i < totalCells; i++) {
        if (i >= firstDayOfWeek && dayCount <= daysInMonth) {
            const dayElement = document.createElement('div');
            dayElement.classList.add('day');
            dayElement.textContent = dayCount;
            daysContainer.appendChild(dayElement);
            dayCount++;
        } else {
            const emptyDay = document.createElement('div');
            emptyDay.classList.add('day', 'empty');
            daysContainer.appendChild(emptyDay);
        }

        if ((i + 1) % 7 === 0 || i === totalCells - 1) {
            daysContainer.appendChild(document.createElement('br')); // Salto de línea después de cada fila
        }
    }
}

function changeMonth(direction, container) {
    const currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    if (direction === 'prev') {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
    } else if (direction === 'next') {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
    }

    renderCalendar(currentMonth, currentYear, container);
}

