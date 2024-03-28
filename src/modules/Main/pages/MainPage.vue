<script setup lang="ts"></script>

<template>
  <div>MAIN PAGE</div>
  <div>
    <router-link :to="{ name: 'AccountMain' }">
      <Button label="Account" />
    </router-link>
  </div>
</template>

<style scoped lang="scss"></style>
