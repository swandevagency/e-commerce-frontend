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
        image: {
          src: '/31c2f3fc59516cbb7dcb37d8790bc3cf.jpg',
          alt: 'dfsalkjfsad',
        },
        title: 'Summer T-shirt',
        price: '$50',
        subCategory: 'Dress',
        isFav: true,
      },
      {
        image: {
          src: '/31c2f3fc59516cbb7dcb37d8790bc3cf.jpg',
          alt: 'dfsalkjfsad',
        },
        title: 'Summer chert',
        price: '$20',
        subCategory: 'Dress',
        isFav: true,
      },
      {
        image: {
          src: '/31c2f3fc59516cbb7dcb37d8790bc3cf.jpg',
          alt: 'dfsalkjfsad',
        },
        title: 'Summer pert',
        price: '$30',
        subCategory: 'Dress',
        isFav: false,
      },
      {
        image: {
          src: '/31c2f3fc59516cbb7dcb37d8790bc3cf.jpg',
          alt: 'dfsalkjfsad',
        },
        title: 'pokh',
        price: '$90',
        subCategory: 'Dress',
        isFav: false,
      },
      {
        image: {
          src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
          alt: 'aklsdfjlksladfj',
        },
        title: 'mehraen',
        price: '$0.005',
        subCategory: 'Suits',
        isFav: false,
      },
      {
        image: {
          src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
          alt: 'aklsdfjlksladfj',
        },
        title: 'korosh',
        price: '$1',
        subCategory: 'Suits',
        isFav: false,
      },
      {
        image: {
          src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
          alt: 'aklsdfjlksladfj',
        },
        title: 'arian',
        price: '$1',
        subCategory: 'Suits',
        isFav: true,
      },
      {
        image: {
          src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
          alt: 'aklsdfjlksladfj',
        },
        title: 'gabral',
        price: '$200',
        subCategory: 'Suits',
        isFav: true,
      },
      {
        image: {
          src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
          alt: 'aklsdfjlksladfj',
        },
        title: 'gubral',
        price: '$300',
        subCategory: 'Sneakers',
        isFav: false,
      },
      {
        image: {
          src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
          alt: 'aklsdfjlksladfj',
        },
        title: 'gabrali',
        price: '$400',
        subCategory: 'Sneakers',
        isFav: true,
      },
      {
        image: {
          src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
          alt: 'aklsdfjlksladfj',
        },
        title: 'stive',
        price: '$10',
        subCategory: 'Sneakers',
        isFav: true,
      },
      {
        image: {
          src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
          alt: 'aklsdfjlksladfj',
        },
        title: 'tala',
        price: '$500',
        subCategory: 'Sneakers',
        isFav: true,
      },
      {
        image: {
          src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
          alt: 'aklsdfjlksladfj',
        },
        title: 'mmd',
        price: '$3',
        subCategory: 'Socks',
        isFav: false,
      },
      {
        image: {
          src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
          alt: 'aklsdfjlksladfj',
        },
        title: 'fartioush',
        price: '$1',
        subCategory: 'Socks',
        isFav: false,
      },
      {
        image: {
          src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
          alt: 'aklsdfjlksladfj',
        },
        title: 'chalqorod',
        price: '$2',
        subCategory: 'Socks',
        isFav: true,
      },
      {
        image: {
          src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
          alt: 'aklsdfjlksladfj',
        },
        title: 'tapale',
        price: '$5',
        subCategory: 'Socks',
        isFav: true,
      },
      {
        image: {
          src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
          alt: 'asldkjflsdakfj',
        },
        title: 'kazem',
        price: '$2',
        subCategory: 'lebas zir',
        isFav: false,
      },
      {
        image: {
          src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
          alt: 'asldkjflsdakfj',
        },
        title: 'kubrenetis',
        price: '$6',
        subCategory: 'lebas zir',
        isFav: true,
      },
      {
        image: {
          src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
          alt: 'asldkjflsdakfj',
        },
        title: 'gubralites',
        price: '$9',
        subCategory: 'lebas zir',
        isFav: false,
      },
      {
        image: {
          src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
          alt: 'asldkjflsdakfj',
        },
        title: 'kutlas',
        price: '$8',
        subCategory: 'lebas zir',
        isFav: true,
      },
      {
        image: {
          src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
          alt: 'asldkjflsdakfj',
        },
        title: 'sald',
        price: '$5',
        subCategory: 'jorab',
        isFav: false,
      },
      {
        image: {
          src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
          alt: 'asldkjflsdakfj',
        },
        title: 'sss',
        price: '$3',
        subCategory: 'manto',
        isFav: true,
      },
      {
        image: {
          src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
          alt: 'asldkjflsdakfj',
        },
        title: 'asdf',
        price: '$3',
        subCategory: 'rosari',
        isFav: false,
      },
      {
        image: {
          src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
          alt: 'asldkjflsdakfj',
        },
        title: 'sdafasd',
        price: '$0',
        subCategory: 'shalvar',
        isFav: true,
      },
      {
        image: {
          src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
          alt: 'asldkjflsdakfj',
        },
        title: 'asdfasdfsa',
        price: '$9',
        subCategory: 'lebas',
        isFav: false,
      },
      {
        image: {
          src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
          alt: 'asldkjflsdakfj',
        },
        title: 'asdflll',
        subCategory: 'kolah',
        price: '$7',
        isFav: true,
      },
      {
        image: {
          src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
          alt: 'asldkjflsdakfj',
        },
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
