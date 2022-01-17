<template>
  <div>
    <div class="new-category-wrapper">
      <button
        class="add-new-category-button"
        v-if="!this.showButton"
        @click="showAddSubCategory()"
      >
        Add subCategory
      </button>
      <button
        class="add-new-category-button"
        v-if="this.showButton"
        @click="showAddSubCategory()"
      >
        Cancel
      </button>
      <form v-if="this.showButton" class="new-category-form-wrapper">
        <input
          type="text"
          placeholder="New subCategory title"
          class="new-category-input"
          v-model="subCategoryInfo.name"
        />
        <p>Please chose a category</p>
        <div
          class="chose-category-wrapper"
          v-for="(category, index) in categories.categories"
          :key="index"
        >
          <input
            type="radio"
            :id="category._id"
            name="categoryName"
            :value="category._id"
            v-model="subCategoryInfo.categoryId"
          />
          <label :for="category._id">{{ category.name }}</label>
        </div>
        <button
          class="submit-category-form"
          @click.prevent="submitSubCategoryForm"
        >
          Submit
        </button>
        <p>{{ this.massage }}</p>
        <!-- <div class="sub-category-filters-wrapper">
          <p>Please insert your filters</p>
          <div class="subcategory-input-wrapper">
            <input
              type="text"
              class="new-category-input"
              v-model="subCategoryFilter"
            />
            <button
              class="add-subcategory-filter"
              @click.prevent="addSubCategoryFilter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style="fill: #000000"
              >
                <path
                  fill-rule="evenodd"
                  d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"
                ></path>
              </svg>
            </button>
          </div>
          <ul>
            <li v-for="(value, index) in values" :key="index">
              <input type="text" />
            </li>
          </ul>
        </div> -->
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subCategoryFilter: '',
      showButton: false,
      currentSelectedIndex: 0,
      massage: '',
      subCategoryInfo: {
        categoryId: '',
        name: '',
        // filters: [
        //   {
        //     key: '',
        //     values: [],
        //   },
        // ],
      },
    }
  },
  computed: {
    categories() {
      return this.$store.state.categories.categories
    },
  },
  methods: {
    showAddSubCategory() {
      this.showButton = !this.showButton
      this.subCategoryInfo.categoryId = ''
      this.subCategoryInfo.name = ''
      this.massage = ''
    },
    // addSubCategoryFilter() {
    //   this.subCategoryFilter =
    // },
    async submitSubCategoryForm() {
      const { name, categoryId } = this.subCategoryInfo
      if (!name) {
        this.massage = 'u cant create subCategory without typing a name u idiot'
        return
      }
      if (!categoryId) {
        this.massage = 'select a category idiot'
        return
      }
      const data = {
        name,
        categoryId,
      }
      const token = localStorage.getItem('authToken')
      try {
        const res = await this.$axios({
          method: 'post',
          url: '/subcategory',
          data: data,
          headers: { authorization: `Bearer ${token}` },
        })
        if (res.status === 200) {
          location.reload()
        }
      } catch (error) {
        console.log(error)
        this.massage = error.response.data.msg
      }
    },
  },
}
</script>

<style lang="scss">
// .subcategory-input-wrapper {
//   background-color: white;
//   display: flex;
//   align-items: center;
//   height: 30px;
//   border-radius: 3px;
//   overflow: hidden;
//   input {
//     background-color: transparent;
//     padding: 0;
//     margin: 0;
//     padding-inline: 8px;
//   }
// }
// .add-subcategory-filter {
//   background-color: #e2c7c7;
//   border: none;
//   width: 30px;
//   height: 30px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   svg {
//     width: 12px;
//     height: 12px;
//   }
// }
</style>
