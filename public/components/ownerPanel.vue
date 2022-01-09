<template>
  <div>
    <p>
      {{
        singleAdmin.adminpersonalinfo
          ? singleAdmin.adminpersonalinfo.firstname
          : ''
      }}
    </p>
    <p>
      {{
        singleAdmin.adminpersonalinfo
          ? singleAdmin.adminpersonalinfo.lastname
          : ''
      }}
    </p>
    <EditProfile />
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

<style></style>
