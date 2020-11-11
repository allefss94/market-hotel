<template>
  <div class="cart">
    <div class="header">
      <span @click="closeCart">x</span>
    </div>
    <table>
      <thead>
        <th>Quarto</th>
        <th></th>
      </thead>
      <tbody>
        <tr v-for="item in getItems" :key="item.id">
          <td>{{ item.title }}</td>
          <td>
            {{
              item.price.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                style: 'currency',
                currency: 'BRL',
              })
            }}
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>{ }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  computed: {
    getItems() {
      return this.$store.state.cart.items
    },
    getTotalAmount(items) {
      return items.map(item =>
        item.reduce((amount, item) => {
          return (amount += item.price)
        }, 0),
      )
    },
  },

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
