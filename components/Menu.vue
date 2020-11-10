<template>
  <div class="navbar">
    <svg
      id="hotel-location"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path
        d="M2 12h18v6h-2v-2H2v2H0V2h2v10zm8-6h8a2 2 0 0 1 2 2v3H10V6zm-4 5a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"
      />
    </svg>
    <strong>Hotel Reserve</strong>
    <svg
      id="cart"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      @click="showCart"
    >
      <path
        d="M4 2h16l-3 9H4a1 1 0 1 0 0 2h13v2H4a3 3 0 0 1 0-6h.33L3 5 2 2H0V0h3a1 1 0 0 1 1 1v1zm1 18a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  methods: {
    showCart() {
      this.$emit('showCart', true)
    },
  },
}
</script>

<style lang="scss" scoped>
.navbar {
  max-width: 100%;
  padding: 1.4rem 2rem;
  background: teal;
  color: #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 5px 2px rgba(51, 51, 51, 0.4);

  svg {
    fill: #eee;
    width: 1.6rem;
    cursor: pointer;
    transition: fill 0.2s;
    &:hover {
      fill: #dbdbdb;
    }
  }
  strong {
    cursor: default;
    font-size: 1.2rem;
  }
}
</style>
