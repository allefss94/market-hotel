<template>
  <div class="container">
    <article>
      <img src="@/assets/images/bedroom.jpg" alt="Room" />
      <div class="infos">
        <h2>Quarto de Casal</h2>
        <span>120,00</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque sint
          eius quidem sequi itaque esse rem illo, iusto libero, tempora
          temporibus! Accusamus beatae totam vel impedit. Beatae voluptas
          eligendi mollitia?
        </p>
        <div class="buttons">
          <nuxt-link to="/" tag="button">Voltar</nuxt-link>
          <nuxt-link to="/" tag="button">Adicionar ao carrinho</nuxt-link>
        </div>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'RoomDetail',
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
article {
  padding: 0 2rem;
  display: flex;
  img {
    border-radius: 0.6rem 0 0 0.6rem;
  }
  .infos {
    margin: 0 1.5rem;
    padding: 0 1.5rem;
    background: white;
    border-radius: 0 0.6rem 0.6rem 0;
    box-shadow: 0 0 5px 2px rgba(51, 51, 51, 0.137);

    p {
      margin: 1rem 0 5rem;
    }
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
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
}
</style>
