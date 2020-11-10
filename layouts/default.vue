<template>
  <div>
    <header class="nav">
      <Menu @showCart="showCart = $event" />
    </header>
    <div class="cart">
      <Cart v-show="showCart" @closeCart="showCart = $event" />
    </div>
    <Nuxt />
    <footer>
      <strong>Hotel Reserve</strong>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showCart: false,
    }
  },
}
</script>
<style lang="scss" scoped>
.nav {
  position: relative;
}

.cart {
  top: 0;
  right: 0;
  position: absolute;
  z-index: 10000;
}
footer {
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: teal;
  color: #eee;
}
</style>
