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
      <form
        v-if="this.showButton"
        class="new-category-form-wrapper subcategory-form"
      >
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
        <div class="subcategory-buttons">
          <button
            class="submit-category-form"
            @click.prevent="submitSubCategoryForm"
          >
            Submit
          </button>
          <button class="submit-category-form" @click.prevent="showAddFilter">
            Add filter
          </button>
        </div>
        <p>{{ this.massage }}</p>
      </form>
      <div class="add-filter-form-wrapper" v-if="showFilterForm">
        <button class="submit-category-form" @click="showAddFilter">
          Cancel
        </button>
        <form class="filter-form">
          <div class="filter-input">
            <input type="text" placeholder="Filter" v-model="key" />
          </div>
          <div class="value-input">
            <input type="text" placeholder="value" v-model="value" />
            <button class="add-value-button" @click.prevent="addValue">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
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
          <button
            class="submit-category-form"
            @click.prevent="submitFilterForm"
          >
            Submit
          </button>
          <p>{{ this.massage }}</p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showFilterForm: false,
      showButton: false,
      currentSelectedIndex: 0,
      massage: '',
      key: '',
      value: '',
      filtersForm: {
        key: '',
        values: [],
      },
      subCategoryInfo: {
        categoryId: '',
        name: '',
        filters: [],
      },
    }
  },
  computed: {
    categories() {
      return this.$store.state.categories.categories
    },
  },
  methods: {
    submitFilterForm() {
      if (this.key && this.filtersForm.values.length > 0) {
        this.filtersForm.key = this.key
        this.subCategoryInfo.filters.push(this.filtersForm)
        this.filtersForm = { key: '', values: [] }
        this.key = ''
        this.showFilterForm = false
        console.log(this.subCategoryInfo.filters)
      }
    },
    addValue() {
      if (this.value) {
        this.filtersForm.values.push(this.value)
        this.value = ''
        console.log(this.filtersForm.values)
        this.massage = 'value added'
      } else {
        this.massage = 'type value'
      }
    },
    showAddFilter() {
      this.showFilterForm = !this.showFilterForm
    },
    showAddSubCategory() {
      this.showButton = !this.showButton
      this.subCategoryInfo.categoryId = ''
      this.subCategoryInfo.name = ''
      this.massage = ''
    },
    async submitSubCategoryForm() {
      const { name, categoryId, filters } = this.subCategoryInfo
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
        filters,
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
.subcategory-buttons {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.subcategory-form {
  align-items: initial;
}
.add-filter-form-wrapper {
  position: fixed;
  backdrop-filter: blur(30px);
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.filter-form {
  display: flex;
  flex-direction: column;
}
.value-input {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.add-value-button {
  width: 22px;
  height: 22px;
  position: absolute;
  left: calc(100% - 22px);
  background: #e2c7c7;
  border: none;
  svg {
    width: 100%;
    height: 100%;
  }
}
</style>
