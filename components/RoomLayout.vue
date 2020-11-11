<template>
  <div class="flex">
    <RoomItem v-for="room in rooms" :key="room.id" :room="room" />
  </div>
</template>

<script>
export default {
  name: 'RoomsLayout',
  computed: {
    rooms() {
      return this.$store.state.cart.items
    },
  },
}
</script>

<style lang="scss" scoped>
.flex {
  margin: 2rem 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
