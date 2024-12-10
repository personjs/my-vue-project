<template>
  <div>
    <!-- Navigation -->
    <SideNav />
    <!-- Main content -->
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SideNav from './components/SideNav.vue';

export default defineComponent({
  name: 'App',
  components: {
    SideNav,
  },
});
</script>

<style scoped lang="scss">
.content {
  margin-left: 80px;
}
</style>