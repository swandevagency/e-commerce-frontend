<template>
  <div>
    <div
      v-for="(category, index) in categories.categories"
      :key="index"
      class="admin-panel-category-container"
    >
      <p>{{ category.name }}</p>
      <div class="admin-panel-controls-wrapper">
        <button @click="deleteCategory(index)">Delete</button>
        <button>Edit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    categories() {
      return this.$store.state.categories.categories
    },
  },
  methods: {
    async deleteCategory(categoryIndex) {
      const id = this.categories.categories[categoryIndex]._id
      const token = localStorage.getItem('authToken')
      try {
        const res = await this.$axios({
          method: 'delete',
          url: `/categories/${id}`,
          headers: { authorization: `Bearer ${token}` },
        })
        if (res.status === 200) {
          location.reload()
        }
      } catch (error) {
        console.log(error)
      }
    },
  },
}
</script>

<style lang="scss">
.admin-panel-category-container {
  display: flex;
  flex-direction: column;
  background-color: rgba($color: white, $alpha: 0.4);
  border-radius: 3px;
  padding: 10px;
  flex-basis: calc(50% - 10px);
}
.admin-panel-controls-wrapper {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  button {
    border: none;
    border-radius: 3px;
    padding: 5px;
    background-color: #e2c7c7;
    flex-basis: calc(50% - 6px);
  }
}
</style>
