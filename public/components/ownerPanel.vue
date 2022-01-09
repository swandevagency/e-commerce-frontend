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
    <section class="eidt-profile-wrapper">
      <EditProfile />
    </section>
    <section class="admin-management-wrapper">
      <p>Admin management</p>
      <div class="admin-management-component-container">
        <AdminManagement />
      </div>
    </section>
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
.admin-management-wrapper {
  margin-top: 10px;
  padding: 20px;
}
</style>
