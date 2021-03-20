<template>
  <google-auth />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import GoogleAuth from '@/components/Auth/GoogleAuth.vue';

const HomeView = defineComponent({
  name: 'code-poc-view',
  components: { GoogleAuth },
});

export default HomeView;
</script>

<style lang="scss" scoped></style>
