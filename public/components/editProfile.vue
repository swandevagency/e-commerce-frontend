<template>
  <div>
    <button v-if="!this.showEditInfo" @click="editAdminInfo()">
      edit profile
    </button>
    <button v-if="this.showEditInfo" @click="editAdminInfo()">cancel</button>
    <div class="edit-profile-form-wrapper">
      <form></form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showEditInfo: false,
    }
  },
  methods: {
    editAdminInfo() {
      this.showEditInfo = !this.showEditInfo
    },
  },
}
</script>

<style></style>
