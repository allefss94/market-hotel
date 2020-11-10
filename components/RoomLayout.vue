<template>
  <div class="grid">
    <RoomItem v-for="(item, index) in 6" :key="index" />
  </div>
</template>

<script>
export default {
  name: 'Rooms',
}
</script>

<style lang="scss" scoped>
.grid {
  margin: 2rem 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
