<template>
  <div class="container">
    <div class="links">
      <ul>
        <li>Suites</li>
        <li>Casais</li>
        <li>Solteiros</li>
      </ul>
    </div>
    <div class="search">
      <input
        type="text"
        placeholder="Busque a acomodação perfeita para você."
      />
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path
            d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
          />
        </svg>
      </button>
    </div>
    <RoomLayout />
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style lang="scss" scoped>
.container {
  margin: 1rem 0;
}
.links {
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: center;
    li {
      margin: 0 1rem;
      padding: 0.3rem 1rem;
      background: teal;
      border-radius: 1rem;
      color: #eee;
      font-weight: 400;
      cursor: pointer;
      transition: 0.2s;
      &:hover {
        color: rgb(255, 255, 255);
        background: rgb(0, 168, 168);
      }
    }
  }
}
.search {
  margin: 1rem 0;
  display: flex;
  justify-content: center;

  input {
    width: 40%;
    padding: 0.6rem 1rem;
    border: none;
    border-radius: 8px 0 0 8px;
    font-size: 1rem;
    color: #444;
    outline: 0;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    transition: 0.2s;
    &::placeholder {
      color: rgb(161, 161, 161, 0.7);
    }
    &:focus {
      box-shadow: 0 0 5px 3px rgba(0, 128, 128, 0.2);
    }
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 0 8px 8px 0;
    outline: 0;
    background: teal;
    padding: 0 1rem;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      background: rgb(0, 168, 168);
    }
    svg {
      fill: #eee;
      width: 1rem;
    }
  }
}
</style>
