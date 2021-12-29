<template>
  <div>
    <div v-for="(subCategory, index) in subCategories" :key="index">
      <NuxtLink :to="`/${subCategory.title}`">
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
  background-color: rgba($color: white, $alpha: 0.4);
  border-radius: 3px;
  p {
    padding: 10px;
    color: #6b7280;
  }
}
.category-image-wrapper {
  border-radius: 3px;
  width: 100px;
  height: 100px;
  img {
    border-radius: 3px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
  }
}
</style>
