<template>
    <nav>
        <ul>
            <li>
                <router-link to="/">
                    <i class="fa fa-home"></i>
                    <span class="link-text">Home</span>
                </router-link>
            </li>
            <li>
                <router-link to="/about">
                    <i class="fa fa-info-circle"></i>
                    <span class="link-text">About</span>
                </router-link>
            </li>
            <li>
                <router-link :to="'/user/' + currentUser">
                    <i class="fa fa-user"></i>
                    <span class="link-text">Profile</span>
                </router-link>
            </li>
            <li>
                <router-link to="">
                    <ThemeToggle />
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { watch } from 'vue';
import { useStore } from 'vuex';
import ThemeToggle from './ThemeToggle.vue';

@Options({
    name: 'SideNav',
    components: {
        ThemeToggle,
    },
})
export default class SideNav extends Vue {
    // Access the Vuex store
    private store = useStore();

    // Computed property for current theme
    get currentTheme() {
        return this.store.getters.currentTheme;
    }

    get currentUser() {
        return this.store.getters.currentUser;
    }

    // Watch for theme changes and apply the corresponding class to the body
    private setThemeClass() {
        if (this.currentTheme === 'dark') {
            document.body.classList.add('dark');
            document.body.classList.remove('light');
        } else {
            document.body.classList.add('light');
            document.body.classList.remove('dark');
        }
    }

    // Lifecycle hook to apply the theme when the component is mounted
    mounted() {
        // Set the initial theme based on the Vuex store (or localStorage)
        this.setThemeClass();

        // Watch for theme changes and update the class on the body
        watch(() => this.currentTheme, () => {
            this.setThemeClass();
        });
    }
}
</script>
