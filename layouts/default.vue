<template>
  <div class="container">
    <header class="nav">
      <Menu @showCart="showCart = $event" />
    </header>
    <div class="cart">
      <Cart v-show="showCart" @closeCart="showCart = $event" />
    </div>
    <transition name="slide-fade" mode="out-in" appear>
      <Nuxt />
    </transition>
    <footer>
      <strong>Hotel Reserve</strong>
    </footer>
  </div>
</template>
<script>
export default {
  name: 'LayoutDefaul',
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
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
