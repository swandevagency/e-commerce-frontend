<template>
  <div>
    <div class="categories-container">
      <div class="category-image-wrapper">
        <img :src="category.src" alt="category-image" v-if="category.src" />
      </div>
      <p v-if="category.title">{{ category.title }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  props: ['category'],
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
