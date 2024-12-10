import { Commit, createStore } from 'vuex'

interface State {
  theme: 'light' | 'dark';
}

// Create the store
const store = createStore<State>({
  state: {
    theme: (localStorage.getItem('theme') as 'light' | 'dark') || 'light',
  },
  getters: {
    currentTheme: (state: State): 'light' | 'dark' => state.theme,
  },
  mutations: {
    // Mutation to set the theme
    setTheme(state: State, theme: 'light' | 'dark') {
      state.theme = theme;
      localStorage.setItem('theme', theme); // Store theme in localStorage for persistence
    },
  },
  actions: {
    // Action to toggle the theme
    toggleTheme({ commit, state }: { commit: Commit; state: State }) {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      commit('setTheme', newTheme);
    },
  },
});

export default store;
