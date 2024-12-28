<template>
    <router-link to="/home" class="panel-link" active-class="active">
        <div class="footer-panel-block">
            <span class="eyes" ref="eyes">🌞</span>
        </div>
    </router-link>
</template>
<style scoped>

.eyes {
    display: inline-block;
    transition: transform 0.1s ease;
}

.footer-panel-block {
    font-size: 26px;
    position: fixed;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 84px;
    height: 42px;
    background-color: black;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: 'Arial', sans-serif; /* выберите шрифт по вашему вкусу */
    box-shadow: 0px 0px 5px #52521a; /* добавляем более заметную тень */
    transition: box-shadow 0.3s ease; /* плавность изменения тени */
    user-select: none; /* запретить выделение текста */
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
}

.footer-panel-block:hover {
    box-shadow: 0px 6px 40px #eeee54; /* увеличиваем и усиливаем тень при наведении */
}

@keyframes eyesAnimation {
    0%, 100% {
        transform: rotate(0deg);
    }
    25% {
        transform: rotate(10deg);
    }
    75% {
        transform: rotate(-10deg);
    }
}

</style>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const eyes = ref(null);

function onMouseMove(event) {
    const { left, top, width, height } = eyes.value.getBoundingClientRect();
    const eyeCenterX = left + width / 2;
    const eyeCenterY = top + height / 2;
    const angleDeg = angle(event.pageX, event.pageY, eyeCenterX, eyeCenterY);
    eyes.value.style.transform = `rotate(${90 + angleDeg}deg)`;
}

function angle(cursorX, cursorY, eyeCenterX, eyeCenterY) {
    return Math.atan2(cursorY - eyeCenterY, cursorX - eyeCenterX) * (180 / Math.PI);
}

onMounted(() => {
    window.addEventListener('mousemove', onMouseMove);
});

onUnmounted(() => {
    window.removeEventListener('mousemove', onMouseMove);
});
</script>
