<template>
  <div>
    <div class="admin-personal-info">
      <p class="admin-firstname">
        {{
          singleAdmin.adminpersonalinfo
            ? singleAdmin.adminpersonalinfo.firstname
            : ''
        }}
      </p>
      <p class="admin-lastname">
        {{
          singleAdmin.adminpersonalinfo
            ? singleAdmin.adminpersonalinfo.lastname
            : ''
        }}
      </p>
    </div>
    <div class="eidt-profile-wrapper">
      <EditProfile />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    singleAdmin() {
      return this.$store.state.singleAdmin.singleAdmin
    },
  },
}
</script>

<style lang="scss">
.admin-personal-info {
  display: flex;
  background-color: rgba($color: white, $alpha: 0.4);
  padding: 20px;
}
.admin-firstname {
  margin-right: 5px;
  font-size: 1.5em;
}
.admin-lastname {
  font-size: 1.5em;
}
</style>
