<template>
    <div class="slide-panel" :class="{ expanded: isExpanded }" @mouseover="expandPanel" @mouseleave="collapsePanel">
        <nav class="panel-nav">
            <ul>
                <li>
                    <router-link to="/home" class="panel-link" active-class="active">
                        <div class="link-content">
                            <span class="panel-icon">🏠</span>
                            <span class="link-extra" v-show="isExpanded">Главная</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/childrens" class="panel-link" active-class="active">
                        <div class="link-content">
                            <span class="panel-icon">👶</span>
                            <span class="link-extra" v-show="isExpanded">Дети</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/themes" class="panel-link" active-class="active">
                        <div class="link-content">
                            <span class="panel-icon">📑</span>
                            <span class="link-extra" v-show="isExpanded">Темы занятий</span>
                        </div>
                    </router-link>
                </li>
                <li>
                    <router-link to="/reports" class="panel-link" active-class="active">
                        <div class="link-content">
                            <span class="panel-icon">📚</span>
                            <span class="link-extra" v-show="isExpanded">Отчеты</span>
                        </div>
                    </router-link>
                </li>
                <li class="bottom-link">
                    <router-link to="/profile" class="panel-link" active-class="active">
                        <div class="link-content">
                            <span class="panel-icon">👤</span>
                            <span class="link-extra" v-show="isExpanded">Профиль</span>
                        </div>
                    </router-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isExpanded: false,
        };
    },
    methods: {
        expandPanel() {
            this.isExpanded = true;
        },
        collapsePanel() {
            this.isExpanded = false;
        },
    },
};
</script>

<style scoped>
.panel-nav {
    position: relative; /* Обеспечивает относительное позиционирование для абсолютно позиционированных потомков */
    height: 100%; /* Обеспечивает полную высоту для навигационной панели */
}

/* Стиль для элемента списка, который должен быть внизу */
.bottom-link {
    position: absolute; /* Абсолютное позиционирование относительно родителя */
    bottom: 5px; /* Прижимаем к нижней части родителя */
    width: 90%; /* Обеспечиваем полную ширину для соответствия ширине родителя */
}

.slide-panel {
    background-color: rgba(140, 134, 134, 0.5);
    border-bottom-right-radius: 15px;
    border-top-right-radius: 15px;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 70px;
    background-color: #1f1f1f;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    transition: width 0.3s ease;
}

.slide-panel.expanded {
    width: 200px;
}

.panel-nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.panel-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    padding: 10px;
    transition: padding-left 0.3s ease;
}

.panel-icon {
    flex-shrink: 0;
}

.link-content {
    display: flex;
    align-items: center;
    width: 100%;
}

.link-extra {
    text-decoration: none;
    font-size: 16px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    margin-left: 10px;
    padding: 5px;
    border-radius: 5px;
    color: rgb(196, 192, 192);
    flex-grow: 1;
    display: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: display 0.3s ease , color 0.3s ease;
}

.slide-panel:hover .link-extra {
    display: block;
}

.panel-link.active .link-content {
    font-weight: bold;
}

.panel-nav ul li {
    margin: 5px;
    padding: 5px 5px;
    list-style: none;
    transition: background-color 0.3s ease, border-radius 0.3s ease;
}

.panel-nav ul li:last-child {
    border-bottom: none;
}

.panel-nav ul li:hover {
    background-color: rgba(140, 134, 134, 0.5);
    border-radius: 15px;
}
.panel-nav ul li:hover .link-extra {
  color: #ffaf00;
}

.panel-icon {
    padding: 5px;
}

</style>


