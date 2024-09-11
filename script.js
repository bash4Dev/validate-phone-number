const resultsDiv = document.getElementById('results-div');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');


const validateNum = () => {
    const userInput = document.getElementById('user-input').value.trim();

    const numRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
    const isValid = numRegex.test(userInput);

    if (!userInput) {
        alert('Please provide a valid US phone number');
    } else if (isValid) {
        resultsDiv.innerHTML = `Valid US number:<br> ${userInput}`;
    } else {
        resultsDiv.innerHTML = `Invalid US number:<br> ${userInput}`;
    }
}

checkBtn.addEventListener('click', validateNum);
clearBtn.addEventListener('click', function() {
    resultsDiv.textContent = '';
    document.getElementById('user-input').value = '';
});