<template>
  <div>
    <DesktopHeader class="desktop-header" />
    <PhoneHeader class="phone-header" />
    <div class="category-wrapper">
      <section class="category-title">
        <h1 v-if="title">{{ title }}</h1>
      </section>
      <section class="site-news-wrapper">
        <SiteNews />
      </section>
      <section class="category-description-wrapper">
        <h1 v-if="singleCategoryDescription.title">
          {{ singleCategoryDescription.title }}
        </h1>
        <p v-if="singleCategoryDescription.description">
          {{ singleCategoryDescription.description }}
        </p>
      </section>
      <section class="category-filter-wrapper">
        <div class="view-button-wrapper">
          <p>View all</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="12"
            viewBox="0 0 20 12"
          >
            <path
              id="Path_6"
              data-name="Path 6"
              d="M19.371,4,10,14.781.651,4,0,4.464,10,16,20,4.457Z"
              transform="translate(0 -4)"
              fill-rule="evenodd"
            />
          </svg>
        </div>
        <div class="filter-button-wrapper">
          <p>Filter & Sort</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="25"
            viewBox="0 0 35 25"
          >
            <path
              id="Path_5"
              data-name="Path 5"
              d="M19.486,7a3.009,3.009,0,0,0-2.932,2.083H2.757a.782.782,0,0,0-.668.345.649.649,0,0,0,0,.7.783.783,0,0,0,.668.345h13.8a3.1,3.1,0,0,0,5.864,0h13.8a.782.782,0,0,0,.668-.345.649.649,0,0,0,0-.7.782.782,0,0,0-.668-.345h-13.8A3.009,3.009,0,0,0,19.486,7Zm0,1.389A1.448,1.448,0,0,1,21,9.715a.914.914,0,0,0,0,.128,1.525,1.525,0,0,1-3.024,0,.913.913,0,0,0,0-.127A1.448,1.448,0,0,1,19.486,8.389Zm10.646,8.333A3.009,3.009,0,0,0,27.2,18.806H2.757a.782.782,0,0,0-.668.345.649.649,0,0,0,0,.7.782.782,0,0,0,.668.345H27.2a3.1,3.1,0,0,0,5.864,0h3.152a.782.782,0,0,0,.668-.345.649.649,0,0,0,0-.7.782.782,0,0,0-.668-.345H33.064A3.009,3.009,0,0,0,30.132,16.722Zm0,1.389a1.448,1.448,0,0,1,1.512,1.327.915.915,0,0,0,0,.128,1.525,1.525,0,0,1-3.024,0,.915.915,0,0,0,0-.127A1.448,1.448,0,0,1,30.132,18.111Zm-19.01,8.333A3.009,3.009,0,0,0,8.19,28.528H2.757a.782.782,0,0,0-.668.345.649.649,0,0,0,0,.7.783.783,0,0,0,.668.345H8.19A3.009,3.009,0,0,0,11.122,32a3.009,3.009,0,0,0,2.932-2.083H36.216a.782.782,0,0,0,.668-.345.649.649,0,0,0,0-.7.782.782,0,0,0-.668-.345H14.054A3.009,3.009,0,0,0,11.122,26.444Zm0,1.389a1.448,1.448,0,0,1,1.512,1.327.914.914,0,0,0,0,.127,1.448,1.448,0,0,1-1.512,1.324A1.448,1.448,0,0,1,9.61,29.285a.914.914,0,0,0,0-.127A1.448,1.448,0,0,1,11.122,27.833Z"
              transform="translate(-1.986 -7)"
            />
          </svg>
        </div>
      </section>
      <section class="category-products-wrapper">
        <Products
          :product="product"
          v-for="(product, index) in getProducts"
          :key="index"
        />
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  computed: {
    getProducts() {
      const category = this.$store.state.categories[this.$route.params.id]
      let pIndex = 0
      targetArray.forEach((item, index) => {
        if (item.title === this.$route.params.id) pIndex = index
      })
      return targetArray[pIndex].products
    },
  },
  data() {
    return {
      singleCategoryDescription: {
        title: 'View all',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
    }
  },
  asyncData({ route }) {
    const title = route.params.id
    return { title }
  },
}
</script>

<style lang="scss">
.category-description-wrapper {
  margin-top: 35px;
  text-align: center;
  h1 {
    font-size: 1.8em;
    font-weight: 300;
  }
  p {
    font-size: 1.1em;
    font-weight: 200;
    margin-top: 35px;
  }
}
.category-filter-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 35px;
}
.view-button-wrapper {
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  svg {
    width: 12px;
    height: 12px;
    margin-left: 12px;
  }
}
.filter-button-wrapper {
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;
  svg {
    width: 16px;
    height: 16px;
    margin-left: 12px;
  }
}
.category-products-wrapper {
  margin-top: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 35px;
  flex-wrap: wrap;
}
</style>
