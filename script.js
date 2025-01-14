const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const result = document.getElementById('results-div');


window.onload = () => {
    userInput.focus();
}

checkBtn.addEventListener('click', () => {
    if (userInput.value === '') {
        return alert('Please enter a phone number');
    }else if(verifyPhoneNumber(userInput.value.trim())) {
        result.style.display = 'block';
        result.style.color = 'green';
        result.style.fontWeight = 'bolder';
        result.innerHTML = `Valid US number: ${userInput.value}`;
    }else{
        result.style.display = 'block';
        result.style.color = 'red';
        result.style.fontWeight = 'bolder';
        result.innerHTML = `Invalid US number: ${userInput.value}`;
    }
});

clearBtn.addEventListener('click', () => {
    userInput.value = '';
    result.innerHTML = '';
});

const verifyPhoneNumber = (phoneNumber) => {
    const phonePattern = /^(91\s?)?(\(\d{3}\)|\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/;
    return phonePattern.test(phoneNumber);
}
