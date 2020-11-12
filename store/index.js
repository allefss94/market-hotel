export const state = () => ({
  items: [
    {
      id: 1,
      price: 120,
      title: 'Quarto 1',
      description: 'Este é o primeiro quarto',
      img: 'bedroom.jpg',
    },
    {
      id: 2,
      price: 250,
      title: 'Quarto 2',
      description: 'Este é o segundo quarto',
      img: 'bedroom.jpg',
    },
    {
      id: 3,
      price: 125,
      title: 'Quarto 3',
      description: 'Este é o teceiro quarto',
      img: 'bedroom.jpg',
    },
    {
      id: 4,
      price: 180,
      title: 'Quarto 4',
      description: 'Este é o quarto quarto',
      img: 'bedroom.jpg',
    },
    {
      id: 5,
      price: 100,
      title: 'Quarto 5',
      description: 'Este é o quinto quarto',
      img: 'bedroom.jpg',
    },
    {
      id: 6,
      price: 400,
      title: 'Quarto 6',
      description: 'Este é o sexto quarto',
      img: 'bedroom.jpg',
    },
  ],
})

export const getters = {
  getItems(state) {
    return state.items
  },
  getTotalAmount(state) {
    const amount = state.items.reduce((amount, item) => {
      return (amount += item.price)
    }, 0)
    return amount.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      style: 'currency',
      currency: 'BRL',
    })
  },
}

export const mutations = {
  setItem: (state, item) => {
    state.items.push(item)
  },
  deleteItem: (state, item) => {
    const itemIndex = state.items.indexof(item)
    if (itemIndex > -1) {
      state.items.splice(itemIndex, 1)
    } else {
      return { message: 'Não encontrado' }
    }
  },
}
