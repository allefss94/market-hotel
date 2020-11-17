<template>
  <div class="container">
    <Menu class="nav" @showCart="showCart = $event" />
    <transition name="fade-slide">
      <Cart v-show="showCart" class="cart" @closeCart="showCart = $event" />
    </transition>

    <transition name="slide-fade" mode="out-in" appear>
      <Nuxt />
    </transition>

    <Footer />
  </div>
</template>
<script>
export default {
  name: 'LayoutDefault',
  data() {
    return {
      showCart: false,
    }
  },
}
</script>
<style lang="scss" scoped>
.container {
  height: 100%;
}
.nav {
  position: relative;
}
.cart {
  top: 0;
  right: 0;
  position: absolute;
  z-index: 1000;
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

.fade-slide-enter,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(400px);
}
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.5s;
}
</style>
