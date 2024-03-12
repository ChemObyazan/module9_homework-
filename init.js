document.addEventListener('DOMContentLoaded', function () {
    const generateBtn = document.getElementById('generateBtn');
    const resetBtn = document.getElementById('resetBtn');
    const fullNameOutput = document.getElementById('fullNameOutput');
    const genderOutput = document.getElementById('genderOutput');
    const birthDateOutput = document.getElementById('birthDateOutput');

    function generatePerson() {
        const person = personGenerator.getPerson();
        fullNameOutput.textContent = `${person.lastName} ${person.firstName} ${person.middleName}`;
        genderOutput.textContent = person.gender;
        birthDateOutput.textContent = person.birthDate;
    }

    generateBtn.addEventListener('click', generatePerson);
    resetBtn.addEventListener('click', function () {
        fullNameOutput.textContent = 'Генерация ФИО';
        genderOutput.textContent = 'Генерация пола';
        birthDateOutput.textContent = 'Генерация даты рождения';
    });
});



