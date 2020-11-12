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
          <td class="infos">
            {{
              item.price.toLocaleString('pt-BR', {
                minimumFractionDigits: 2,
                style: 'currency',
                currency: 'BRL',
              })
            }}
            <span class="trash">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path
                  d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z"
                />
              </svg>
            </span>
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>{{ getTotalAmount }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Cart',
  computed: {
    ...mapGetters(['getItems', 'getTotalAmount']),
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
  .infos {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      margin: -5px 1rem 0;
      width: 0.8rem;
      fill: rgb(196, 20, 20);
    }
  }
}
</style>
