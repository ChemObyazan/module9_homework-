const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Мария",
            "id_3": "Ирина",
            "id_4": "Анастасия",
            "id_5": "Дарья",
            "id_6": "Екатерина",
            "id_7": "Ольга",
            "id_8": "Наталья",
            "id_9": "Валентина",
            "id_10": "Елена"
        }
    }`,
    middleNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александрович",
            "id_2": "Максимович",
            "id_3": "Иванович",
            "id_4": "Артемович",
            "id_5": "Дмитриевич",
            "id_6": "Никитович",
            "id_7": "Михайлович",
            "id_8": "Даниилович",
            "id_9": "Егорович",
            "id_10": "Андреевич"
        }
    }`,
    middleNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александровна",
            "id_2": "Максимовна",
            "id_3": "Ивановна",
            "id_4": "Артемовна",
            "id_5": "Дмитриевна",
            "id_6": "Никитовна",
            "id_7": "Михайловна",
            "id_8": "Данииловна",
            "id_9": "Егоровна",
            "id_10": "Андреевна"
        }
    }`,
    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
        return obj.list[prop];
    },

    randomFirstName: function(gender) {
        if (gender === this.GENDER_FEMALE) {
            return this.randomValue(this.firstNameFemaleJson);
        } else {
            return this.randomValue(this.firstNameMaleJson);
        }
    },

    randomLastName: function(gender) {
        if (gender === this.GENDER_FEMALE) {
            return this.randomValue(this.surnameJson) + 'а';
        } else {
            return this.randomValue(this.surnameJson);
        }
    },

    randomMiddleName: function(gender) {
        if (gender === this.GENDER_FEMALE) {
            return this.randomValue(this.middleNameFemaleJson);
        } else {
            return this.randomValue(this.middleNameMaleJson);
        }
    },

    randomGender: function() {
        return Math.random() < 0.5 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomMonth: function() {
        const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
        return months[this.randomIntNumber(0, 11)];
    },

    randomBirthDate: function() {
        const maxDays = 31;
        const maxMonths = 12;
        const monthIndex = this.randomIntNumber(0, maxMonths - 1);
        const month = this.randomMonth(monthIndex);
        let maxDay = maxDays;

        if (monthIndex === 1) {
            maxDay = 28; // февраль
        } else if ([3, 5, 8, 10].includes(monthIndex)) {
            maxDay = 30; // апрель, июнь, сентябрь, ноябрь
        }

        const day = this.randomIntNumber(1, maxDay);
        const year = this.randomIntNumber(1950, 2000); 

        return `${day} ${month} ${year}`;
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.lastName = this.randomLastName(this.person.gender);
        this.person.middleName = this.randomMiddleName(this.person.gender);
        this.person.birthDate = this.randomBirthDate();

        return this.person;
    }
};



