// 1. SELECT THE BUTTON
const submitBtn = document.querySelector('button[type="submit"]');

function handleSubmit(event) {
    event.preventDefault();
    alert('Your message has been sent successfully!');
}

// 2. ONLY ADD THE LISTENER IF THE BUTTON EXISTS
if (submitBtn) {
    submitBtn.addEventListener('click', handleSubmit);
}

// 3. CLOCK CODE (This will work now!)
function showDateTime() {
    const display = document.getElementById('datetime');
    if (display) {
        const now = new Date();
        display.textContent = now.toLocaleString();
    }
}

setInterval(showDateTime, 1000);
showDateTime();