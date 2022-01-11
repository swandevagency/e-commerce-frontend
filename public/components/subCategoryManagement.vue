<template>
  <div>
    <div class="new-subCategory-wrapper">
      <button
        class="add-new-subCategory-button"
        v-if="!this.showButton"
        @click="showAddSubCategory()"
      >
        Add subCategory
      </button>
      <button
        class="add-new-subCategory-button"
        v-if="this.showButton"
        @click="showAddSubCategory()"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showButton: false,
    }
  },
  methods: {
    showAddSubCategory() {
      this.showButton = !this.showButton
    },
  },
}
</script>

<style></style>
