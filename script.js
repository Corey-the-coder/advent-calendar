const generateCalendar = () => {
    const calendar = document.getElementById('calendar');
    const year = 2023; // December of the current year
    const month = 11; // December (month is zero-indexed)
  
    // Days in December
    const daysInMonth = new Date(year, month + 1, 0).getDate();
  
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const dayElement = document.createElement('div');
      dayElement.classList.add('day');
      dayElement.dataset.date = date.toISOString().split('T')[0]; // Save the date for reference
      dayElement.textContent = day; // Display the day number
      dayElement.classList.add('future'); // Initially mark all as future
      calendar.appendChild(dayElement);
    }
  };
  
  const updateCalendar = () => {
    const dateInput = document.getElementById('date').value;
    if (!dateInput) {
      alert('Please enter a valid date.');
      return;
    }
  
    const inputDate = new Date(dateInput);
  
    // Mark past days with "X", current day as active
    document.querySelectorAll('.day').forEach(day => {
      const dayDate = new Date(day.dataset.date);
  
      if (dayDate < inputDate) {
        day.classList.remove('future', 'current');
        day.classList.add('past');
        day.textContent = 'X'; // Mark past days with "X"
      } else if (dayDate.toISOString().split('T')[0] === dateInput) {
        day.classList.remove('future', 'past');
        day.classList.add('current');
      } else {
        day.classList.remove('past', 'current');
        day.classList.add('future');
      }
    });
  };
  
  // Generate the calendar for December
  generateCalendar();
  
