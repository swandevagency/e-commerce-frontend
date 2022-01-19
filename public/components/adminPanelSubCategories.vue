<template>
  <div>
    <div
      class="admin-panel-category-container"
      v-for="(subCategory, index) in subCategories.subCategories"
      :key="index"
    >
      <p>{{ subCategory.name }}</p>
      <p>Category: {{ subCategory.Category.name }}</p>
      <div class="admin-panel-controls-wrapper">
        <button @click="deleteSubCategory(index)">Delete</button>
        <button @click="editForm(index)">Edit</button>
      </div>
    </div>
    <div class="edit-form-wrapper" v-if="showEditForm">lasdkjfldaksjf</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showEditForm: false,
      currentSelectedIndex: 0,
    }
  },
  computed: {
    subCategories() {
      return this.$store.state.subCategories.subCategories
    },
  },
  methods: {
    editForm(index = 0) {
      this.showEditForm = !this.showEditForm
      this.currentSelectedIndex = index
    },
    async deleteSubCategory(subCategoryIndex) {
      const id = this.subCategories.subCategories[subCategoryIndex]._id
      const token = localStorage.getItem('authToken')
      try {
        const res = await this.$axios({
          method: 'delete',
          url: `/subcategory/${id}`,
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

<style lang="scss"></style>
