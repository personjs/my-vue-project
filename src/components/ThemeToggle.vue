<template>
    <button @click="toggleTheme" :class="buttonClass">
        <i class="fa" :class="iconClass"></i>
        <span class="link-text">Theme</span>
    </button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { useStore } from 'vuex';

@Options({
    name: 'ThemeToggle',
})
export default class ThemeToggle extends Vue {
    // Access the Vuex store
    private store = useStore();

    // Computed property for current theme
    get currentTheme() {
        return this.store.getters.currentTheme;
    }

    // Method to toggle theme
    toggleTheme() {
        this.store.dispatch('toggleTheme');
    }

    // Computed property to determine button class
    get buttonClass() {
        return this.currentTheme === 'light' ? 'light-theme-button' : 'dark-theme-button';
    }

    get iconClass() {
        return this.currentTheme === 'light' ? "fa-moon" : "fa-sun";
    }
}
</script>

<style scoped lang="scss">
button {
    width: 100%;
    color: white;
    font-size: 24px;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    text-align: center;
    cursor: pointer;
    box-shadow: 0 0 #999;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
}

button:hover {
    transform: translateY(-2px);
}

button:active {
    transform: translateY(1px);
}

.light-theme-button {
    background-color: #f0f0f0;
    color: #000;
}

.dark-theme-button {
    background-color: #333;
    color: #fff;
}
</style>
