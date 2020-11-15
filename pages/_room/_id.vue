<template>
  <div class="container">
    <article>
      <img :src="require(`~/assets/images/${item[0].img}`)" alt="Room" />
      <div class="infos">
        <h2>{{ item[0].title }}</h2>

        <span>{{
          item[0].price.toLocaleString('pt-BR', {
            minimunFractionDigits: 2,
            style: 'currency',
            currency: 'BRL',
          })
        }}</span>

        <p>
          {{ item[0].description }}
        </p>
        <div class="buttons">
          <nuxt-link to="/" tag="button">Voltar</nuxt-link>
          <button @click="addToCart(item[0])">Adicionar ao carrinho</button>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'RoomDetail',
  data() {
    return {
      id: this.$route.params.id,
    }
  },
  computed: {
    item() {
      const items = this.$store.getters.getItems.map(item => item)
      return items.filter(item => item.id === +this.id)
    },
  },
  methods: {
    addToCart(room) {
      this.$store.commit('setItem', room)
      alert('Item adicionado com sucesso')
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  margin: 4rem 0;
  display: flex;
}
article {
  padding: 0 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
  img {
    width: 100%;
    height: auto;
    border-radius: 0.6rem 0 0 0.6rem;
    box-shadow: 0 0 5px 2px rgba(51, 51, 51, 0.137);
    @media (max-width: 800px) {
      border-radius: 0.6rem 0.6rem 0 0;
    }
  }
  .infos {
    padding: 1rem;
    background: white;
    border-radius: 0 0.6rem 0.6rem 0;
    box-shadow: 0 0 5px 2px rgba(51, 51, 51, 0.137);
    p {
      margin: 2rem 0;
    }
    .buttons {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      padding: 0 0.6rem;
      button:nth-child(1) {
        margin-right: 0.5rem;
      }

      button {
        padding: 0.6rem 1.2rem;
        background: teal;
        color: #eee;
        border: none;
        border-radius: 0.2rem;
        cursor: pointer;
        transition: 0.2s;
        outline: 0;
        &:hover {
          background: rgb(0, 168, 168);
        }
      }
    }
    @media (max-width: 800px) {
      border-radius: 0 0 0.6rem 0.6rem;
    }
  }
}
</style>
