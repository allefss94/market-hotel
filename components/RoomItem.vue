<template>
  <div class="card">
    <img :src="require(`~/assets/images/${room.img}`)" alt="Bedroom" />
    <div class="info">
      <h1>{{ room.title }}</h1>
      <span>
        {{
          room.price.toLocaleString('pt-BR', {
            minimunFractionDigits: 2,
            style: 'currency',
            currency: 'BRL',
          })
        }}</span
      >
    </div>
    <div class="description">
      <p>{{ room.description }}</p>
    </div>
    <div class="button">
      <nuxt-link :to="`/room/${room.id}`" tag="button">Detalhes</nuxt-link>
      <button @click="addToCart(room)">Reservar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoomItem',
  props: {
    room: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToCart(room) {
      this.$store.commit('setItem', room)
      alert('Adicionado com sucesso')
    },
  },
}
</script>

<style lang="scss" scoped>
.card {
  margin: 1rem 0;
  width: 350px;
  height: auto;
  display: flex;
  flex-direction: column;
  border-radius: 0.4rem;
  border: none;
  box-shadow: 0 0 5px 3px rgba(128, 128, 128, 0.39);
  img {
    width: 100%;
    height: auto;
    border-radius: 0.4rem 0.4rem 0 0;
  }
  .info {
    padding: 0 1.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 1rem;
    }
    span {
      background: teal;
      font-size: 0.8rem;
      color: #eee;
      padding: 0.2rem 0.6rem;
      border-radius: 0.8rem;
      cursor: default;
    }
  }
  .description {
    font-size: 0.8rem;
    padding: 0.6rem 1.6rem;
    text-align: left;
    min-height: 100px;
  }
  .button {
    display: flex;
    justify-content: flex-end;
    padding: 0 1.6rem;
    margin-bottom: 0.6rem;

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
}
</style>
