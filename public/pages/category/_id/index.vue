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
      <section class="categories-information">
        <h1 v-if="categoriesInformation.title">
          {{ categoriesInformation.title }}
        </h1>
        <p v-if="categoriesInformation.description">
          {{ categoriesInformation.description }}
        </p>
      </section>
      <section class="categories-wrapper">
        <Categories
          :category="category"
          v-for="(category, index) in categories"
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
    categories() {
      let categoriesData = null
      switch (this.$route.params.id) {
        case 'Men':
          categoriesData = this.$store.state.categories.menCategory
          break
        case 'Women':
          categoriesData = this.$store.state.categories.womenCategory
          break
        case 'Kids':
          categoriesData = this.$store.state.categories.kidsCategory
          break
      }
      return categoriesData
    },
  },
  data() {
    return {
      categoriesInformation: {
        title: 'Categories',
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
.category-wrapper {
  padding: 35px;
  background: #e2c7c7;
}
.category-title {
  margin-top: 60px;
  text-align: center;
  h1 {
    font-size: 2em;
    font-weight: 500;
  }
}
.categories-information {
  text-align: center;
  margin-top: 35px;
  h1 {
    font-size: 1.5em;
    font-weight: 200;
  }
  p {
    font-size: 0.9em;
    margin-top: 35px;
  }
}
.categories {
  margin-top: 35px;
}
.categories-wrapper {
  display: flex;
  flex-flow: wrap;
  align-items: center;
  justify-content: space-around;
  margin-top: 35px;
  gap: 35px;
}
</style>
