// Імпортуємо функції з task-1.js та task-2.js
// Передбачається, що вони доступні у глобальному контексті

function generateAndCheckPassword(length = 8) {
    const generatedPassword = generatePassword(length);

    let choice = confirm("Ви хочете використати згенерований пароль?");

    let userPassword;

    if (choice) {
        if (confirm(`Згенерований пароль: ${generatedPassword}. Ви хочете його побачити?`)) {
            alert(`Ваш згенерований пароль: ${generatedPassword}`);
        }
        userPassword = generatedPassword;
    } else {
        userPassword = prompt("Введіть ваш пароль:");
    }

    // Перевірка вимог
    const hasUpperCase = /[A-Z]/.test(userPassword);
    const hasLowerCase = /[a-z]/.test(userPassword);
    const hasNumber = /[0-9]/.test(userPassword);

    if (!hasUpperCase || !hasLowerCase || !hasNumber) {
        alert("Password does not meet the requirements: it must contain at least one uppercase letter, one lowercase letter, and one number.");
        return; // Завершуємо виконання
    }

    let confirmPassword = prompt("Введіть підтвердження пароля:");

    if (checkPassword(userPassword, confirmPassword) === "Passwords match") {
        alert("Паролі збігаються.");
    } else {
        alert("Паролі не збігаються.");
    }
}

// Виклик функції
generateAndCheckPassword(8);
