<template>
    <div class="login-register-container">
        <div class="finger-pointer">👈</div>
        <button @click="login" class="btn login">Войти</button>
        <button @click="register" class="btn register">Регистрация</button>
    </div>
</template>

<script>
export default {
    methods: {
        login() {
            // Обработка клика на кнопку "Войти"
            console.log('Вход выполнен');
        },
        register() {
            // Обработка клика на кнопку "Регистрация"
            console.log('Регистрация выполнена');
        },
    },
};
</script>

<style scoped>

.login-register-container {

    position: fixed;
    top: 50px; /* Поднял немного вверх для видимости */
    right: 50px;
    z-index: 100;
    display: flex;
    border-radius: 50px; /* Делаем края круглыми */
    padding: 20px 40px; /* Добавляем немного больше внутренних отступов */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 100);

    background: linear-gradient(120deg,
    rgba(3, 37, 76, 0.8),
    rgba(70, 130, 180, 0.8),
    rgba(3, 37, 76, 0.8) );
    /* background: linear-gradient(120deg, #03254c 0%, #4682B4 50%, #03254c 100%); */
    background-size: 200% 200%;
    animation: ShinyBackground 5s ease infinite;
}

.login-register-container::before,
.login-register-container::after {
    content: '';
    position: absolute;
    background: linear-gradient(120deg,
    rgba(3, 37, 76, 0.8) 0%, /* 80% непрозрачности */
    rgba(70, 130, 180, 0.8) 50%, /* 80% непрозрачности */
    rgba(3, 37, 76, 0.8) 100%); /* 80% непрозрачности */
    background-size: 200% 200%;
    animation: ShinyBackground 5s ease infinite;
    border-radius: 50%;
    z-index: -1;
}

.login-register-container::before {
    width: 80px; /* Удвоенная ширина для создания полукруга */
    height: 40px;
    top: -40px; /* Половина высоты для плавного перехода*/
    left: 50px;
    border-radius: 160px 160px 0 0; /* Скругление сверху */
}

.login-register-container::after {
    width: 100px; /* Удвоенная ширина для создания полукруга */
    height: 50px;
    top: -50px; /* Половина высоты для плавного перехода */
    right: 50px;
    border-radius: 160px 160px 0 0; /* Скругление сверху */
}


.btn {
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s, transform 0.1s;
    margin-left: 10px;
    outline: none;
}

.login {
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.7), rgba(135, 206, 235, 0.7));
    color: black;
}

.register {
    background: linear-gradient(45deg, rgba(135, 206, 235, 0.7), rgba(255, 255, 255, 0.7));
    color: black;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

.btn:active {
    transform: translateY(1px);
}
@keyframes ShinyBackground {
    0% {
        background-position: 100% 50%;
    }
    50% {
        background-position: 0% 50%;
    }
    100% {
        background-position: 100% 50%;
    }
}
@keyframes shakeDiagonal {
    0%, 100% {
        transform: rotate(-45deg) translate(0, 0);
    }
    50% {
        transform: rotate(-45deg) translate(10px, -10px);
    }
}

.finger-pointer {
    position: absolute;
    top: 0; /* Отступ сверху */
    right: 0; /* Отступ справа */
    margin-top: -35px;
    font-size: 30px; /* Размер шрифта эмодзи */
    transform: rotate(-45deg); /* Поворачиваем на -45 градусов */
    animation: shakeDiagonal 2s ease-in-out infinite; /* Применяем анимацию */
    user-select: none; /* запретить выделение текста */
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
}
</style>
