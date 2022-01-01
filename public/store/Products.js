export const state = () => ({
  products: [],
})

export const mutations = {
  setProducts: (state, products) => {
    state.products = products
  },
}

export const actions = {
  getProducts: async ({ commit }, subCategoryId) => {
    const products = [
      {
        src: '/31c2f3fc59516cbb7dcb37d8790bc3cf.jpg',
        title: 'Summer T-shirt',
        price: '$50',
        subCategory: 'Dress',
        isFav: true,
      },
      {
        src: '/31c2f3fc59516cbb7dcb37d8790bc3cf.jpg',
        title: 'Summer chert',
        price: '$20',
        subCategory: 'Dress',
        isFav: true,
      },
      {
        src: '/31c2f3fc59516cbb7dcb37d8790bc3cf.jpg',
        title: 'Summer pert',
        price: '$30',
        subCategory: 'Dress',
        isFav: false,
      },
      {
        src: '/31c2f3fc59516cbb7dcb37d8790bc3cf.jpg',
        title: 'pokh',
        price: '$90',
        subCategory: 'Dress',
        isFav: false,
      },
      {
        src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
        title: 'mehraen',
        price: '$0.005',
        subCategory: 'Suits',
        isFav: false,
      },
      {
        src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
        title: 'korosh',
        price: '$1',
        subCategory: 'Suits',
        isFav: false,
      },
      {
        src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
        title: 'arian',
        price: '$1',
        subCategory: 'Suits',
        isFav: true,
      },
      {
        src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
        title: 'gabral',
        price: '$200',
        subCategory: 'Suits',
        isFav: true,
      },
      {
        src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
        title: 'gubral',
        price: '$300',
        subCategory: 'Sneakers',
        isFav: false,
      },
      {
        src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
        title: 'gabrali',
        price: '$400',
        subCategory: 'Sneakers',
        isFav: true,
      },
      {
        src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
        title: 'stive',
        price: '$10',
        subCategory: 'Sneakers',
        isFav: true,
      },
      {
        src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
        title: 'tala',
        price: '$500',
        subCategory: 'Sneakers',
        isFav: true,
      },
      {
        src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
        title: 'mmd',
        price: '$3',
        subCategory: 'Socks',
        isFav: false,
      },
      {
        src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
        title: 'fartioush',
        price: '$1',
        subCategory: 'Socks',
        isFav: false,
      },
      {
        src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
        title: 'chalqorod',
        price: '$2',
        subCategory: 'Socks',
        isFav: true,
      },
      {
        src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
        title: 'tapale',
        price: '$5',
        subCategory: 'Socks',
        isFav: true,
      },
      {
        src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
        title: 'kazem',
        price: '$2',
        subCategory: 'lebas zir',
        isFav: false,
      },
      {
        src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
        title: 'kubrenetis',
        price: '$6',
        subCategory: 'lebas zir',
        isFav: true,
      },
      {
        src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
        title: 'gubralites',
        price: '$9',
        subCategory: 'lebas zir',
        isFav: false,
      },
      {
        src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
        title: 'kutlas',
        price: '$8',
        subCategory: 'lebas zir',
        isFav: true,
      },
      {
        src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
        title: 'sald',
        price: '$5',
        subCategory: 'jorab',
        isFav: false,
      },
      {
        src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
        title: 'sss',
        price: '$3',
        subCategory: 'manto',
        isFav: true,
      },
      {
        src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
        title: 'asdf',
        price: '$3',
        subCategory: 'rosari',
        isFav: false,
      },
      {
        src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
        title: 'sdafasd',
        price: '$0',
        subCategory: 'shalvar',
        isFav: true,
      },
      {
        src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
        title: 'asdfasdfsa',
        price: '$9',
        subCategory: 'lebas',
        isFav: false,
      },
      {
        src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
        title: 'asdflll',
        subCategory: 'kolah',
        price: '$7',
        isFav: true,
      },
      {
        src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
        title: 'ssd',
        price: '$2',
        subCategory: 'pirhan',
        isFav: false,
      },
    ]
    const result = products.filter((item) => {
      return item.subCategory === subCategoryId
    })
    commit('setProducts', result)
  },
}
