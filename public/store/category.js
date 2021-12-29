export const state = () => ({
  category: {},
  subCategories: [],
})

export const mutations = {
  setCategory: (state, category) => {
    state.category = category
  },
  setSubCategories: (state, subCategories) => {
    state.subCategories = subCategories
  }
}

export const actions = {
    getSubCategory: async ({commit}, categoryId)=> {
      const subCategories = [
        {
          image: {
            url: '/2b6c4edd120d4abf5cb3802b27803cc3.jpg',
            alt: 'alskjdhlkf',
          },
          title: 'Dress',
          category: "men",
          products: [
            {
              src: '/31c2f3fc59516cbb7dcb37d8790bc3cf.jpg',
              title: 'Summer T-shirt',
              price: '$50',
              isFav: true,
            },
            {
              src: '/31c2f3fc59516cbb7dcb37d8790bc3cf.jpg',
              title: 'Summer chert',
              price: '$20',
              isFav: true,
            },
            {
              src: '/31c2f3fc59516cbb7dcb37d8790bc3cf.jpg',
              title: 'Summer pert',
              price: '$30',
              isFav: false,
            },
            {
              src: '/31c2f3fc59516cbb7dcb37d8790bc3cf.jpg',
              title: 'pokh',
              price: '$90',
              isFav: false,
            },
          ],
        },
        {
          image: {
            url: '/2b6c4edd120d4abf5cb3802b27803cc3.jpg',
            alt: 'alskjdhlkf',
          },
          title: 'Suits',
          category: 'Men',
          products: [
            {
              src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
              title: 'mehraen',
              price: '$0.005',
              isFav: false,
            },
            {
              src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
              title: 'korosh',
              price: '$1',
              isFav: false,
            },
            {
              src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
              title: 'arian',
              price: '$1',
              isFav: true,
            },
            {
              src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
              title: 'gabral',
              price: '$200',
              isFav: true,
            },
          ],
        },
        {
          image: {
            url: '/2b6c4edd120d4abf5cb3802b27803cc3.jpg',
            alt: 'alskjdhlkf',
          },
          title: 'Sneakers',
          category: 'Men',
          products: [
            {
              src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
              title: 'gubral',
              price: '$300',
              isFav: false,
            },
            {
              src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
              title: 'gabrali',
              price: '$400',
              isFav: true,
            },
            {
              src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
              title: 'stive',
              price: '$10',
              isFav: true,
            },
            {
              src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
              title: 'tala',
              price: '$500',
              isFav: true,
            },
          ],
        },
        {
          image: {
            url: '/2b6c4edd120d4abf5cb3802b27803cc3.jpg',
            alt: 'alskjdhlkf',
          },
          title: 'Socks',
          category:'Men',
          products: [
            {
              src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
              title: 'mmd',
              price: '$3',
              isFav: false,
            },
            {
              src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
              title: 'fartioush',
              price: '$1',
              isFav: false,
            },
            {
              src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
              title: 'chalqorod',
              price: '$2',
              isFav: true,
            },
            {
              src: '/f62daf7234a1fb6aa2bf13bff6ced5d5.jpg',
              title: 'tapale',
              price: '$5',
              isFav: true,
            },
          ],
        },
        {
              image: {
                url: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
                alt: 'alskjdhlkf',
              },
              title: 'lebas zir',
              category:'Women',
              products: [
                {
                  src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
                  title: 'kazem',
                  price: '$2',
                  isFav: false,
                },
                {
                  src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
                  title: 'kubrenetis',
                  price: '$6',
                  isFav: true,
                },
                {
                  src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
                  title: 'gubralites',
                  price: '$9',
                  isFav: false,
                },
                {
                  src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
                  title: 'kutlas',
                  price: '$8',
                  isFav: true,
                },
              ],
            },
            {
              image: {
                url: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
                alt: 'alskjdhlkf',
              },
              title: 'jorab',
              category:'Women',
              products: [
                {
                  src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
                  title: 'sald',
                  price: '$5',
                  isFav: false,
                },
              ],
            },
            {
              image: {
                url: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
                alt: 'alskjdhlkf',
              },
              title: 'manto',
              category:'Women',
              products: [
                {
                  src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
                  title: 'sss',
                  price: '$3',
                  isFav: true,
                },
              ],
            },
            {
              image: {
                url: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
                alt: 'alskjdhlkf',
              },
              title: 'rosari',
              category:'Women',
              products: [
                {
                  src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
                  title: 'asdf',
                  price: '$3',
                  isFav: false,
                },
              ],
            },
            {
              image: {
                url: '/3f81d737885523ad36664901be9c965f.jpg',
                alt: 'alskjdhlkf',
              },
              title: 'shalvar',
              category:'Kids',
              products: [
                {
                  src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
                  title: 'sdafasd',
                  price: '$0',
                  isFav: true,
                },
              ],
            },
            {
              image: {
                url: '/3f81d737885523ad36664901be9c965f.jpg',
                alt: 'alskjdhlkf',
              },
              title: 'lebas',
              category:'Kids',
              products: [
                {
                  src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
                  title: 'asdfasdfsa',
                  price: '$9',
                  isFav: false,
                },
              ],
            },
            {
              image: {
                url: '/3f81d737885523ad36664901be9c965f.jpg',
                alt: 'alskjdhlkf',
              },
              title: 'kolah',
              category:'Kids',
              products: [
                {
                  src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
                  title: 'asdflll',
                  price: '$7',
                  isFav: true,
                },
              ],
            },
            {
              image: {
                url: '/3f81d737885523ad36664901be9c965f.jpg',
                alt: 'alskjdhlkf',
              },
              title: 'pirhan',
              category:'Kids',
              products: [
                {
                  src: '/07b70d27f6a86dae53ba6802eb3934a4.jpg',
                  title: 'ssd',
                  price: '$2',
                  isFav: false,
                },
              ],
            },
      ],
      const result = subCategories.filter((item) => {
        return item.category === categoryId
      });
      commit("setSubCategories", result);
    },
  getCategory: async ({ commit }, categoryId) => {
    try {
      // const res = this.$axios.get(`/category/${categoryId}`);
      const data = {
        Men: {
          title: 'alskdfjsd',
          description: 'lsadkfjsd',
        },
        Women: {
          title: 'aksjfh',
          description: 'laskdfj',
        },
        kids: {
          title: 'alskdfjhs',
          description: 'alskdfjsdf',
        },
      }

      const res = {}
      res.data = data[categoryId]

      commit('setCategory', res.data)
    } catch (error) {
      console.log(error)
    }
  },
}
