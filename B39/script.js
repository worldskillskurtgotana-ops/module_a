const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    // Select inner elements
    const numberEl = counter.querySelector('.number');
    const decreaseBtn = counter.querySelector('.decrease');
    const increaseBtn = counter.querySelector('.increase');

    // Set initial styles dynamically
    counter.style.display = 'flex';
    counter.style.flexDirection = 'column';
    counter.style.alignItems = 'center';
    counter.style.justifyContent = 'space-between';
    counter.style.width = '250px';
    counter.style.height = '200px';
    counter.style.border = '2px solid black';
    counter.style.borderRadius = '10px';
    counter.style.background = 'white';
    counter.style.margin = '0 10px';
    counter.style.padding = '10px';
    counter.style.boxSizing = 'border-box';

    numberEl.style.fontSize = '36px';
    numberEl.style.flexGrow = '1';
    numberEl.style.display = 'flex';
    numberEl.style.justifyContent = 'center';
    numberEl.style.alignItems = 'center';

    decreaseBtn.style.width = '90px';
    decreaseBtn.style.padding = '5px 0';
    decreaseBtn.style.fontSize = '18px';
    decreaseBtn.style.border = '1px solid black';
    decreaseBtn.style.borderRadius = '5px';
    decreaseBtn.style.background = 'blue';      // red decrease button
    decreaseBtn.style.color = 'white';
    decreaseBtn.style.cursor = 'pointer';
    decreaseBtn.style.margin = '5px 0';

    increaseBtn.style.width = '90px';
    increaseBtn.style.padding = '5px 0';
    increaseBtn.style.fontSize = '18px';
    increaseBtn.style.border = '1px solid black';
    increaseBtn.style.borderRadius = '5px';
    increaseBtn.style.background = 'red';     // blue increase button
    increaseBtn.style.color = 'white';
    increaseBtn.style.cursor = 'pointer';
    increaseBtn.style.margin = '5px 0';

    // Add button functionality
    decreaseBtn.addEventListener('click', () => {
        numberEl.textContent = parseInt(numberEl.textContent) - 1;
    });
    increaseBtn.addEventListener('click', () => {
        numberEl.textContent = parseInt(numberEl.textContent) + 1;
    });
});

// Style the parent container left-to-right
const container = document.querySelector('.counters');
container.style.display = 'flex';
container.style.justifyContent = 'center';
container.style.alignItems = 'center';
container.style.gap = '20px';
