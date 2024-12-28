<template>
    <div class="home-page">
        <div class="home-container">
            <h1>Добро пожаловать в наше приложение!</h1>
            <p>Это пример главной страницы с использованием Vue.js в Laravel.</p>
            <a href="/login" class="auth-link">Войти</a>
        </div>
    </div>
</template>

<script>

</script>

<style scoped>
.home-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    background-color: #f7f7f7; /* Светлый фон для страницы */
}

.home-container {
    text-align: center;
    max-width: 600px; /* Ограничение ширины контейнера */
    padding: 40px;
    background-color: #ffffff; /* Белый фон для контейнера */
    border-radius: 10px; /* Закругленные углы */
    box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1); /* Тень для контейнера */
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Плавное изменение тени и преобразования */
}

.home-container:hover {
    box-shadow: 0px 15px 40px rgba(0, 0, 0, 0.2); /* Увеличение тени при наведении */
}

h1 {
    font-size: 2.5rem; /* Размер шрифта для заголовка */
    color: #333; /* Цвет текста */
    margin-bottom: 20px; /* Отступ снизу для заголовка */
}

p {
    color: #555; /* Цвет текста */
    line-height: 1.6; /* Межстрочный интервал */
    margin-bottom: 30px; /* Отступ снизу для параграфа */
}

.auth-link {
    display: inline-block;
    padding: 10px 20px;
    color: #fff;
    background-color: #007bff;
    border-radius: 5px; /* Закругленные углы для ссылки */
    text-decoration: none;
    transition: background-color 0.3s ease; /* Плавное изменение фона при наведении */
}

.auth-link:hover {
    background-color: #0056b3; /* Смена цвета фона при наведении */
}
</style>
