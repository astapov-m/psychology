import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './components/home/HomePage.vue';
import SlidePanel from "./components/home/SlidePanel.vue";
import AuthPanel from "./components/home/AuthPanel.vue";
import FooterPanel from "./components/home/FooterPanel.vue";
import RegisterContainer from "./components/Auth/RegisterContainer.vue";

const routes = [
    {
        path: '/', component: HomePage
    },
    {
        path: '/login', component: RegisterContainer
    },
];

// Создаем экземпляр роутера с историей
const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Создаем экземпляр приложения Vue
const app = createApp({
    components: {
        HomePage,
        SlidePanel,
        AuthPanel,
        FooterPanel,
        RegisterContainer
    },
});

// Подключаем роутер к приложению
app.use(router);


// Монтируем приложение
app.mount('#app');
