<template>
  <google-auth />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import GoogleAuth from '@/components/Auth/GoogleAuth.vue';

@Component({ name: 'home-view', components: { GoogleAuth } })
export default class HomeView extends Vue {}
</script>

<style lang="scss" scoped>
</style>