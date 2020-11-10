<template>
  <div class="cart">
    <div class="header">
      <span @click="closeCart">x</span>
    </div>
    <table>
      <thead>
        <th>Quarto</th>
        <th>R$</th>
      </thead>
      <tbody>
        <tr>
          <td>Description</td>
          <td>200,00</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  methods: {
    closeCart() {
      this.$emit('closeCart', false)
    },
  },
}
</script>

<style lang="scss" scoped>
.cart {
  position: fixed;
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #eee;
  padding: 0.6rem 1.2rem;
  text-align: left;
  box-shadow: -1px 0 5px 2px rgba(51, 51, 51, 0.322);

  span {
    font-size: 1.6rem;
    cursor: pointer;
  }
  .header {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
