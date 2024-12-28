<template>
    <div class="registration-container">
        <div class="background-animation"></div>
        <h1>Регистрация</h1>
        <form @submit.prevent="register" class="registration-form">
            <div class="form-group">
                <input type="text" id="name" v-model="user.name" placeholder="Имя" required>
            </div>
            <div class="form-group">
                <input type="email" id="email" v-model="user.email" placeholder="Email" required>
            </div>
            <div class="form-group">
                <input type="password" id="password" v-model="user.password" placeholder="Пароль" required>
            </div>
            <div class="form-group">
                <input type="password" id="confirmPassword" v-model="user.confirmPassword" placeholder="Подтвердите пароль" required>
                <p v-if="passwordsMismatch" class="error-message">{{this.user.name}}</p>
            </div>
            <button type="submit" class="register-btn">Зарегистрироваться</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'; // Убедитесь, что добавили эту строку
export default {
    data() {
        return {
            user: {
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            },
            passwordsMismatch: false
        }
    },
    methods: {
        register() {
            if (this.user.password !== this.user.confirmPassword) {
                this.passwordsMismatch = true;
                return;
            }
            this.passwordsMismatch = false;

            // Подготовка данных формы
            const formData = {
                name: this.user.name,
                email: this.user.email,
                password: this.user.password,
                confirmPassword: this.user.confirmPassword,
            };

            // Отправка данных формы на сервер
            axios.post('api/register', formData)
                .then(response => {
                    // Обработка успешной отправки
                    console.log('Успешно зарегистрирован:', response);
                })
                .catch(error => {
                    // Обработка ошибок отправки
                    console.error('Ошибка регистрации:', error.response.data);

                    if (error.response.status === 409) {
                        console.error('Пользователь с таким email уже существует');
                    }
                });
        }
    }
}
</script>

<style scoped>

.registration-container {
    max-width: 400px;
    margin: 50px auto;
    padding: 20px;
    background: #fff;
    border-radius: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    text-align: center;
    position: relative;
    overflow: hidden;
}
.registration-container:before, .registration-container:after {
    content: '';
    position: absolute;
    height: 100%;
    width: 2px;
    background: linear-gradient(to right, #fd0000, #0059ff); /* Градиент от фиолетового к синему */
    animation: slide 10s linear infinite;
}

.registration-container:before {
    top: 0;
    left: 0;
    animation-delay: -1.5s;
}

.registration-container:after {
    bottom: 0;
    right: 0;
}

@keyframes slide {
    0%, 100% {
        transform: translateY(-98%);
    }
    25%, 75% {
        transform: translateY(98%);
    }
    50% {
        transform: translateY(0);
    }
}

.registration-form {
    display: flex;
    flex-direction: column;
}

.form-group {
    margin-bottom: 15px;
}

.form-group input {
    width: calc(100% - 20px);
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 20px;
    box-sizing: border-box;
    transition: border-color 0.3s;
}

.form-group input:focus {
    outline: none;
    border-color: #3498db;
}

.register-btn {
    padding: 10px 20px;
    margin-top: 10px;
    border: none;
    border-radius: 20px;
    background-color: #3498db;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
}

.register-btn:hover {
    background-color: #2980b9;
}

/* Добавим немного анимации */
.register-btn:active {
    transform: scale(0.98);
}

h1 {
    margin-bottom: 20px;
    font-size: 24px;
    color: #333;
}
</style>
