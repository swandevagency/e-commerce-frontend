<template>
  <div>
    <NuxtLink
      :to="`/${subCategory.title}`"
      v-for="subCategory in subCategories"
      :key="subCategory.index"
    >
      <div class="categories-container">
        <div class="category-image-wrapper">
          <img
            :src="subCategory.image.url"
            :alt="subCategory.image.alt"
            v-if="subCategory.image"
          />
        </div>
        <p>{{ subCategory.title }}</p>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: ['subCategories'],
}
</script>
<style lang="scss">
.categories-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.category-image-wrapper {
  width: 100px;
  height: 100px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
}
</style>
