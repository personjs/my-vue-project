<template>
  <div>
    <h1>{{ user?.name }}'s Profile</h1>
    <p>Email: {{ user?.email }}</p>
    <img v-if="user?.profilePicture" :src="user.profilePicture" alt="Profile Picture" />
    <div v-else>Loading...</div>
    <button @click="logout">Logout</button>
  </div>
</template>

<script lang="ts">
import { User } from '@/models/User';
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'UserProfilePage',
  props: {
    userId: {
      type: String,
      required: true,
    },
  },
  setup(props: any) {
    const user = ref<User | null>(null);
    const router = useRouter(); // Initialize Vue Router

    const fetchUserData = () => {
      // Simulating the fetching of user data
      user.value = new User(
        props.userId,
        'John Doe',
        'johndoe@example.com',
        '2022-01-01',
        '2022-01-01',
        'https://example.com/profile.jpg'
      );
    };

    onMounted(fetchUserData);

    // Define the logout function
    const logout = () => {
      // Clear user session (authentication state) - assuming you're using localStorage
      localStorage.removeItem('isLoggedIn'); // Clear the login state

      // Optionally, clear any other stored user data
      localStorage.removeItem('userData'); // If user data is stored separately

      // Redirect to the login page after logout
      router.push('/login'); // Redirect to login page (or any other page)
    };

    return {
      user,
      logout,
    };
  },
};
</script>
